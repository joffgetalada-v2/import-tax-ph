import type { Metadata } from 'next';
import ImportTaxCalculator from '@/components/ImportTaxCalculator';

export const metadata: Metadata = {
  title: 'Shopee Import Tax Philippines — Will You Be Charged Customs Duty? (2026)',
  description:
    'Most Shopee orders from local sellers carry no import tax. Overseas / international Shopee orders may incur BOC customs duty and VAT. Free Philippines import tax calculator updated for CAO 02-2025.',
  openGraph: {
    title: 'Shopee Philippines Import Tax Calculator',
    description: 'Local Shopee orders: no customs duty. International Shopee orders: estimate your import taxes. Free & updated 2026.',
  },
};

export default function ShopeePage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Shopee Philippines
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              Will You Be Charged Import Tax{' '}
              <span className="text-accent-400">on Shopee?</span>
            </h1>
            <p className="text-navy-100 text-base leading-relaxed">
              The large majority of Shopee orders are from local Filipino sellers shipped within
              the Philippines — those carry{' '}
              <strong className="text-white">no customs duty or import tax</strong>. Import charges
              apply only to overseas / international Shopee orders that ship from abroad (commonly
              China). Shopee may collect an estimated import fee at checkout for these, but
              additional Bureau of Customs charges can still apply. The calculator below estimates
              what a cross-border Shopee order may incur.
            </p>
          </div>

          {/* Cross-border badge */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="rounded-xl bg-navy-800 border border-navy-700 px-4 py-3 text-sm text-navy-100">
              <span className="font-semibold text-white">For overseas / international Shopee orders only.</span>{' '}
              Orders from local Filipino sellers are domestic — no BOC customs duty applies.
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <ImportTaxCalculator defaultCategory="general" pageHint="shopee" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          How Shopee orders are taxed in the Philippines
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            On Shopee, look at where the item ships from.{' '}
            <strong className="text-foreground">Local-seller items</strong> are domestic purchases
            with no import tax. Items from{' '}
            <strong className="text-foreground">overseas sellers</strong> (shown with
            &quot;International,&quot; &quot;Overseas,&quot; or extended cross-border shipping)
            are imports and follow the same Bureau of Customs rules as any parcel from abroad.
          </p>
          <p>
            The ₱10,000 de minimis applies: if the{' '}
            <strong className="text-foreground">goods&apos; FOB value</strong> is ₱10,000 or below,
            the order is free of duty and VAT (a courier processing/handling fee may still apply).
            Above ₱10,000, <strong className="text-foreground">customs duty plus 12% VAT</strong>{' '}
            on the CIF value are assessed.
          </p>
          <p>
            Because Shopee may already collect an import-fee estimate at checkout for overseas
            items, check your order summary so you don&apos;t double-count — this tool is best for
            estimating before you buy.
          </p>
        </div>
      </section>
    </>
  );
}
