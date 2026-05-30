import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import {
  DE_MINIMIS_PHP,
  VAT_RATE,
  EXCHANGE_RATES,
  FX_RATES_DATE,
  RATES_LAST_REVIEWED,
  RATES_REGULATION_REF,
  CATEGORY_CONFIG,
} from '@/lib/rates';

export const metadata: Metadata = {
  title: 'Duty Rates & Sources – How We Calculate',
  description:
    'Our category duty rates, the ₱10,000 de minimis and 12% VAT bases, exchange-rate assumptions, and the official sources behind them.',
};

const categories = [
  {
    name: 'Electronics & Gadgets',
    rate: 'Varies (0–10%)',
    hs: 'Ch. 84–85',
    notes: 'Many IT-Agreement goods (phones, laptops) are duty-free (0%); others carry duty',
  },
  {
    name: 'Clothing & Apparel',
    rate: `~${(CATEGORY_CONFIG.clothing.dutyRate * 100).toFixed(0)}%`,
    hs: 'Ch. 61–62',
    notes: 'Textile apparel',
  },
  {
    name: 'Shoes & Footwear',
    rate: `~${(CATEGORY_CONFIG.footwear.dutyRate * 100).toFixed(0)}%`,
    hs: 'Ch. 64',
    notes: '—',
  },
  {
    name: 'Bags & Accessories',
    rate: `~${(CATEGORY_CONFIG['bags-accessories'].dutyRate * 100).toFixed(0)}%`,
    hs: 'Ch. 42',
    notes: 'Leather goods/bags',
  },
  {
    name: 'Toys & Games',
    rate: '~10–15%',
    hs: 'Ch. 9503',
    notes: 'Verify per item',
  },
  {
    name: 'Cosmetics & Skincare',
    rate: `~${(CATEGORY_CONFIG.cosmetics.dutyRate * 100).toFixed(0)}%`,
    hs: 'Ch. 33',
    notes: '—',
  },
  {
    name: 'Books & Publications',
    rate: `${(CATEGORY_CONFIG.books.dutyRate * 100).toFixed(0)}%`,
    hs: 'Ch. 4901',
    notes: 'Printed books generally duty-free',
  },
  {
    name: 'Other / General Goods',
    rate: `~${(CATEGORY_CONFIG.general.dutyRate * 100).toFixed(0)}% (default)`,
    hs: 'varies',
    notes: 'Fallback estimate',
  },
];

