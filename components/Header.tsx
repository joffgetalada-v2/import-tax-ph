import Link from 'next/link';

const navLinks = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/temu-import-tax', label: 'Temu' },
  { href: '/shein-import-tax', label: 'Shein' },
  { href: '/aliexpress-import-tax', label: 'AliExpress' },
  { href: '/lazada-import-tax', label: 'Lazada' },
  { href: '/shopee-import-tax', label: 'Shopee' },
  { href: '/balikbayan-box', label: 'Balikbayan Box' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy-950 border-b border-navy-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none"
            aria-label="ImportTax.ph — Home"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded bg-accent-500 text-navy-950 font-bold text-sm leading-none select-none">
              ₱
            </span>
            <span className="text-white font-semibold tracking-tight text-base sm:text-lg">
              ImportTax
              <span className="text-accent-400">.ph</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-sm text-navy-100 hover:text-white hover:bg-navy-800 rounded-md transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile nav toggle — purely cosmetic label for small screens */}
          <div className="md:hidden">
            <Link
              href="/how-it-works"
              className="text-sm text-navy-200 hover:text-white transition-colors"
            >
              Guide
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
