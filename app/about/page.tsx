import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  alternates: { canonical: '/about' },
  title: 'About ImportTaxPH – Free Philippine Customs Duty Calculator',
  description:
    'ImportTaxPH is a free, browser-based Philippine customs duty and VAT calculator built for shoppers on Temu, Shein, AliExpress, Lazada, Shopee, and OFWs sending balikbayan boxes. No data collected.',
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://importtaxph.com/about' },
  ],
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <JsonLd data={breadcrumb} />
      <h1 className="text-3xl font-bold text-foreground mb-6">About ImportTaxPH</h1>

      <div className="space-y-5 text-sm text-muted leading-relaxed">
        <p>
          <strong className="text-foreground">ImportTaxPH</strong> is a free, fast web tool that
          helps Filipino online shoppers and importers estimate customs duties and VAT on
          international purchases before they arrive in the Philippines.
        </p>
        <p>
          The tool is designed for everyday shoppers ordering from platforms like Temu, Shein,
          AliExpress, and Amazon — as well as overseas Filipinos sending balikbayan boxes home.
        </p>
        <p>
          All calculations happen <strong className="text-foreground">entirely in your browser</strong>.
          We don't collect your data, send it to any server, or store your inputs. The tool
          works 100% offline once loaded.
        </p>
        <p>
          Tax rates, thresholds, and exchange rates are updated periodically based on official
          Bureau of Customs regulations and BSP reference rates. The current rates reflect{' '}
          <strong className="text-foreground">CAO No. 02-2025</strong> (effective May 7, 2025).
        </p>
        <p>
          ImportTaxPH is not affiliated with the Bureau of Customs, the Tariff Commission, or any
          government agency. All estimates are for guidance only.
        </p>

        <div className="pt-2">
          <h2 className="text-base font-semibold text-foreground mb-2">Useful links</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/how-it-works" className="text-navy-600 underline hover:text-navy-800">
                How Philippine import tax is computed →
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-navy-600 underline hover:text-navy-800">
                Disclaimer →
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-navy-600 underline hover:text-navy-800">
                Privacy Policy →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
