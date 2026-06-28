import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  alternates: { canonical: '/disclaimer' },
  title: 'Disclaimer | ImportTaxPH – Philippine Customs Calculator',
  description:
    'ImportTaxPH duty and VAT calculations are estimates for guidance only — not official Bureau of Customs (BOC) assessments, legal advice, or tax advice. Always verify with BOC for high-value imports.',
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
    { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: 'https://importtaxph.com/disclaimer' },
  ],
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <JsonLd data={breadcrumb} />
      <h1 className="text-3xl font-bold text-foreground mb-6">Disclaimer</h1>

      <div className="space-y-5 text-sm text-muted leading-relaxed">
        <p className="text-sm font-medium text-foreground">
          Last updated: 2026-05-30
        </p>

        <p>
          The information and calculations provided by ImportTaxPH are for{' '}
          <strong className="text-foreground">general guidance and informational purposes only</strong>.
          They do not constitute official Bureau of Customs (BOC) assessments, and should not be
          relied upon as legal or tax advice.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">No official standing</h2>
        <p>
          ImportTaxPH is not affiliated with, endorsed by, or connected to the Bureau of Customs
          of the Philippines, the Tariff Commission, or any other government agency. All estimates
          are produced by a mathematical model using representative duty rates — not official
          tariff rulings.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">Rate accuracy</h2>
        <p>
          Duty rates shown are representative estimates based on product categories. Actual rates
          depend on the specific HS/AHTN tariff classification of each item, which is determined
          by the Bureau of Customs. Rates may change without notice.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">
          Exchange rates
        </h2>
        <p>
          Exchange rates used in the calculator are static values updated periodically. They may
          not reflect current market rates. For the official BSP reference rate, visit{' '}
          <a
            href="https://www.bsp.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-600 underline hover:text-navy-800"
          >
            bsp.gov.ph
          </a>
          .
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">
          Verify with official sources
        </h2>
        <p>
          For any import of significant value, always verify duties and taxes directly with the{' '}
          <a
            href="https://customs.gov.ph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-600 underline hover:text-navy-800"
          >
            Bureau of Customs
          </a>{' '}
          or a licensed customs broker.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">Limitation of liability</h2>
        <p>
          ImportTaxPH makes no warranties, express or implied, regarding the accuracy,
          completeness, or timeliness of the information provided. Use of this tool is entirely
          at the user&apos;s own risk. ImportTaxPH shall not be liable for any losses, penalties,
          or damages arising from reliance on these estimates.
        </p>
      </div>
    </div>
  );
}
