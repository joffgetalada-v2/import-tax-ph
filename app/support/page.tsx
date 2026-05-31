import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Support ImportTaxPH – Help Keep It Free',
  description:
    'ImportTaxPH is free with no paywall. If it helped you, you can chip in to cover hosting and fund new guides and features.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://importtaxph.com/support' },
  ],
};

export default function SupportPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <p className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-2">
          Keep it free
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          Support ImportTaxPH
        </h1>
        <p className="text-muted text-base leading-relaxed mb-10">
          ImportTaxPH is, and will stay, <strong className="text-foreground">free to use</strong> —
          no paywall, no sign-up, and only minimal ads. If the calculator saved you from a surprise
          customs bill and you&apos;d like to help, a small contribution goes a long way.
        </p>

        {/* What your support funds */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4">What your support funds</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-0.5">▸</span>
              Hosting and the domain
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-0.5">▸</span>
              Keeping duty rates and rules up to date whenever the Bureau of Customs issues changes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-0.5">▸</span>
              New guides, calculators, and features
            </li>
          </ul>
        </section>

        {/* Ways to support */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4">Ways to support</h2>
          <div className="space-y-4">
            {/* Ko-fi */}
            <div className="rounded-xl border border-border bg-surface p-5 flex items-center gap-4">
              <span className="text-2xl leading-none">☕</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-0.5">Buy us a coffee</p>
                <p className="text-xs text-muted">Quick one-time tip via Ko-fi</p>
              </div>
              <span className="text-xs text-muted bg-navy-50 border border-border rounded px-2 py-1 whitespace-nowrap">
                Ko-fi link coming soon
              </span>
            </div>

            {/* Stripe */}
            <div className="rounded-xl border border-border bg-surface p-5 flex items-center gap-4">
              <span className="text-2xl leading-none">💳</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-0.5">One-time contribution</p>
                <p className="text-xs text-muted">Card payment via Stripe</p>
              </div>
              <span className="text-xs text-muted bg-navy-50 border border-border rounded px-2 py-1 whitespace-nowrap">
                Link coming soon
              </span>
            </div>

            {/* GCash */}
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl leading-none">📱</span>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-0.5">GCash</p>
                  <p className="text-xs text-muted">Scan the QR code below for local donors</p>
                </div>
              </div>
              <div className="w-36 h-36 rounded-lg bg-navy-50 border border-border flex items-center justify-center text-xs text-muted">
                GCash QR<br />coming soon
              </div>
            </div>
          </div>
        </section>

        {/* No pressure */}
        <div className="rounded-xl bg-navy-50 border border-border p-5 text-sm text-muted mb-10">
          There&apos;s no pressure at all — the tool stays free either way. Even{' '}
          <strong className="text-foreground">sharing the site</strong> with a friend who shops
          online, or{' '}
          <strong className="text-foreground">reporting an outdated rate</strong>, genuinely helps.
        </div>

        {/* Legal note */}
        <p className="text-xs text-muted border-t border-border pt-6">
          ImportTaxPH is an independent project, not a registered charity — contributions are
          voluntary support, not tax-deductible donations.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-navy-600 hover:text-navy-800 underline"
          >
            ← Back to the calculator
          </Link>
        </div>
      </div>
    </>
  );
}
