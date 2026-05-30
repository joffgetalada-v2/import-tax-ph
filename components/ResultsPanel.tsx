'use client';

import { CalculationResult } from '@/lib/calculateImportTax';
import { formatPhp, formatRate } from '@/lib/formatCurrency';
import { DE_MINIMIS_PHP, RATES_REGULATION_REF } from '@/lib/rates';
import CountUp from '@/components/CountUp';
import SegmentedBar from '@/components/SegmentedBar';

interface ResultsPanelProps {
  result: CalculationResult;
}

export default function ResultsPanel({ result }: ResultsPanelProps) {
  if (result.status === 'exempt') {
    return (
      <div
        className="rounded-2xl border-2 border-success-500 bg-success-50 p-5 sm:p-6 space-y-3"
        role="region"
        aria-label="Tax calculation result"
        aria-live="polite"
      >
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success-500 text-white shrink-0 text-lg">
            ✓
          </div>
          <div>
            <h2 className="font-bold text-success-700 text-lg leading-tight">
              Tax-Free Shipment
            </h2>
            <p className="text-sm text-success-700 mt-0.5">
              Under the ₱{DE_MINIMIS_PHP.toLocaleString()} de minimis threshold
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-xl border border-success-500/30 p-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted">Goods value (FOB)</span>
            <CountUp value={result.fobValuePhp} className="font-mono font-semibold text-foreground tabular-nums" />
          </div>
          {result.cifValuePhp !== result.fobValuePhp && (
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted">CIF value (incl. shipping/insurance)</span>
              <CountUp value={result.cifValuePhp} className="font-mono text-sm text-foreground tabular-nums" />
            </div>
          )}
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <span className="text-sm font-medium text-success-700">Total duties &amp; taxes</span>
            <span className="font-mono font-bold text-success-700 tabular-nums">₱0.00</span>
          </div>
        </div>

        {/* Explanation */}
        <p className="text-sm text-success-700">
          This shipment is exempt from customs duty and VAT because the goods value (FOB{' '}
          {formatPhp(result.fobValuePhp)}) is at or below the ₱{DE_MINIMIS_PHP.toLocaleString()}{' '}
          de minimis threshold under {RATES_REGULATION_REF}.
        </p>

        {/* Courier fee note */}
        <p className="text-sm text-success-700">
          Duty and VAT are ₱0, but your courier may still charge a processing or handling fee.
        </p>

        {/* Consolidation warning */}
        {result.consolidationToggle && (
          <div className="rounded-lg bg-accent-100 border border-accent-400/40 px-4 py-3">
            <p className="text-sm font-medium text-accent-600">
              ⚠ Consolidation rule note
            </p>
            <p className="text-xs text-accent-600 mt-1">
              Multiple shipments to the same recipient arriving on the same day may be consolidated
              by customs and treated as a single shipment — potentially exceeding the ₱10,000
              threshold. Per CAO 02-2025, verify with your courier or BOC.
            </p>
          </div>
        )}
      </div>
    );
  }

  // ─── Taxable result ────────────────────────────────────────────────────────
  const { breakdown, categoryLabel, dutyRateNote, fxRateUsed, fxRateDate } = result;
  const { cifValuePhp, dutyRateUsed, dutyAmount, vatAmount, totalTaxes, landedCost } = breakdown;

  const segments = [
    { label: 'Item + shipping', value: cifValuePhp,  colorClass: 'bg-navy-600' },
    { label: 'Duty',            value: dutyAmount,   colorClass: 'bg-accent-500' },
    { label: 'VAT',             value: vatAmount,    colorClass: 'bg-accent-300' },
  ];

  return (
    <div
      className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden"
      role="region"
      aria-label="Tax calculation result"
      aria-live="polite"
    >
      {/* Title bar */}
      <div className="bg-navy-800 px-5 py-3 sm:px-6">
        <p className="text-xs text-navy-200 font-medium uppercase tracking-wider">
          Estimated breakdown · {categoryLabel}
        </p>
        {dutyRateNote && (
          <p className="text-xs text-navy-200/70 mt-0.5">{dutyRateNote}</p>
        )}
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Line items */}
        <dl className="space-y-2">
          <LineItem label="Dutiable (CIF) value" hint="item + shipping + insurance">
            <CountUp value={cifValuePhp} className="font-mono tabular-nums text-sm" />
          </LineItem>

          <LineItem
            label={`Customs duty (${formatRate(dutyRateUsed)})`}
            hint="applied to CIF value"
          >
            <CountUp value={dutyAmount} className="font-mono tabular-nums text-sm" />
          </LineItem>

          <LineItem label="VAT (12%)" hint="applied to CIF + duty">
            <CountUp value={vatAmount} className="font-mono tabular-nums text-sm" />
          </LineItem>

          {/* Subtotal separator */}
          <div className="border-t border-border pt-2 mt-2">
            <LineItem
              label="Total duties & taxes"
              emphasis
            >
              <CountUp
                value={totalTaxes}
                className="font-mono font-bold tabular-nums text-base text-navy-700"
              />
            </LineItem>
          </div>
        </dl>

        {/* Landed cost — most emphasized */}
        <div className="rounded-xl bg-navy-50 border border-navy-200 px-4 py-4">
          <div className="flex justify-between items-center gap-2">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-medium">
                Estimated landed cost
              </p>
              <p className="text-xs text-muted mt-0.5">CIF + all duties & taxes</p>
            </div>
            <CountUp
              value={landedCost}
              className="font-mono font-extrabold tabular-nums text-2xl sm:text-3xl text-navy-900 shrink-0"
            />
          </div>
        </div>

        {/* Visual breakdown bar */}
        <SegmentedBar segments={segments} className="pt-1" />

        {/* FX rate note */}
        {fxRateUsed !== 1 && (
          <p className="text-xs text-muted">
            Exchange rate used: 1 foreign unit = ₱{fxRateUsed.toFixed(2)} (as of {fxRateDate})
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Helper component ────────────────────────────────────────────────────────

interface LineItemProps {
  label: string;
  hint?: string;
  emphasis?: boolean;
  children?: React.ReactNode;
}

function LineItem({ label, hint, emphasis, children }: LineItemProps) {
  return (
    <div className="flex justify-between items-start gap-2">
      <div>
        <dt className={`text-sm ${emphasis ? 'font-semibold text-foreground' : 'text-muted'}`}>
          {label}
        </dt>
        {hint && <dd className="text-xs text-muted-2 mt-0.5">{hint}</dd>}
      </div>
      <dd className={emphasis ? 'font-semibold' : ''}>{children}</dd>
    </div>
  );
}
