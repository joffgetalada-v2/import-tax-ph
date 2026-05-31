import type { Metadata } from 'next';
import ImportTaxCalculator from '@/components/ImportTaxCalculator';
import JsonLd from '@/components/JsonLd';
import ShareButtons from '@/components/ShareButtons';

export const metadata: Metadata = {
  title: 'Balikbayan Box Tax & Exemption Guide (Philippines)',
  description:
    'How balikbayan box duty/tax exemptions work for OFWs in the Philippines, plus what happens above the exemption limit.',
  openGraph: {
    title: 'Balikbayan Box Tax & Exemption Guide (Philippines)',
    description: 'How balikbayan box duty/tax exemptions work for OFWs in the Philippines, plus what happens above the exemption limit.',
  },
};

export default function BalikbayanPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Balikbayan Box Import Tax Calculator',
      url: 'https://importtaxph.com/balikbayan-box',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'PHP' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
        { '@type': 'ListItem', position: 2, name: 'Balikbayan Box', item: 'https://importtaxph.com/balikbayan-box' },
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
              Balikbayan Box
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              Balikbayan Box{' '}
              <span className="text-accent-400">Tax Calculator</span>
            </h1>
            <p className="text-navy-100 text-base leading-relaxed">
              Sending a balikbayan box to family in the Philippines? Boxes with contents valued
              over ₱10,000 may be subject to customs duties and VAT. Estimate your potential
              taxes here — then check with your courier for the official assessment.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ImportTaxCalculator defaultCategory="general" pageHint="balikbayan" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Balikbayan boxes and Philippine customs
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            A <strong className="text-foreground">balikbayan box</strong> is a large shipping
            box used by overseas Filipinos (OFWs and balikbayans) to send gifts and goods home
            to family in the Philippines.
          </p>
          <p>
            Under the <strong className="text-foreground">Balikbayan Box Act (RA 10863 / CMTA)</strong>,
            qualified balikbayans may be entitled to a duty-free personal shipment exemption,
            subject to limits and frequency rules administered by the BOC. Eligibility depends
            on your residency status and proof of OFW/balikbayan status.
          </p>
          <p>
            If the box does not qualify for the balikbayan exemption, the general de minimis
            threshold of <strong className="text-foreground">₱10,000</strong> applies under
            CAO No. 02-2025. Contents valued above ₱10,000 (CIF) are subject to applicable
            duty rates and 12% VAT.
          </p>
          <p>
            The calculator above estimates taxes for a standard commercial shipment. For the
            official balikbayan exemption process, contact the{' '}
            <a
              href="https://customs.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 underline hover:text-navy-800"
            >
              Bureau of Customs
            </a>{' '}
            directly.
          </p>
        </div>
        <div className="mt-8">
          <ShareButtons title="Balikbayan Box Tax & Exemption Guide (Philippines)" />
        </div>
      </section>
    </>
  );
}
