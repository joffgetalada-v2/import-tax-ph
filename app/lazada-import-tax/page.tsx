import type { Metadata } from 'next';
import ImportTaxCalculator from '@/components/ImportTaxCalculator';
import JsonLd from '@/components/JsonLd';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  alternates: { canonical: '/lazada-import-tax' },
  title: 'Lazada Import Tax Philippines – LazGlobal & Cross-Border Duty Calculator',
  description:
    'Lazada PH orders from local sellers are duty-free. Cross-border LazGlobal listings shipped from abroad face Philippine customs duty + 12% VAT above ₱10,000 FOB. Free calculator — check before you buy.',
  openGraph: {
    title: 'Lazada Import Tax Philippines – Overseas Orders',
    description: "Local Lazada orders aren't taxed; cross-border (LazGlobal) orders may be. Estimate customs duty and 12% VAT for free.",
  },
};

export default function LazadaPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Lazada Philippines Import Tax Calculator',
      url: 'https://importtaxph.com/lazada-import-tax',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'PHP' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
        { '@type': 'ListItem', position: 2, name: 'Lazada Import Tax', item: 'https://importtaxph.com/lazada-import-tax' },
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
              Lazada Philippines
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              Lazada Import Tax{' '}
              <span className="text-accent-400">Philippines</span>
              {' '}– Do You Pay Customs?
            </h1>
            <p className="text-navy-100 text-base leading-relaxed">
              Most Lazada orders come from local Philippine sellers and ship within the country —
              these are <strong className="text-white">not subject to customs duty or import tax</strong>.
              Import charges only apply to cross-border orders (LazGlobal / &quot;Lazada
              International&quot; listings) that ship from abroad, usually China. For those, Lazada
              often shows estimated taxes and duties at checkout and may collect them upfront. Use
              the calculator below to estimate what a cross-border Lazada order could be charged
              on arrival.
            </p>
          </div>

          {/* Cross-border badge */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="rounded-xl bg-navy-800 border border-navy-700 px-4 py-3 text-sm text-navy-100">
              <span className="font-semibold text-white">For cross-border / LazGlobal orders only.</span>{' '}
              Local Lazada orders from Philippine sellers are domestic sales — no BOC customs duty applies.
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <ImportTaxCalculator defaultCategory="general" pageHint="lazada" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          How Lazada orders are taxed in the Philippines
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Lazada hosts two kinds of sellers. Orders from{' '}
            <strong className="text-foreground">local Philippine sellers</strong> are domestic
            sales — the price already includes any local VAT, and nothing is owed to the Bureau of
            Customs.
          </p>
          <p>
            Orders from <strong className="text-foreground">overseas sellers</strong> (often labeled
            &quot;LazGlobal,&quot; &quot;International,&quot; or showing longer shipping times from
            abroad) are imports, and are assessed against the same ₱10,000 de minimis rule as any
            other international parcel.
          </p>
          <p>
            If the <strong className="text-foreground">goods&apos; value (FOB)</strong> is ₱10,000
            or below, the order is exempt from duty and VAT — though your courier may still charge
            a small processing or handling fee. Above ₱10,000, expect customs duty (rate depends on
            the product) plus <strong className="text-foreground">12% VAT on the CIF value</strong>.
          </p>
          <p>
            Note that Lazada frequently collects an &quot;import tax &amp; duties&quot; estimate at
            checkout for cross-border items, so in some cases the charge is settled before delivery
            rather than on arrival. Check your order summary to avoid double-counting.
          </p>
        </div>
        <div className="mt-8">
          <ShareButtons title="Lazada Import Tax Philippines – Overseas Orders" />
        </div>
      </section>
    </>
  );
}
