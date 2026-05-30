import { RATES_LAST_REVIEWED, RATES_REGULATION_REF } from '@/lib/rates';

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-navy-100 border border-navy-200 text-xs font-medium text-navy-700">
      <span className="w-1.5 h-1.5 rounded-full bg-success-500 shrink-0" aria-hidden="true" />
      Updated {RATES_LAST_REVIEWED} · per {RATES_REGULATION_REF}
    </div>
  );
}
