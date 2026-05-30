// lib/formatCurrency.ts
// Peso and number formatting utilities.

const phpFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactFormatter = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Formats a number as Philippine Peso: ₱1,234.56 */
export function formatPhp(value: number): string {
  return phpFormatter.format(value);
}

/** Formats a number as Philippine Peso with no decimals: ₱1,235 */
export function formatPhpRounded(value: number): string {
  return compactFormatter.format(value);
}

/** Formats a decimal rate as a percentage string: 0.15 → "15%" */
export function formatRate(rate: number): string {
  return `${(rate * 100).toFixed(0)}%`;
}

/** Formats a plain number with commas: 1234567.89 → "1,234,567.89" */
export function formatNumber(value: number, decimals = 2): string {
  return new Intl.NumberFormat('en-PH', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}
