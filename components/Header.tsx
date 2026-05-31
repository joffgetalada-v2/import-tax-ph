'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Calculator' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/temu-import-tax', label: 'Temu' },
  { href: '/shein-import-tax', label: 'Shein' },
  { href: '/aliexpress-import-tax', label: 'AliExpress' },
  { href: '/lazada-import-tax', label: 'Lazada' },
  { href: '/shopee-import-tax', label: 'Shopee' },
  { href: '/balikbayan-box', label: 'Balikbayan Box' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 bg-navy-950 border-b border-navy-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-none"
            aria-label="ImportTaxPH — Home"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded bg-accent-500 text-navy-950 font-bold text-sm leading-none select-none">
              ₱
            </span>
            <span className="text-white font-semibold tracking-tight text-base sm:text-lg">
              ImportTax
              <span className="text-accent-400">PH</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.slice(1).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-sm text-navy-100 hover:text-white hover:bg-navy-800 rounded-md transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-navy-200 hover:text-white hover:bg-navy-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              /* X icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-navy-900 border-t border-navy-800">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-2.5 text-sm text-navy-100 hover:text-white hover:bg-navy-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
