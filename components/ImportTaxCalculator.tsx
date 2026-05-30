'use client';

import { useState } from 'react';
import {
  calculateImportTax,
  CalculationResult,
  CalculatorInput,
} from '@/lib/calculateImportTax';
import {
  CATEGORY_CONFIG,
  CURRENCY_LABELS,
  EXCHANGE_RATES,
  FX_RATES_DATE,
  ProductCategory,
  CurrencyCode,
} from '@/lib/rates';
import ResultsPanel from '@/components/ResultsPanel';
import TrustBadge from '@/components/TrustBadge';
import DisclaimerNote from '@/components/DisclaimerNote';

interface ImportTaxCalculatorProps {
  defaultCategory?: ProductCategory;
  pageHint?: string;
}

const CATEGORIES = Object.entries(CATEGORY_CONFIG) as [ProductCategory, (typeof CATEGORY_CONFIG)[ProductCategory]][];
const CURRENCIES = Object.keys(CURRENCY_LABELS) as CurrencyCode[];

export default function ImportTaxCalculator({
  defaultCategory = 'general',
}: ImportTaxCalculatorProps) {
  const [itemValue, setItemValue] = useState('');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [shipping, setShipping] = useState('');
  const [insurance, setInsurance] = useState('');
  const [category, setCategory] = useState<ProductCategory>(defaultCategory);
  const [consolidation, setConsolidation] = useState(false);
  const [showFxOverride, setShowFxOverride] = useState(false);
  const [customFxRate, setCustomFxRate] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [errors, setErrors] = useState<{ itemValue?: string; shipping?: string; insurance?: string }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const numVal = parseFloat(itemValue);
    const shippingVal = parseFloat(shipping) || 0;
    const insuranceVal = parseFloat(insurance) || 0;
    const newErrors: { itemValue?: string; shipping?: string; insurance?: string } = {};

    if (!itemValue || isNaN(numVal) || numVal < 0) {
      newErrors.itemValue = 'Please enter a valid item value (0 or greater).';
    }
    if (shipping !== '' && shippingVal < 0) {
      newErrors.shipping = 'Shipping cost cannot be negative.';
    }
    if (insurance !== '' && insuranceVal < 0) {
      newErrors.insurance = 'Insurance cannot be negative.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const input: CalculatorInput = {
      itemValue: numVal,
      currency,
      shippingCostPhp: parseFloat(shipping) || 0,
      insuranceCostPhp: parseFloat(insurance) || 0,
      category,
      consolidationToggle: consolidation,
      customFxRate: showFxOverride && customFxRate ? parseFloat(customFxRate) : undefined,
    };

    setResult(calculateImportTax(input));
  }

  const defaultRate = EXCHANGE_RATES[currency];

  return (
    <div className="w-full">
      {/* Trust badge */}
      <div className="flex justify-center mb-5">
        <TrustBadge />
      </div>

      {/* Calculator card */}
      <div className="bg-surface rounded-2xl shadow-xl border border-border overflow-hidden">
        <form onSubmit={handleSubmit} noValidate>
          {/* Form body */}
          <div className="p-5 sm:p-7 space-y-5">

            {/* Item value + currency */}
            <fieldset>
              <legend className="text-sm font-semibold text-foreground mb-3">
                Item value & currency
              </legend>
              <div className="flex gap-2">
                {/* Currency selector */}
                <div className="flex-none">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                    className="h-12 px-3 rounded-lg border border-border bg-surface-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Amount input */}
                <div className="flex-1">
                  <label htmlFor="itemValue" className="sr-only">
                    Item value
                  </label>
                  <input
                    id="itemValue"
                    type="number"
                    inputMode="decimal"
                    min="0"
                    step="any"
                    placeholder="e.g. 25.99"
                    value={itemValue}
                    onChange={(e) => setItemValue(e.target.value)}
                    aria-describedby={errors.itemValue ? 'itemValue-error' : undefined}
                    aria-invalid={!!errors.itemValue}
                    className={`w-full h-12 px-4 rounded-lg border text-sm text-foreground bg-surface placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                      errors.itemValue ? 'border-red-400 ring-1 ring-red-400' : 'border-border'
                    }`}
                  />
                </div>
              </div>
              {errors.itemValue && (
                <p id="itemValue-error" role="alert" className="mt-1.5 text-xs text-red-500">
                  {errors.itemValue}
                </p>
              )}

              {/* FX rate info + override */}
              {currency !== 'PHP' && (
                <div className="mt-2">
                  <p className="text-xs text-muted">
                    Rate: 1 {currency} = ₱{defaultRate.toFixed(2)} (as of {FX_RATES_DATE})
                    {' · '}
                    <button
                      type="button"
                      onClick={() => setShowFxOverride(!showFxOverride)}
                      className="underline hover:text-foreground transition-colors focus:outline-none"
                    >
                      {showFxOverride ? 'Use default rate' : 'Override rate'}
                    </button>
                  </p>
                  {showFxOverride && (
                    <div className="mt-2">
                      <label htmlFor="customFx" className="text-xs text-muted block mb-1">
                        Custom rate: 1 {currency} = ₱
                      </label>
                      <input
                        id="customFx"
                        type="number"
                        inputMode="decimal"
                        min="0.01"
                        step="any"
                        placeholder={defaultRate.toFixed(2)}
                        value={customFxRate}
                        onChange={(e) => setCustomFxRate(e.target.value)}
                        className="w-36 h-9 px-3 rounded-lg border border-border bg-surface text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                  )}
                </div>
              )}
            </fieldset>

            {/* Shipping + insurance */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="shipping" className="block text-sm font-medium text-foreground mb-1.5">
                  Shipping cost
                  <span className="ml-1 text-xs text-muted font-normal">(PHP, optional)</span>
                </label>
                <input
                  id="shipping"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  placeholder="0.00"
                  value={shipping}
                  onChange={(e) => setShipping(e.target.value)}
                  aria-describedby={errors.shipping ? 'shipping-error' : undefined}
                  aria-invalid={!!errors.shipping}
                  className={`w-full h-11 px-3 rounded-lg border text-sm text-foreground bg-surface placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                    errors.shipping ? 'border-red-400 ring-1 ring-red-400' : 'border-border'
                  }`}
                />
                {errors.shipping && (
                  <p id="shipping-error" role="alert" className="mt-1 text-xs text-red-500">
                    {errors.shipping}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-foreground mb-1.5">
                  Insurance
                  <span className="ml-1 text-xs text-muted font-normal">(PHP, optional)</span>
                </label>
                <input
                  id="insurance"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="any"
                  placeholder="0.00"
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  aria-describedby={errors.insurance ? 'insurance-error' : undefined}
                  aria-invalid={!!errors.insurance}
                  className={`w-full h-11 px-3 rounded-lg border text-sm text-foreground bg-surface placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                    errors.insurance ? 'border-red-400 ring-1 ring-red-400' : 'border-border'
                  }`}
                />
                {errors.insurance && (
                  <p id="insurance-error" role="alert" className="mt-1 text-xs text-red-500">
                    {errors.insurance}
                  </p>
                )}
              </div>
            </div>

            {/* Product category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-foreground mb-1.5">
                Product category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as ProductCategory)}
                className="w-full h-11 px-3 rounded-lg border border-border bg-surface text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer"
              >
                {CATEGORIES.map(([key, cfg]) => (
                  <option key={key} value={key}>
                    {cfg.label}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-xs text-muted">
                {CATEGORY_CONFIG[category].dutyRateNote}
              </p>
            </div>

            {/* Consolidation toggle */}
            <div className="flex items-start gap-3">
              <input
                id="consolidation"
                type="checkbox"
                checked={consolidation}
                onChange={(e) => setConsolidation(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-border accent-accent-500 cursor-pointer"
              />
              <label htmlFor="consolidation" className="text-sm text-foreground cursor-pointer leading-snug">
                Multiple shipments arriving at the same address on the same day
                <span className="block text-xs text-muted mt-0.5">
                  Triggers a CAO 02-2025 consolidation-rule warning in results
                </span>
              </label>
            </div>
          </div>

          {/* CTA */}
          <div className="px-5 sm:px-7 pb-6">
            <button
              type="submit"
              className="w-full h-12 sm:h-14 rounded-xl bg-accent-500 hover:bg-accent-400 active:bg-accent-600 text-navy-950 font-bold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 shadow-sm"
            >
              Calculate Import Tax
            </button>
          </div>
        </form>

        {/* Results */}
        {result && (
          <div className="px-5 sm:px-7 pb-6 sm:pb-8 border-t border-border pt-5">
            <ResultsPanel result={result} />
          </div>
        )}
      </div>

      {/* Disclaimer below card */}
      <div className="mt-4 px-2">
        <DisclaimerNote />
      </div>
    </div>
  );
}
