import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact ImportTaxPH – Rate Corrections & Questions',
  description:
    'Report an outdated Philippine customs duty rate, flag a calculator bug, or ask a question. Email hello@importtaxph.com — we typically reply within 1–3 business days.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.importtaxph.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.importtaxph.com/contact' },
  ],
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact ImportTaxPH',
  url: 'https://www.importtaxph.com/contact',
};

const reasons = [
  {
    icon: '📊',
    title: 'Rate correction or outdated information',
    body: 'If a duty rate, threshold, or exchange rate looks wrong or out of date, let us know and we will verify and update it.',
  },
  {
    icon: '🐛',
    title: 'Bug report',
    body: 'Something is not calculating correctly, a page is broken, or you found an error — please describe what you expected vs. what you saw.',
  },
  {
    icon: '💡',
    title: 'Feature suggestion',
    body: 'Missing a product category, currency, or a feature that would make the calculator more useful for you.',
  },
  {
    icon: '❓',
    title: 'General question',
    body: 'A question about how Philippine customs duty or VAT is computed that the site does not already answer.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema, contactSchema]} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">

        {/* Header */}
        <p className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-2">
          Get in touch
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-muted text-base leading-relaxed mb-10">
          Found an outdated rate, a bug, or just have a question? Send us an email and
          we&apos;ll get back to you as soon as we can.
        </p>

        {/* Email card */}
        <div className="rounded-xl border border-border bg-surface p-6 mb-10">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
            Email
          </p>
          <a
            href="mailto:hello@importtaxph.com"
            className="inline-flex items-center gap-2 text-lg font-semibold text-navy-700 hover:text-navy-900 transition-colors break-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            hello@importtaxph.com
          </a>
          <p className="mt-3 text-sm text-muted">
            We typically respond within 1–3 business days.
          </p>
        </div>

        {/* What to contact about */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-5">What to contact us about</h2>
          <div className="space-y-4">
            {reasons.map(({ icon, title, body }) => (
              <div key={title} className="rounded-xl border border-border bg-surface p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl leading-none mt-0.5 shrink-0">{icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What NOT to contact about */}
        <div className="rounded-xl bg-navy-50 border border-border p-5 mb-10 text-sm text-muted">
          <strong className="text-foreground">Please note:</strong> We cannot give
          official customs rulings, act as a customs broker, or advise on specific
          shipments. For official assessments, contact the{' '}
          <a
            href="https://customs.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-600 underline hover:text-navy-800"
          >
            Bureau of Customs
          </a>{' '}
          directly.
        </div>

        {/* Tips for faster reply */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-foreground mb-3">Tips for a faster reply</h2>
          <ul className="space-y-2 text-sm text-muted">
            {[
              'Include the product category and the rate you believe is incorrect.',
              'For bugs, describe the input values you used and what result you got vs. what you expected.',
              'Link to an official BOC or Tariff Commission source if you have one — it speeds up verification.',
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-2">
                <span className="text-accent-500 mt-0.5 shrink-0">▸</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-navy-600 hover:text-navy-800 underline"
          >
            ← Back to the calculator
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-sm text-navy-600 hover:text-navy-800 underline"
          >
            About ImportTaxPH →
          </Link>
        </div>

      </div>
    </>
  );
}
