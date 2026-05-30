import type { Metadata } from 'next';
import ImportTaxCalculator from '@/components/ImportTaxCalculator';

export const metadata: Metadata = {
  title: 'Shein Import Tax Philippines — Customs Duty & VAT Calculator 2026',
  description:
    'Estimate customs duty and VAT on your Shein order in the Philippines. Free calculator updated for the ₱10,000 de minimis rule under CAO 02-2025.',
  openGraph: {
    title: 'Shein Philippines Customs Duty Calculator',
    description: 'Know your PH import taxes on Shein orders before they arrive. Free & updated 2026.',
  },
};

export default function SheinPage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-accent-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Shein Philippines
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
              Shein Import Tax{' '}
              <span className="text-accent-400">Philippines Calculator</span>
            </h1>
            <p className="text-navy-100 text-base leading-relaxed">
              Shein ships fashion and accessories from warehouses in China and Singapore. While
              small individual orders often fall under the ₱10,000 de minimis exemption, haul
              orders or high-ticket items may incur duty and VAT. Check your estimate here.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ImportTaxCalculator defaultCategory="clothing" pageHint="shein" />
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          Shein orders and Philippine customs
        </h2>
        <div className="space-y-4 text-sm text-muted leading-relaxed">
          <p>
            Shein ships to the Philippines via its own logistics and partner couriers. Packages
            are assessed by the Bureau of Customs based on the declared value, converted to PHP.
          </p>
          <p>
            Most Shein clothing items attract a <strong className="text-foreground">15% duty rate</strong>{' '}
            (representative estimate — actual rate depends on HS classification). On top of duty,
            <strong className="text-foreground"> 12% VAT</strong> is applied to the combined
            CIF + duty amount.
          </p>
          <p>
            Single small orders under ₱10,000 CIF value are generally exempt. But if you regularly
            buy multiple packages, be aware of the CAO 02-2025 same-day consolidation rule.
          </p>
        </div>
      </section>
    </>
  );
}
