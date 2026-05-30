// lib/rates.ts
// Verify against the official Bureau of Customs & Tariff Commission tariff finder.
// Last reviewed: 2026-05-30.
//
// To update annual rates: change the values below and update RATES_LAST_REVIEWED.
// This is the ONLY file that needs to change when tax rates or exchange rates shift.

// ─── Thresholds ───────────────────────────────────────────────────────────────

/**
 * De minimis threshold in PHP (based on FOB/FCA value).
 * Shipments at or below this are exempt from duty AND VAT.
 * Source: CMTA; CAO No. 02-2025, effective 2025-05-07.
 */
export const DE_MINIMIS_PHP = 10_000;

// ─── Tax Rates ────────────────────────────────────────────────────────────────

/** VAT applied to (CIF + duty). */
export const VAT_RATE = 0.12;

// ─── Product Categories & Duty Rates ─────────────────────────────────────────
// These are REPRESENTATIVE ESTIMATES only.
// Actual duty depends on the item's HS/AHTN code and BOC valuation.

export type ProductCategory =
  | 'electronics'
  | 'clothing'
  | 'footwear'
  | 'bags-accessories'
  | 'toys'
  | 'cosmetics'
  | 'books'
  | 'general';

export interface CategoryConfig {
  /** Display label shown in the UI dropdown. */
  label: string;
  /** Representative duty rate (0.10 = 10%). */
  dutyRate: number;
  /** Short note about variance shown next to the rate in results. */
  dutyRateNote: string;
}

export const CATEGORY_CONFIG: Record<ProductCategory, CategoryConfig> = {
  electronics: {
    label: 'Electronics & Gadgets',
    dutyRate: 0.10,
    dutyRateNote: 'Estimate — varies; many electronics are duty-free (0%). Verify in the Tariff Commission Tariff Finder.',
  },
  clothing: {
    label: 'Clothing & Apparel',
    dutyRate: 0.15,
    dutyRateNote: 'Estimate — most textile apparel is 15%. Verify in the Tariff Commission Tariff Finder.',
  },
  footwear: {
    label: 'Shoes & Footwear',
    dutyRate: 0.15,
    dutyRateNote: 'Estimate — most footwear is 15%. Verify in the Tariff Commission Tariff Finder.',
  },
  'bags-accessories': {
    label: 'Bags & Accessories',
    dutyRate: 0.15,
    dutyRateNote: 'Estimate — rate may vary by material. Verify in the Tariff Commission Tariff Finder.',
  },
  toys: {
    label: 'Toys & Games',
    dutyRate: 0.10,
    dutyRateNote: 'Estimate — verify in the Tariff Commission Tariff Finder.',
  },
  cosmetics: {
    label: 'Cosmetics & Skincare',
    dutyRate: 0.10,
    dutyRateNote: 'Estimate — verify in the Tariff Commission Tariff Finder.',
  },
  books: {
    label: 'Books & Publications',
    dutyRate: 0.00,
    dutyRateNote: 'Generally duty-free under CMTA. Verify in the Tariff Commission Tariff Finder.',
  },
  general: {
    label: 'Other / General Goods',
    dutyRate: 0.10,
    dutyRateNote: 'Estimate — actual rate depends on HS/AHTN classification. Verify in the Tariff Commission Tariff Finder.',
  },
};

// ─── Exchange Rates ───────────────────────────────────────────────────────────
// Static rates — do NOT call a live FX API (per project requirement).
// Update periodically by checking BSP (bsp.gov.ph) or xe.com.

/** Date these exchange rates were last set. Shown in the UI as "rate as of [date]". */
export const FX_RATES_DATE = '2026-05-30';

export type CurrencyCode = 'PHP' | 'USD' | 'EUR' | 'GBP' | 'CNY' | 'JPY' | 'SGD' | 'AUD';

/** How many PHP = 1 unit of this currency. PHP = 1 (base). */
export const EXCHANGE_RATES: Record<CurrencyCode, number> = {
  PHP: 1,
  USD: 57.00,
  EUR: 62.50,
  GBP: 73.00,
  CNY: 7.90,
  JPY: 0.38,
  SGD: 42.50,
  AUD: 37.00,
};

export const CURRENCY_LABELS: Record<CurrencyCode, string> = {
  PHP: 'PHP — Philippine Peso',
  USD: 'USD — US Dollar',
  EUR: 'EUR — Euro',
  GBP: 'GBP — British Pound',
  CNY: 'CNY — Chinese Yuan',
  JPY: 'JPY — Japanese Yen',
  SGD: 'SGD — Singapore Dollar',
  AUD: 'AUD — Australian Dollar',
};

// ─── Optional Courier Handling Fee ───────────────────────────────────────────
// Informational only — not added to the calculation automatically.
export const COURIER_HANDLING_FEE_EXAMPLE_PHP = 120;

// ─── Metadata ────────────────────────────────────────────────────────────────

export const RATES_LAST_REVIEWED = '2026-05-30';
export const RATES_REGULATION_REF = 'CAO No. 02-2025 (effective 2025-05-07)';
