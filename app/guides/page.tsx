import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  alternates: { canonical: '/guides' },
  title: 'Philippine Customs & Import Tax Guides – Online Shoppers',
  description:
    'Plain-English guides for Philippine online shoppers — why packages are held at BOC, how to pay customs duty, the ₱10,000 de minimis threshold, and what Temu, Shein, AliExpress, Lazada shoppers need to know.',
  openGraph: {
    title: 'Philippine Customs & Import Tax Guides – Online Shoppers',
    description:
      'Why packages are held at Philippine customs, how to pay duty and VAT, and what every Temu, Shein, AliExpress, Lazada, and Shopee shopper needs to know.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://importtaxph.com/guides' },
  ],
};

const guides = [
  {
    href: '/guides/package-held-by-customs-philippines',
    title: 'Why Is My Package Held by Customs in the Philippines?',
    description:
      'Temu, Shein, or AliExpress order stuck "for customs clearance"? The real reasons packages are held and what you can do.',
    tag: 'Clearance',
  },
  {
    href: '/guides/how-to-pay-customs-duties-philippines',
    title: 'How to Pay Customs Duties and VAT in the Philippines',
    description:
      "Your import is over ₱10,000 — now what? A plain guide to how you actually pay duty and 12% VAT, via courier or PHLPOST.",
    tag: 'Payment',
  },
];

export default function GuidesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Header */}
      <section className="bg-navy-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Guides
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            Philippine Import &amp;{' '}
            <span className="text-accent-400">Customs Guides</span>
          </h1>
          <p className="text-navy-100 text-base leading-relaxed max-w-xl">
            Plain-English answers to the questions shoppers ask after clicking &quot;order&quot; on
            Temu, Shein, AliExpress, Lazada, and Shopee.
          </p>
        </div>
      </section>

      {/* Guide list */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {guides.map(({ href, title, description, tag }) => (
            <Link
              key={href}
              href={href}
              className="group block rounded-xl border border-border bg-surface p-6 hover:border-accent-500 transition-colors"
            >
              <span className="inline-block text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">
                {tag}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-foreground group-hover:text-navy-700 mb-1 leading-snug">
                {title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{description}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-accent-500">
                Read guide →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-sm text-muted mb-3">
            Ready to estimate your specific import?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-navy-950 font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors"
          >
            Open the calculator →
          </Link>
        </div>
      </section>
    </>
  );
}
