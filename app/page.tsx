import type { Metadata } from 'next';
import Link from 'next/link';
import ImportTaxCalculator from '@/components/ImportTaxCalculator';
import JsonLd from '@/components/JsonLd';
import ShareButtons from '@/components/ShareButtons';
import { DE_MINIMIS_PHP } from '@/lib/rates';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: 'Philippine Import Tax Calculator – Free Customs Duty & VAT Estimator',
  description:
    'Free calculator for Philippine customs duty and 12% VAT on Temu, Shein, AliExpress, Lazada, Shopee, and international orders. Instant estimate — updated for the ₱10,000 de minimis rule (CAO 02-2025).',
  openGraph: {
    title: 'Philippine Import Tax Calculator – Free Customs Duty & VAT Estimator',
    description: 'Free calculator for Philippine customs duty and 12% VAT on Temu, Shein, AliExpress, Lazada, Shopee, and international orders. Instant estimate — updated for CAO 02-2025.',
  },
};

const howItWorksSteps = [
  {
    n: '1',
    title: 'Enter your order details',
    body: 'Input the item price in any currency, add shipping and insurance if applicable, and choose a product category.',
  },
  {
    n: '2',
    title: 'We convert to PHP',
    body: 'The item price is converted to Philippine Peso — this is your FOB (goods) value. Shipping and insurance are tracked separately to form the CIF value used later if duties apply.',
  },
  {
    n: '3',
    title: 'De minimis check',
    body: `If the FOB goods value is ₱${DE_MINIMIS_PHP.toLocaleString()} or below, your shipment is tax-free under CAO 02-2025. If taxable, duty and 12% VAT are then computed on the full CIF value.`,
  },
  {
    n: '4',
    title: 'See your estimate',
    body: 'Get an itemized breakdown: duty, VAT, total taxes, and estimated landed cost — all in one clear view.',
  },
];

const faqs = [
  {
    q: 'What is the de minimis threshold in the Philippines?',
    a: `As of CAO No. 02-2025 (effective May 7, 2025), shipments with a dutiable value at or below ₱${DE_MINIMIS_PHP.toLocaleString()} are exempt from customs duty and VAT. This is based on the FOB/FCA value of the goods.`,
  },
  {
    q: 'Does this apply to Temu, Shein, AliExpress, Lazada, and Shopee orders?',
    a: 'Yes — individual cross-border packages from any international platform are assessed against the same threshold. The ₱10,000 threshold is checked against the goods\' FOB value (the item price converted to PHP, before adding shipping and insurance). If the FOB value is ₱10,000 or below, no customs duty or VAT is charged.',
  },
  {
    q: 'What is the consolidation rule?',
    a: 'Per CAO 02-2025, if multiple packages addressed to the same recipient arrive on the same day, the Bureau of Customs may consolidate them and treat them as one shipment — potentially pushing the total above ₱10,000.',
  },
  {
    q: 'How accurate is this calculator?',
    a: 'This tool provides representative estimates based on category duty rates. The actual duty depends on the specific HS/AHTN tariff classification of your item, which only the Bureau of Customs determines. Always verify with BOC for important purchases.',
  },
  {
    q: 'What is the difference between FOB and CIF?',
    a: 'FOB (Free On Board) is the price of the goods alone. CIF (Cost + Insurance + Freight) adds shipping and insurance on top. The ₱10,000 de minimis threshold is checked against the FOB value. If taxable, duties and VAT are then computed on the full CIF value.',
  },
  {
    q: 'Are taxes included in my order total on Temu or Shein?',
    a: 'Not always. While platforms may collect some fees, formal customs duty and VAT are assessed by the Bureau of Customs upon arrival in the Philippines — separate from what you paid the seller.',
  },
];

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Philippine Import Tax Calculator',
  url: 'https://importtaxph.com',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PHP' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* Hero section */}
      <section className="bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4">
              Philippine Import Tax{' '}
              <span className="text-accent-400">Calculator</span>
            </h1>
            <p className="text-navy-100 text-base sm:text-lg leading-relaxed">
              Know your customs duty and VAT before your Temu, Shein, AliExpress, or Amazon order
              arrives. Free, instant, and updated for the ₱10,000 de minimis rule.
            </p>
          </div>

          {/* Calculator */}
          <div className="max-w-xl mx-auto">
            <ImportTaxCalculator defaultCategory="general" />
          </div>
        </div>
      </section>

      {/* Shop-specific shortcuts */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs text-muted text-center mb-3 font-medium uppercase tracking-wider">
            Tailored calculators
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { href: '/temu-import-tax', label: 'Temu' },
              { href: '/shein-import-tax', label: 'Shein' },
              { href: '/aliexpress-import-tax', label: 'AliExpress' },
              { href: '/lazada-import-tax', label: 'Lazada' },
              { href: '/shopee-import-tax', label: 'Shopee' },
              { href: '/balikbayan-box', label: 'Balikbayan Box' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:bg-navy-50 hover:border-navy-200 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">How it works</h2>
          <p className="mt-2 text-muted text-base">
            Four steps, seconds to compute.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorksSteps.map((step) => (
            <div
              key={step.n}
              className="bg-surface rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 rounded-full bg-navy-950 text-white text-sm font-bold flex items-center justify-center mb-3">
                {step.n}
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-1.5 text-sm text-navy-600 hover:text-navy-800 font-medium transition-colors"
          >
            Full guide: how Philippine customs computes duties →
          </Link>
        </div>
      </section>

      {/* Resource links — internal linking for crawlers and users */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/guides" className="text-sm text-navy-600 hover:text-navy-800 font-medium transition-colors">
              Import &amp; customs guides →
            </Link>
            <Link href="/rates-sources" className="text-sm text-navy-600 hover:text-navy-800 font-medium transition-colors">
              Duty rates &amp; sources →
            </Link>
            <Link href="/about" className="text-sm text-navy-600 hover:text-navy-800 font-medium transition-colors">
              About ImportTaxPH →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Frequently asked questions
            </h2>
          </div>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border pb-6 last:border-0">
                <dt className="font-semibold text-foreground text-sm sm:text-base mb-2">
                  {faq.q}
                </dt>
                <dd className="text-sm text-muted leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <ShareButtons title="Philippine Import Tax Calculator – Free Customs Duty & VAT Estimator" />
          </div>
        </div>
      </section>
    </>
  );
}
