import Link from 'next/link';
import { RATES_LAST_REVIEWED, RATES_REGULATION_REF } from '@/lib/rates';

const toolLinks = [
  { href: '/', label: 'Calculator' },
  { href: '/temu-import-tax', label: 'Temu Import Tax' },
  { href: '/shein-import-tax', label: 'Shein Import Tax' },
  { href: '/aliexpress-import-tax', label: 'AliExpress Import Tax' },
  { href: '/lazada-import-tax', label: 'Lazada Import Tax' },
  { href: '/shopee-import-tax', label: 'Shopee Import Tax' },
  { href: '/balikbayan-box', label: 'Balikbayan Box' },
];

const infoLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/guides', label: 'Guides' },
  { href: '/rates-sources', label: 'Rates & Sources' },
  { href: '/about', label: 'About' },
  { href: '/support', label: 'Support the Site' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3 w-fit">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-accent-500 text-navy-950 font-bold text-sm leading-none">
                ₱
              </span>
              <span className="text-white font-semibold text-base">
                ImportTax<span className="text-accent-400">.ph</span>
              </span>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed max-w-xs">
              Free Philippine customs duty and VAT calculator for online shoppers and importers.
            </p>
            <p className="mt-3 text-xs text-muted">
              Rates updated {RATES_LAST_REVIEWED} · {RATES_REGULATION_REF}
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Calculators
            </h3>
            <ul className="space-y-2">
              {toolLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-navy-200 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Information
            </h3>
            <ul className="space-y-2">
              {infoLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-navy-200 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://customs.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-navy-200 hover:text-white transition-colors"
                >
                  Bureau of Customs ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-navy-800 pt-6">
          <p className="text-xs text-muted leading-relaxed mb-3">
            <strong className="text-navy-200 font-medium">Disclaimer:</strong> This tool provides
            estimates for guidance only — not an official Bureau of Customs assessment, and not
            legal or tax advice. Actual duties depend on HS/AHTN classification and BOC valuation.
            Always verify with the{' '}
            <a
              href="https://customs.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-navy-100 transition-colors"
            >
              Bureau of Customs
            </a>
            .
          </p>
          <p className="text-xs text-muted mt-2">
            Temu, Shein, AliExpress, Lazada, Shopee, and other marketplace names are trademarks of
            their respective owners. ImportTax.ph is independent and not affiliated with, endorsed
            by, or sponsored by any of them.
          </p>
          <p className="text-xs text-muted mt-2">
            © {new Date().getFullYear()} ImportTax.ph — Not affiliated with the Bureau of Customs
            or any government agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
