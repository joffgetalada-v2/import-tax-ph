import type { Metadata } from 'next';
import ImportTaxCalculator from '@/components/ImportTaxCalculator';

export const metadata: Metadata = {
  title: 'AliExpress Import Tax Philippines — Customs Duty & VAT Calculator 2026',
  description:
    'Calculate customs duty and VAT on your AliExpress order arriving in the Philippines. Free tool updated for the ₱10,000 de minimis threshold and CAO 02-2025.',
  openGraph: {
    title: 'AliExpress Philippines Customs Duty Calculator',
    description: 'Estimate import taxes on your AliExpress parcels in the Philippines. Free & updated 2026.',
  },
};

export default function AliExpressPage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3">
              AliExpress Philippines
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              AliExpress Import Tax{' '}
              <span className="text-accent-400">Philippines Calculator</span>
            </h1>
            <p className="text-navy-100 text-base leading-relaxed">
              AliExpress ships everything from electronics to clothing from Chinese sellers.
              Duty rates vary widely by product — electronics can be 0–10%, while apparel is
              typically 15%. Use this calculator to estimate your customs costs before you buy.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ImportTaxCalculator defaultCategory="electronics" pageHint="aliexpress" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          AliExpress and Philippine customs: what to know
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            AliExpress packages are typically shipped via Cainiao, AliExpress Standard Shipping,
            or third-party couriers. They are subject to BOC assessment upon arrival in the
            Philippines.
          </p>
          <p>
            <strong className="text-foreground">Electronics</strong> often carry a 0–10% duty
            depending on the specific HS code. Many consumer electronics (phones, laptops,
            tablets) are assessed at 0% under AHTN. However, accessories and peripherals may
            carry a higher rate.
          </p>
          <p>
            If your total CIF value (item price + shipping to PH, converted to PHP) stays at or
            below <strong className="text-foreground">₱10,000</strong>, no duties or VAT apply.
            This exemption covers a wide range of small AliExpress purchases.
          </p>
          <p>
            For higher-value purchases — industrial tools, large appliances, multiple-item orders —
            always verify the specific HS code through the{' '}
            <a
              href="https://customs.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 underline hover:text-navy-800"
            >
              Bureau of Customs
            </a>{' '}
            or the Tariff Commission tariff finder.
          </p>
        </div>
      </section>
    </>
  );
}
