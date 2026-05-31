import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import CopyAddress from '@/components/CopyAddress';

export const metadata: Metadata = {
  title: 'Support ImportTaxPH – Help Keep It Free',
  description:
    'ImportTaxPH is free with no paywall. If it helped you, chip in via Ko-fi, GCash, Maya, or crypto to cover hosting and fund new guides.',
};

const METAMASK_ADDRESS = '0x07DFCF64faB9C793Ea7d3Dd939A82cF6708d4F8E';

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://importtaxph.com' },
    { '@type': 'ListItem', position: 2, name: 'Support', item: 'https://importtaxph.com/support' },
  ],
};

/* ------------------------------------------------------------------
   QrImage — simple overflow-hidden crop, no Next.js Image quirks.
   offsetPx: positive = shift image UP to expose lower part of source.
   ------------------------------------------------------------------ */
function QrImage({
  src,
  alt,
  offsetPx = 0,
}: {
  src: string;
  alt: string;
  offsetPx?: number;
}) {
  return (
    <div
      className="mx-auto overflow-hidden rounded-lg mb-3 bg-white"
      style={{ width: 200, height: 200, position: 'relative' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '200px',
          height: 'auto',
          display: 'block',
          position: 'absolute',
          top: `-${offsetPx}px`,
          left: 0,
        }}
      />
    </div>
  );
}

export default function SupportPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <p className="text-accent-500 text-sm font-semibold uppercase tracking-wider mb-2">
          Keep it free
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
          Support ImportTaxPH
        </h1>
        <p className="text-muted text-base leading-relaxed mb-10">
          ImportTaxPH is, and will stay, <strong className="text-foreground">free to use</strong> —
          no paywall, no sign-up, and only minimal ads. If the calculator saved you from a surprise
          customs bill and you&apos;d like to help, a small contribution goes a long way.
        </p>

        {/* What your support funds */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4">What your support funds</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-0.5">▸</span>
              Hosting and the domain
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-0.5">▸</span>
              Keeping duty rates and rules up to date whenever the Bureau of Customs issues changes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-500 mt-0.5">▸</span>
              New guides, calculators, and features
            </li>
          </ul>
        </section>

        {/* Ways to support */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4">Ways to support</h2>
          <div className="space-y-4">

            {/* Ko-fi — clean 820×820 QR, no offset needed */}
            <div className="rounded-xl border border-border bg-surface p-5 flex flex-col items-center text-center">
              <p className="text-sm font-semibold text-foreground mb-1">Ko-fi</p>
              <p className="text-xs text-muted mb-4">Scan to buy us a coffee</p>
              <QrImage
                src="/ko-fi-qrcode.png"
                alt="Ko-fi QR code — ko-fi.com/gonyot"
                offsetPx={0}
              />
              <a
                href="https://ko-fi.com/gonyot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-navy-950 text-xs font-semibold transition-colors"
              >
                ☕ ko-fi.com/gonyot →
              </a>
            </div>

            {/* GCash + Maya side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/*
                GCash: source 1054×2049
                Scale to 200px wide → scaled height 389px (overflow 189px)
                QR centre ≈ 30% of source = 116px in scaled image
                Shift image up by (116−100) = 16px to centre QR in 200px container
              */}
              <div className="rounded-xl border border-border bg-surface p-5 flex flex-col items-center text-center">
                <p className="text-sm font-semibold text-foreground mb-1">GCash</p>
                <p className="text-xs text-muted mb-4">Scan to send</p>
                <QrImage
                  src="/gcash-qr.jpg"
                  alt="GCash QR code — importaxph"
                  offsetPx={16}
                />
                <p className="text-sm font-semibold text-foreground">importaxph</p>
                <p className="text-xs text-muted mt-0.5">Transfer fees may apply</p>
              </div>

              {/*
                Maya: source 1320×1482
                Scale to 200px wide → scaled height 225px (overflow 25px)
                QR centre ≈ 55% of source = 124px in scaled image
                Shift image up by (124−100) = 24px to centre QR in 200px container
              */}
              <div className="rounded-xl border border-border bg-surface p-5 flex flex-col items-center text-center">
                <p className="text-sm font-semibold text-foreground mb-1">Maya</p>
                <p className="text-xs text-muted mb-4">Scan to send</p>
                <QrImage
                  src="/maya-qr.jpg"
                  alt="Maya QR code — @gonyot"
                  offsetPx={24}
                />
                <p className="text-sm font-semibold text-foreground">@gonyot</p>
                <p className="text-xs text-muted mt-0.5">Transfer fees may apply</p>
              </div>

            </div>

            {/* MetaMask / Crypto */}
            <div className="rounded-xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl leading-none">🦊</span>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-0.5">MetaMask / Crypto</p>
                  <p className="text-xs text-muted">Send ETH or any ERC-20 token on any EVM network</p>
                </div>
              </div>
              <p className="text-xs text-muted mb-2">Wallet address</p>
              <CopyAddress address={METAMASK_ADDRESS} />
            </div>

          </div>
        </section>

        {/* No pressure */}
        <div className="rounded-xl bg-navy-50 border border-border p-5 text-sm text-muted mb-10">
          There&apos;s no pressure at all — the tool stays free either way. Even{' '}
          <strong className="text-foreground">sharing the site</strong> with a friend who shops
          online, or{' '}
          <strong className="text-foreground">reporting an outdated rate</strong>, genuinely helps.
        </div>

        {/* Legal note */}
        <p className="text-xs text-muted border-t border-border pt-6">
          ImportTaxPH is an independent project, not a registered charity — contributions are
          voluntary support, not tax-deductible donations.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-navy-600 hover:text-navy-800 underline"
          >
            ← Back to the calculator
          </Link>
        </div>
      </div>
    </>
  );
}
