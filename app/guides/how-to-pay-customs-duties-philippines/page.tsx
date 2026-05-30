import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'How to Pay Customs Duties and VAT in the Philippines',
  description:
    'Your import is over ₱10,000 — now what? A plain guide to how you actually pay customs duty and 12% VAT in the Philippines, via courier or PHLPOST.',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Pay Customs Duties and VAT in the Philippines',
  description:
    'A practical guide to paying import duty and 12% VAT via courier (DHL, FedEx, LBC) or PHLPOST.',
  url: 'https://importtax.ph/guides/how-to-pay-customs-duties-philippines',
  publisher: {
    '@type': 'Organization',
    name: 'ImportTax.ph',
    url: 'https://importtax.ph',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who collects customs duty payment in the Philippines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Couriers (DHL, FedEx, UPS, LBC) advance the duties to customs then bill you before or on delivery, plus a handling fee. For postal items, you pay at the PHLPOST post office or customs counter when you claim the package.',
      },
    },
    {
      '@type': 'Question',
      name: 'What charges make up my total payment when importing to the Philippines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You pay: (1) customs duty — the rate for your product applied to CIF value; (2) 12% VAT on CIF + duty; (3) other charges such as import processing fee, documentary stamp tax, and courier or postal handling fees. Note that even exempt parcels (under ₱10,000) may carry small courier processing fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need to pay Philippine customs duty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep your order invoice or receipt (proof of the actual price you paid), a valid ID, and your tracking number or the postal notice. Proof of the real price helps avoid an overvalued assessment.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtax.ph' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://importtax.ph/guides' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Pay Customs Duties',
      item: 'https://importtax.ph/guides/how-to-pay-customs-duties-philippines',
    },
  ],
};

export default function HowToPayPage() {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* Header */}
      <section className="bg-navy-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 text-xs text-navy-300 mb-4">
            <Link href="/guides" className="hover:text-white transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span>Payment</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            How to Pay{' '}
            <span className="text-accent-400">Customs Duties &amp; VAT</span>
          </h1>
          <p className="text-navy-100 text-base leading-relaxed max-w-xl">
            If your imported order&apos;s goods value is above ₱10,000, you&apos;ll owe customs
            duty plus 12% VAT before it&apos;s released. Here&apos;s how payment actually works in
            practice.
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10 text-sm text-muted leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Who collects the payment</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Couriers (DHL, FedEx, UPS, LBC, and similar)
                </h3>
                <p>
                  Most operate <strong className="text-foreground">delivered duty unpaid (DDU)</strong>:
                  the courier advances the duties and taxes to customs, then bills you — usually on
                  delivery or before — for the duty, the VAT, and their own processing or handling
                  fee. Some sellers instead offer{' '}
                  <strong className="text-foreground">delivered duty paid (DDP)</strong>, where you
                  pay the estimated taxes at checkout and nothing is due on arrival.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  Postal mail / PHLPOST (regular post and EMS)
                </h3>
                <p>
                  For postal parcels, you&apos;ll typically receive a notice that your package is
                  being held for duties and taxes. You pay the assessed amount plus postal handling
                  at the post office or customs counter when you claim it.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">What you&apos;ll actually pay</h2>
            <div className="rounded-xl border border-border bg-surface overflow-hidden overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="bg-navy-50 border-b border-border">
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Charge</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">How it&apos;s calculated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Customs duty</td>
                    <td className="px-4 py-3 text-muted">Duty rate × CIF value (item + shipping + insurance in PHP)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">12% VAT</td>
                    <td className="px-4 py-3 text-muted">12% × (CIF value + customs duty)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-foreground">Other charges</td>
                    <td className="px-4 py-3 text-muted">Import processing fee, documentary stamp tax, courier/storage handling fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted">
              Note: even tax-exempt parcels (goods value ≤ ₱10,000) can still carry small courier
              processing or handling fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Documents to have ready</h2>
            <ul className="space-y-2">
              {[
                'Order invoice or receipt (proof of the price you actually paid)',
                'Valid government-issued ID',
                'Tracking number or the postal notice card',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent-500 mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              Proof of the real value helps contest an assessment that looks too high.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">Practical tips</h2>
            <ul className="space-y-2">
              {[
                'Pay promptly — held packages can accrue storage fees the longer they sit.',
                'Keep proof of price to contest an assessment that looks too high.',
                'Estimate first so the bill isn\'t a surprise.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent-500 mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <div className="rounded-xl bg-navy-50 border border-border p-6">
            <p className="text-sm font-semibold text-foreground mb-1">
              Estimate duty and VAT before you buy
            </p>
            <p className="text-sm text-muted mb-4">
              Our free calculator shows the full breakdown — duty, 12% VAT, and landed cost — so
              the bill on arrival is never a surprise.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-navy-950 font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors"
            >
              Open the calculator →
            </Link>
          </div>

          {/* Related */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Related guides
            </p>
            <Link
              href="/guides/package-held-by-customs-philippines"
              className="text-sm text-navy-600 hover:text-navy-800 underline"
            >
              Why is my package held by customs? →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted border-t border-border pt-6">
            This is general guidance, not official customs or legal advice. Exact procedures and
            fees vary by courier and by the{' '}
            <a
              href="https://customs.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              Bureau of Customs
            </a>
            .
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link
            href="/guides"
            className="text-sm text-navy-600 hover:text-navy-800 underline"
          >
            ← All guides
          </Link>
        </div>
      </article>
    </>
  );
}
