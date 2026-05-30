'use client';

import { useEffect, useState } from 'react';

interface Segment {
  label: string;
  value: number;
  colorClass: string;
}

interface SegmentedBarProps {
  segments: Segment[];
  className?: string;
}

export default function SegmentedBar({ segments, className }: SegmentedBarProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger CSS transition after mount
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const total = segments.reduce((sum, s) => sum + s.value, 0);
  if (total === 0) return null;

  return (
    <div className={className}>
      {/* Bar */}
      <div
        className="flex h-3 rounded-full overflow-hidden bg-border gap-px"
        role="img"
        aria-label="Cost breakdown bar"
      >
        {segments.map((seg) => {
          const pct = (seg.value / total) * 100;
          return (
            <div
              key={seg.label}
              className={`${seg.colorClass} transition-all duration-700 ease-out rounded-full`}
              style={{ width: mounted ? `${pct}%` : '0%' }}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-2">
        {segments.map((seg) => {
          const pct = ((seg.value / total) * 100).toFixed(1);
          return (
            <div key={seg.label} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-sm ${seg.colorClass} shrink-0`} aria-hidden="true" />
              <span className="text-xs text-muted">
                {seg.label} <span className="text-foreground font-medium">{pct}%</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
