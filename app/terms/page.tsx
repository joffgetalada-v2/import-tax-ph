import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Terms of Use | ImportTaxPH',
  description:
    'The terms governing your use of ImportTaxPH, including limitation of liability for estimate-based results.',
};

export default function TermsPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
      { '@type': 'ListItem', position: 2, name: 'Terms of Use', item: 'https://importtaxph.com/terms' },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Use</h1>

        <div className="space-y-5 text-sm text-muted leading-relaxed">
          <p className="text-sm font-medium text-foreground">Last updated: 2026-05-30</p>

          <p>
            By accessing or using ImportTaxPH (the &quot;Site&quot;), you agree to be bound by
            these Terms of Use. If you do not agree, please do not use the Site.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">1. Purpose and nature of the service</h2>
          <p>
            ImportTaxPH provides a free, browser-based tool to estimate Philippine import duties
            and VAT on international shipments. All computations are performed entirely on your
            device — no data is transmitted to or stored by us.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">2. Estimates only — not official assessments</h2>
          <p>
            The results produced by this tool are <strong className="text-foreground">estimates
            for informational and guidance purposes only</strong>. They do not constitute official
            Bureau of Customs (BOC) assessments, legal advice, or tax advice. Actual customs duty
            and VAT depend on the specific HS/AHTN tariff classification of each item, the BOC
            valuation, and other factors determined by the BOC at the time of importation.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">3. No warranty</h2>
          <p>
            The Site and all content are provided &quot;as is&quot; and &quot;as available,&quot;
            without any warranty of any kind, express or implied, including but not limited to
            warranties of accuracy, completeness, fitness for a particular purpose, or
            non-infringement. Tax rates, thresholds, and exchange rates may change; we do not
            guarantee that information on the Site is current.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">4. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by applicable law, ImportTaxPH and its operators shall
            not be liable for any direct, indirect, incidental, consequential, or special damages
            arising from your use of — or reliance on — any estimate, content, or information on
            this Site. This includes, without limitation, any customs duties, penalties, fees, or
            losses incurred as a result of acting on an estimate provided here.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">5. Verify with official sources</h2>
          <p>
            For any importation of significant value, always obtain an official assessment from the{' '}
            <a
              href="https://customs.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 underline hover:text-navy-800"
            >
              Bureau of Customs
            </a>{' '}
            or consult a licensed customs broker before making financial or shipping decisions.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">6. Intellectual property</h2>
          <p>
            All original content, design, and code on ImportTaxPH are owned by or licensed to its
            operators. Marketplace names (Temu, Shein, AliExpress, Lazada, Shopee, and others) are
            trademarks of their respective owners; their appearance on this Site is for descriptive
            purposes only and does not imply affiliation or endorsement.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">7. Modifications</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the Site after
            changes constitutes acceptance of the updated Terms. The &quot;last updated&quot; date
            above reflects the most recent revision.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">8. Governing law</h2>
          <p>
            These Terms are governed by the laws of the Republic of the Philippines, without regard
            to conflict-of-law principles.
          </p>

          <h2 className="text-base font-semibold text-foreground mt-6 mb-1">Contact</h2>
          <p>
            For questions about these Terms, email{' '}
            <a
              href="mailto:hello@importtaxph.com"
              className="text-navy-600 underline hover:text-navy-800"
            >
              hello@importtaxph.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