export default function RatesSourcesPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtax.ph' },
      { '@type': 'ListItem', position: 2, name: 'Rates & Sources', item: 'https://importtax.ph/rates-sources' },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {/* Header */}
        <div className="mb-10">
          <p className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-2">
            Transparency
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight mb-4">
            How We Calculate — Rates & Sources
          </h1>
          <p className="text-muted text-base leading-relaxed max-w-2xl">
            We aim to be the most accurate free Philippine import tax estimator. This page documents
            every rate and threshold we use, where it comes from, and when we last verified it.
            These are <strong className="text-foreground">representative estimates for guidance
            only</strong> — the actual duty on any item depends on its precise HS/AHTN tariff
            classification, which only the Bureau of Customs determines.
          </p>
          <p className="mt-3 text-sm text-muted">
            <strong className="text-foreground">Last reviewed:</strong> {RATES_LAST_REVIEWED} · {RATES_REGULATION_REF}
          </p>
        </div>

        <div className="space-y-12 text-sm text-muted leading-relaxed">

          {/* Thresholds & taxes */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-5">Thresholds & taxes</h2>
            <div className="space-y-5">

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-1">
                  De minimis: ₱{DE_MINIMIS_PHP.toLocaleString()}
                </h3>
                <p>
                  Shipments whose <strong className="text-foreground">FOB/FCA value (goods value,
                  excluding freight and insurance)</strong> is ₱{DE_MINIMIS_PHP.toLocaleString()} or
                  below are exempt from customs duty and VAT.
                </p>
                <p className="mt-2">
                  <em>Basis:</em> Section 423 of the Customs Modernization and Tariff Act (RA 10863)
                  and {RATES_REGULATION_REF}. Note: even exempt shipments may incur courier
                  processing charges, documentary stamp tax, and handling fees paid to the courier.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-1">Consolidation rule</h3>
                <p>
                  Per CAO 02-2025, multiple packages to the same recipient and address arriving the
                  same day may be aggregated; if the combined FOB value exceeds
                  ₱{DE_MINIMIS_PHP.toLocaleString()}, the exemption is lost.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-1">Duty base (above threshold)</h3>
                <p>
                  Customs duty is computed on the <strong className="text-foreground">CIF value</strong>{' '}
                  (cost + insurance + freight) using the item&apos;s tariff rate.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-1">
                  VAT: {(VAT_RATE * 100).toFixed(0)}%
                </h3>
                <p>
                  Applied to (CIF + duty + excise, if any).{' '}
                  <em>Basis:</em> National Internal Revenue Code.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-1">Exchange rate</h3>
                <p>
                  We use a fixed reference rate (1 USD = ₱{EXCHANGE_RATES.USD.toFixed(2)}, as of{' '}
                  {FX_RATES_DATE}), based on the Bangko Sentral ng Pilipinas reference rate. Use
                  your actual conversion for precision; you can override the rate in the calculator.
                </p>
              </div>
            </div>
          </section>

          {/* Category duty rates table */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-2">Category duty rates</h2>
            <p className="mb-4 text-sm text-muted">
              Representative MFN ad valorem rates. The exact rate depends on the 8-digit AHTN code
              — always confirm in the{' '}
              <a
                href="https://finder.tariffcommission.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-600 underline hover:text-navy-800"
              >
                Tariff Commission Tariff Finder
              </a>
              .
            </p>

            {/* Mobile: card layout */}
            <div className="sm:hidden space-y-3">
              {categories.map((cat) => (
                <div key={cat.name} className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="font-semibold text-foreground text-sm">{cat.name}</span>
                    <span className="font-mono text-sm bg-navy-50 text-navy-700 px-2 py-0.5 rounded-md shrink-0">
                      {cat.rate}
                    </span>
                  </div>
                  <p className="text-xs text-muted">HS: {cat.hs}</p>
                  {cat.notes !== '—' && <p className="text-xs text-muted mt-0.5">{cat.notes}</p>}
                  <p className="text-xs text-muted-2 mt-1">Last verified: {RATES_LAST_REVIEWED}</p>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden sm:block overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-navy-50 border-b border-border">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Category</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Rate</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">HS heading</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground">Notes</th>
                    <th className="text-left px-4 py-3 font-semibold text-foreground whitespace-nowrap">Last verified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-surface">
                  {categories.map((cat) => (
                    <tr key={cat.name} className="hover:bg-navy-50/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{cat.name}</td>
                      <td className="px-4 py-3 font-mono text-navy-700">{cat.rate}</td>
                      <td className="px-4 py-3 text-muted">{cat.hs}</td>
                      <td className="px-4 py-3 text-muted">{cat.notes}</td>
                      <td className="px-4 py-3 text-muted whitespace-nowrap">{RATES_LAST_REVIEWED}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 rounded-lg bg-accent-50 border border-accent-300 px-4 py-3">
              <p className="text-sm text-muted">
                <strong className="text-foreground">Note on origin:</strong> Goods from China
                (Temu, Shein, AliExpress) are charged at MFN rates unless a Certificate of Origin
                is presented under the ASEAN–China FTA, which consumer parcels do not carry. MFN is
                the correct default.
              </p>
            </div>
          </section>

          {/* Official sources */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">Official sources</h2>
            <ul className="space-y-2.5">
              {[
                { label: 'Bureau of Customs', href: 'https://customs.gov.ph', suffix: '— customs.gov.ph' },
                { label: 'Tariff Commission Tariff Finder', href: 'https://finder.tariffcommission.gov.ph', suffix: '— authoritative per-HS-code rates' },
                { label: 'Tariff Commission of the Philippines', href: 'https://www.tariffcommission.gov.ph', suffix: '— tariff schedules and rulings' },
                { label: 'Bangko Sentral ng Pilipinas', href: 'https://www.bsp.gov.ph', suffix: '— reference exchange rates' },
              ].map(({ label, href, suffix }) => (
                <li key={href} className="flex items-start gap-1.5">
                  <span className="text-muted mt-0.5">·</span>
                  <span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-600 underline hover:text-navy-800 font-medium"
                    >
                      {label} ↗
                    </a>
                    {' '}
                    <span className="text-muted">{suffix}</span>
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-1.5">
                <span className="text-muted mt-0.5">·</span>
                <span className="text-muted">Customs Modernization and Tariff Act (RA 10863), Section 423</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-muted mt-0.5">·</span>
                <span className="text-muted">Customs Administrative Order No. 02-2025</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-muted mt-0.5">·</span>
                <span className="text-muted">National Internal Revenue Code (for the 12% VAT)</span>
              </li>
            </ul>
          </section>

          {/* Update note */}
          <section className="border-t border-border pt-8">
            <p className="text-xs text-muted">
              Spotted an error or outdated rate?{' '}
              <a
                href="mailto:hello@importtax.ph"
                className="text-navy-600 underline hover:text-navy-800"
              >
                Contact us
              </a>{' '}
              — we update rates at least annually and whenever the BOC issues a new order.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
