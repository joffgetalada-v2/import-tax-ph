import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'How PH Customs Duty & VAT Are Computed',
  description:
    'A plain-English guide to how the Bureau of Customs computes duty and 12% VAT, the ₱10,000 de minimis, and the consolidation rule.',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to estimate Philippine import tax',
  step: [
    { '@type': 'HowToStep', name: 'Enter order details', text: 'Input item price, currency, shipping, insurance, and product category.' },
    { '@type': 'HowToStep', name: 'Check the de minimis threshold', text: 'If the FOB goods value is ₱10,000 or below, the shipment is exempt from duty and VAT.' },
    { '@type': 'HowToStep', name: 'Compute duty and VAT', text: 'If taxable, customs duty is applied to the CIF value, then 12% VAT is applied to CIF + duty.' },
    { '@type': 'HowToStep', name: 'See your estimate', text: 'Review the itemized breakdown showing duty, VAT, total taxes, and estimated landed cost.' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtax.ph' },
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://importtax.ph/how-it-works' },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Title */}
      <div className="mb-10">
        <p className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-2">
          Guide
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight mb-4">
          How Philippine Import Tax Works
        </h1>
        <p className="text-muted text-base leading-relaxed">
          A plain-English explanation of how the Bureau of Customs computes duties and VAT on
          international shipments — and how the ₱10,000 de minimis rule protects most small
          online purchases.
        </p>
      </div>

      <div className="prose-sm text-muted space-y-10">

        {/* Section 1 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">What is CIF value?</h2>
          <p>
            <strong className="text-foreground">CIF</strong> stands for{' '}
            <strong className="text-foreground">Cost + Insurance + Freight</strong>. It is the
            total value of your goods <em>plus</em> any shipping and insurance charges, all
            converted to Philippine Peso.
          </p>
          <p className="mt-3">
            Philippine customs duties and VAT are computed based on the CIF value — not just the
            price you paid for the item. So if you buy a ₱3,000 item and pay ₱800 for shipping,
            the CIF is ₱3,800.
          </p>
          <div className="bg-navy-50 border border-navy-200 rounded-xl p-4 mt-4 font-mono text-sm text-foreground">
            CIF = Item value (in PHP) + Shipping cost + Insurance cost
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            The ₱10,000 de minimis threshold
          </h2>
          <p>
            Under the <strong className="text-foreground">Customs Modernization and Tariff Act
            (CMTA)</strong> and{' '}
            <strong className="text-foreground">CAO No. 02-2025</strong> (effective May 7, 2025),
            shipments with a goods value at or below{' '}
            <strong className="text-foreground">₱10,000</strong> are{' '}
            <strong className="text-foreground">fully exempt</strong> from customs duty and VAT.
          </p>
          <p className="mt-3">
            This is called the <em>de minimis</em> threshold. It means most small online purchases
            from Temu, Shein, AliExpress, Lazada, Shopee, and similar platforms arrive in the
            Philippines without any import taxes.
          </p>
          <div className="bg-accent-50 border border-accent-300 rounded-xl p-4 mt-4">
            <p className="text-sm font-semibold text-foreground mb-1">Important: the threshold is based on FOB value, not CIF</p>
            <p className="text-sm text-muted">
              The ₱10,000 check applies to the <strong className="text-foreground">FOB/FCA value</strong> —
              the price of the goods alone, excluding freight and insurance. If the goods value is
              ₱10,000 or below, the shipment is exempt even if the total CIF (with shipping) exceeds
              ₱10,000. If the goods value exceeds ₱10,000, duty and VAT are then computed on the
              full CIF value.
            </p>
          </div>
          <ul className="mt-4 list-disc list-inside space-y-1.5">
            <li>FOB value ≤ ₱10,000 → <span className="text-success-700 font-medium">exempt from duty AND VAT</span> (courier fees may still apply)</li>
            <li>FOB value &gt; ₱10,000 → duty and VAT are computed on the full CIF value</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">The consolidation rule</h2>
          <p>
            CAO No. 02-2025 introduced a <strong className="text-foreground">same-day
            consolidation rule</strong>: if multiple packages addressed to the same recipient
            arrive on the same day, the Bureau of Customs may treat them as a single shipment and
            add up their values.
          </p>
          <p className="mt-3">
            This is designed to prevent tax avoidance through deliberate order splitting. If your
            combined shipments exceed ₱10,000 after consolidation, duties and VAT will apply to
            the total.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">Practical tip:</strong> If you regularly order
            from multiple platforms and expect several packages to arrive the same day, be aware
            that your combined value may exceed the threshold.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            How duty and VAT are computed
          </h2>
          <p>
            For shipments above the de minimis threshold, the Bureau of Customs applies:
          </p>
          <ol className="mt-3 list-decimal list-inside space-y-2">
            <li>
              <strong className="text-foreground">Customs duty</strong> — a percentage of the
              CIF value, determined by the product&apos;s{' '}
              <strong className="text-foreground">HS/AHTN tariff code</strong>. Rates range from
              0% (many electronics, books) to 15% (clothing, footwear).
            </li>
            <li>
              <strong className="text-foreground">VAT (12%)</strong> — applied to the CIF value
              plus the duty amount (i.e., the duty-inclusive value).
            </li>
          </ol>
          <div className="bg-navy-50 border border-navy-200 rounded-xl p-4 mt-4 font-mono text-sm text-foreground space-y-1">
            <p>Duty = Duty rate × CIF value</p>
            <p>VAT base = CIF value + Duty</p>
            <p>VAT = 12% × VAT base</p>
            <p>Total taxes = Duty + VAT</p>
            <p>Landed cost = CIF value + Total taxes</p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">
            HS/AHTN codes and duty rates
          </h2>
          <p>
            Every imported product is classified under the{' '}
            <strong className="text-foreground">Harmonized System (HS)</strong> or the{' '}
            <strong className="text-foreground">ASEAN Harmonized Tariff Nomenclature (AHTN)</strong>.
            The specific code determines the exact duty rate — and rates can vary significantly
            even within the same product category.
          </p>
          <p className="mt-3">
            For example, many consumer electronics (smartphones, laptops) are assessed at 0%,
            while some peripherals may be 5–10%. Clothing is typically 15%, but some technical
            fabrics may differ.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">Important:</strong> The duty rates in this
            calculator are <em>representative estimates</em> based on common product categories.
            They are not official rates. Always verify using the official Tariff Commission tariff
            finder or by consulting the Bureau of Customs.
          </p>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-xl font-bold text-foreground mb-3">Official sources</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://customs.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 underline hover:text-navy-800 font-medium"
              >
                Bureau of Customs Philippines ↗
              </a>
              <span className="text-muted"> — official assessments and regulations</span>
            </li>
            <li>
              <a
                href="https://tariff.customs.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 underline hover:text-navy-800 font-medium"
              >
                BOC Tariff Finder ↗
              </a>
              <span className="text-muted"> — look up official HS/AHTN duty rates</span>
            </li>
            <li>
              <a
                href="https://www.tariffcommission.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 underline hover:text-navy-800 font-medium"
              >
                Tariff Commission of the Philippines ↗
              </a>
              <span className="text-muted"> — tariff schedules and rulings</span>
            </li>
          </ul>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-border pt-8">
          <p className="text-xs text-muted leading-relaxed">
            <strong>Disclaimer:</strong> This guide is for informational purposes only and does
            not constitute legal or tax advice. Customs rules are subject to change. Always verify
            with the Bureau of Customs or a licensed customs broker for official determinations.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
