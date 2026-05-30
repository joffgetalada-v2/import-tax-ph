import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Why Is My Package Held by Customs in the Philippines?',
  description:
    'Temu, Shein, or AliExpress order stuck "for customs clearance"? Here are the real reasons packages are held in the Philippines and what to do.',
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Is My Package Held by Customs in the Philippines?',
  description:
    "Why parcels from Temu, Shein, and AliExpress get held, how long it takes, and what you can do.",
  url: 'https://importtax.ph/guides/package-held-by-customs-philippines',
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
      name: 'Why is my Temu/Shein/AliExpress package held by customs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common reasons are: the goods value exceeds the ₱10,000 de minimis threshold, a consolidation rule was triggered (multiple parcels adding up above ₱10,000), random customs inspection, a restricted or permit-required item, an incomplete/low declaration, or pending payment of assessed duties.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does customs clearance take in the Philippines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most parcels clear within a few days. Assessment, physical inspection, or permits can extend it to one to two weeks or more. Courier shipments (DHL, FedEx, LBC) generally move faster than regular postal mail.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I do when my package is held by Philippine customs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Track through your courier (not just the seller\'s app), respond quickly if they ask for an invoice or ID, pay any assessed duties promptly, and for postal items claim and pay at the post office when you receive the notice card.',
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
      name: 'Why Is My Package Held?',
      item: 'https://importtax.ph/guides/package-held-by-customs-philippines',
    },
  ],
};

export default function PackageHeldPage() {
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
            <span>Clearance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            Why Is My Package Held by{' '}
            <span className="text-accent-400">Customs?</span>
          </h1>
          <p className="text-navy-100 text-base leading-relaxed max-w-xl">
            If your tracking says your order is &quot;held for customs clearance,&quot; don&apos;t
            panic — for most shipments this is a routine step, not a sign of a problem.
          </p>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10 text-sm text-muted leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">The common reasons</h2>
            <div className="space-y-5">

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  1. The value is over the ₱10,000 de minimis
                </h3>
                <p>
                  Shipments with a goods (FOB) value above ₱10,000 must be assessed for customs
                  duty and 12% VAT before release. Your package waits while that assessment and
                  payment happen.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  2. The consolidation rule was triggered
                </h3>
                <p>
                  Under CAO 02-2025, if several packages addressed to you arrive at the same
                  address on the same day, customs may add their values together. Even if each one
                  is under ₱10,000, the combined total can cross the threshold and become taxable.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  3. Random or physical inspection
                </h3>
                <p>
                  Customs screens parcels using risk management — many are x-rayed, and some are
                  opened for physical inspection on a random basis. This adds time even when
                  nothing is wrong.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  4. The item is restricted or needs a permit
                </h3>
                <p>
                  Some goods require clearance from other agencies — for example, cosmetics,
                  supplements, and food (FDA), or certain electronics and radio devices (NTC).
                  These take longer and may need documentation.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  5. The declared value looks incomplete or too low
                </h3>
                <p>
                  If the invoice or declaration is missing, inconsistent, or appears undervalued,
                  customs may hold the parcel to verify the real price.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  6. Duties and fees are pending payment
                </h3>
                <p>
                  Once assessed, the package is held until the duties, VAT, and any courier or
                  postal fees are paid.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">How long does it take?</h2>
            <p>
              It varies. Many parcels clear within a few days, but assessment, inspection, or
              permit checks can stretch it to one to two weeks or more. Courier shipments often
              move faster than regular postal mail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">What you can do</h2>
            <ul className="space-y-2">
              {[
                'Track through your courier, not just the seller\'s app — the courier handles the actual clearance.',
                'Respond quickly if the courier asks for an invoice, ID, or payment.',
                'Pay the assessed duties to release the package.',
                'For postal items, watch for a notice card from PHLPOST telling you to claim and pay at the post office.',
                'If it\'s stuck unusually long, contact the courier first — they can tell you what customs is waiting for.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent-500 mt-0.5 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">
              How to avoid delays next time
            </h2>
            <p>
              Keep your order receipt as proof of the real price, avoid splitting one purchase into
              many same-day parcels, steer clear of restricted items, and check the likely tax
              before you buy.
            </p>
          </section>

          {/* CTA */}
          <div className="rounded-xl bg-navy-50 border border-border p-6">
            <p className="text-sm font-semibold text-foreground mb-1">
              Estimate your likely duty and VAT before you buy
            </p>
            <p className="text-sm text-muted mb-4">
              Our free calculator shows the duty, 12% VAT, and total landed cost in seconds.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-navy-950 font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors"
            >
              Open the calculator →
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted border-t border-border pt-6">
            This guide is for general information only and isn&apos;t legal or customs advice. For
            your specific shipment, check with your courier or the{' '}
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
