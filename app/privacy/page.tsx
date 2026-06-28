import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/privacy' },
  title: 'Privacy Policy | ImportTaxPH',
  description:
    'How ImportTaxPH handles data: the calculator runs entirely in your browser and collects no personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>

      <div className="space-y-5 text-sm text-muted leading-relaxed">
        <p className="text-sm font-medium text-foreground">
          Last updated: 2026-05-30
        </p>

        <p>
          This Privacy Policy explains how ImportTaxPH (&quot;we&quot;, &quot;our&quot;, or
          &quot;the site&quot;) handles information when you use our import tax calculator.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">
          No personal data collected
        </h2>
        <p>
          ImportTaxPH is a fully client-side tool. All calculations run in your browser. We do
          not collect, transmit, store, or process any personal information you enter into the
          calculator (item values, shipping costs, etc.).
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">Cookies</h2>
        <p>
          We do not set any cookies at this time. If we add analytics or advertising in the
          future, we will update this policy and provide appropriate notice.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">Analytics</h2>
        <p>
          We may use privacy-respecting, anonymous analytics (such as page view counts) to
          understand how the site is used. These tools do not collect personally identifiable
          information.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">
          Third-party links
        </h2>
        <p>
          This site contains links to external websites such as the Bureau of Customs
          (customs.gov.ph) and the Tariff Commission. We are not responsible for the privacy
          practices of those sites.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">
          Future advertising
        </h2>
        <p>
          ImportTaxPH may display third-party advertisements (e.g., Google AdSense) in the
          future. If implemented, those ad providers may use cookies or tracking technologies
          in accordance with their own privacy policies. We will update this page when ads are
          enabled.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">
          Changes to this policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be reflected by
          updating the &quot;last updated&quot; date above. Continued use of the site after
          changes constitutes acceptance of the updated policy.
        </p>

        <h2 className="text-base font-semibold text-foreground mt-6 mb-1">Contact</h2>
        <p>
          For privacy questions, please open an issue or contact us through the site. We do not
          have a dedicated privacy contact email at this time.
        </p>
      </div>
    </div>
  );
}
