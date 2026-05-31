'use client';

import { useState } from 'react';

export default function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      const el = document.createElement('textarea');
      el.value = address;
      el.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="flex items-start gap-2">
      <code className="flex-1 text-xs font-mono bg-navy-50 border border-border rounded-lg px-3 py-2.5 break-all text-foreground leading-relaxed select-all">
        {address}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        className="shrink-0 px-3 py-2.5 text-xs font-semibold rounded-lg bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
