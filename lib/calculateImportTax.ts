// lib/calculateImportTax.ts
// Pure calculation function for Philippine import duties and VAT.
// No DOM dependencies, no React, no side effects — safe to test in isolation.

import {
  CurrencyCode,
  ProductCategory,
  DE_MINIMIS_PHP,
  VAT_RATE,
  CATEGORY_CONFIG,
  EXCHANGE_RATES,
  FX_RATES_DATE,
} from '@/lib/rates';

// ─── Input ────────────────────────────────────────────────────────────────────

export interface CalculatorInput {
  /** Item price in the selected currency. Must be >= 0. */
  itemValue: number;
  currency: CurrencyCode;
  /** Shipping cost already in PHP. Defaults to 0. */
  shippingCostPhp: number;
  /** Insurance cost already in PHP. Defaults to 0. */
  insuranceCostPhp: number;
  category: ProductCategory;
  /**
   * True if the user is sending multiple shipments to the same address on the
   * same day — triggers the CAO 02-2025 consolidation-rule warning.
   */
  consolidationToggle: boolean;
  /**
   * Optional user override of the static exchange rate.
   * When provided, used instead of EXCHANGE_RATES[currency].
   */
  customFxRate?: number;
}

// ─── Output ───────────────────────────────────────────────────────────────────

export interface TaxBreakdown {
  /** FOB value in PHP (goods/item value only, no shipping or insurance). */
  fobValuePhp: number;
  /** Total CIF value in PHP (item + shipping + insurance). */
  cifValuePhp: number;
  /** The duty rate applied (e.g. 0.15 for 15%). */
  dutyRateUsed: number;
  /** Customs duty = dutyRate × CIF. */
  dutyAmount: number;
  /** VAT base = CIF + duty. */
  vatBase: number;
  /** VAT = 0.12 × vatBase. */
  vatAmount: number;
  /** Total taxes = duty + VAT. */
  totalTaxes: number;
  /** Estimated landed cost = CIF + totalTaxes. */
  landedCost: number;
}

export interface ExemptResult {
  status: 'exempt';
  /** FOB value in PHP — the value checked against the de minimis threshold. */
  fobValuePhp: number;
  /** CIF value in PHP — includes shipping and insurance if provided. */
  cifValuePhp: number;
  consolidationToggle: boolean;
}

export interface TaxableResult {
  status: 'taxable';
  breakdown: TaxBreakdown;
  categoryLabel: string;
  dutyRateNote: string;
  fxRateUsed: number;
  fxRateDate: string;
}

export type CalculationResult = ExemptResult | TaxableResult;

// ─── Pure Function ────────────────────────────────────────────────────────────

/**
 * Calculates Philippine import duty and VAT for a given shipment.
 *
 * Logic:
 * 1. Convert item value to PHP using static exchange rate (or user override).
 * 2. FOB = itemValuePhp (goods value only — the basis for de minimis check).
 * 3. CIF = itemValuePhp + shippingCostPhp + insuranceCostPhp.
 * 4. De minimis check: if FOB ≤ DE_MINIMIS_PHP (₱10,000), shipment is exempt.
 *    Note: the threshold is checked against FOB/goods value, not CIF.
 * 5. If taxable (FOB > ₱10,000), compute duty and VAT on the full CIF value:
 *    duty     = dutyRate × CIF
 *    vatBase  = CIF + duty
 *    vat      = VAT_RATE × vatBase
 *    total    = duty + vat
 *    landed   = CIF + total
 */
export function calculateImportTax(input: CalculatorInput): CalculationResult {
  const {
    itemValue,
    currency,
    shippingCostPhp,
    insuranceCostPhp,
    category,
    consolidationToggle,
    customFxRate,
  } = input;

  const fxRate = customFxRate ?? EXCHANGE_RATES[currency];
  const itemValuePhp = itemValue * fxRate;

  // FOB = goods value only (no shipping/insurance). This is what CAO 02-2025
  // checks against the ₱10,000 de minimis threshold.
  const fobValuePhp = itemValuePhp;

  // CIF = goods + shipping + insurance. Used as the duty/VAT base if taxable.
  const cifValuePhp = itemValuePhp + shippingCostPhp + insuranceCostPhp;

  // Step 4: de minimis check — based on FOB, not CIF
  if (fobValuePhp <= DE_MINIMIS_PHP) {
    return {
      status: 'exempt',
      fobValuePhp,
      cifValuePhp,
      consolidationToggle,
    };
  }

  // Step 5: taxable computation — duty and VAT applied to CIF
  const { dutyRate, label, dutyRateNote } = CATEGORY_CONFIG[category];

  const dutyAmount = dutyRate * cifValuePhp;
  const vatBase    = cifValuePhp + dutyAmount;
  const vatAmount  = VAT_RATE * vatBase;
  const totalTaxes = dutyAmount + vatAmount;
  const landedCost = cifValuePhp + totalTaxes;

  return {
    status: 'taxable',
    breakdown: {
      fobValuePhp,
      cifValuePhp,
      dutyRateUsed: dutyRate,
      dutyAmount,
      vatBase,
      vatAmount,
      totalTaxes,
      landedCost,
    },
    categoryLabel: label,
    dutyRateNote,
    fxRateUsed: fxRate,
    fxRateDate: FX_RATES_DATE,
  };
}
