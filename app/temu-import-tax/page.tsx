import type { Metadata } from 'next';
import ImportTaxCalculator from '@/components/ImportTaxCalculator';
import JsonLd from '@/components/JsonLd';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Temu Import Tax Philippines – Will You Pay Customs?',
  description:
    'Estimate customs duty and VAT on your Temu order to the Philippines. Free tool, updated for the ₱10,000 de minimis threshold.',
  openGraph: {
    title: 'Temu Import Tax Philippines – Will You Pay Customs?',
    description: 'Estimate customs duty and VAT on your Temu order to the Philippines. Free tool, updated for the ₱10,000 de minimis threshold.',
  },
};

export default function TemuPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Temu Philippines Import Tax Calculator',
      url: 'https://importtaxph.com/temu-import-tax',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'PHP' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
        { '@type': 'ListItem', position: 2, name: 'Temu Import Tax', item: 'https://importtaxph.com/temu-import-tax' },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Temu Philippines
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              Will I Pay Import Tax on My{' '}
              <span className="text-accent-400">Temu Order?</span>
            </h1>
            <p className="text-navy-100 text-base leading-relaxed">
              Temu ships directly from China. Low-value orders often qualify for the ₱10,000 de
              minimis exemption — but if you order in bulk or high-value items, customs duty and
              VAT may apply. Calculate your estimate below.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ImportTaxCalculator defaultCategory="clothing" pageHint="temu" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          How Temu orders are taxed in the Philippines
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Temu is a Chinese marketplace that ships packages internationally via couriers like
            SPX, Ninja Van, or J&T. Since packages originate outside the Philippines, they are
            subject to Bureau of Customs (BOC) assessment upon arrival.
          </p>
          <p>
            Under <strong className="text-foreground">CAO No. 02-2025</strong>, shipments with a
            total dutiable value (FOB/FCA) at or below <strong className="text-foreground">₱10,000</strong>{' '}
            are exempt from customs duty and VAT. Most small Temu orders fall under this threshold.
          </p>
          <p>
            However, if you order multiple packages to the same address arriving on the same day,
            the BOC may <em>consolidate</em> them and assess the combined value — potentially
            pushing you above ₱10,000.
          </p>
          <p>
            For orders above ₱10,000 CIF value, expect customs duty (typically 10–15% depending
            on product type) plus 12% VAT on the combined CIF + duty amount.
          </p>
        </div>
        <div className="mt-8">
          <ShareButtons title="Temu Import Tax Philippines – Will You Pay Customs?" />
        </div>
      </section>
    </>
  );
}
