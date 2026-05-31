import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://importtaxph.com'),
  title: {
    default: 'ImportTaxPH — Free Philippine Customs Duty & VAT Calculator',
    template: '%s | ImportTaxPH',
  },
  description:
    'Estimate Philippine customs duties and VAT on online purchases from Temu, Shein, AliExpress, and more. Free, fast, and updated for CAO 02-2025.',
  keywords: [
    'Philippines import tax',
    'Philippine customs duty calculator',
    'BOC duties calculator',
    'Temu Philippines customs',
    'Shein Philippines tax',
    'AliExpress Philippines duty',
    'balikbayan box tax',
    'de minimis Philippines',
  ],
  openGraph: {
    siteName: 'ImportTaxPH',
    locale: 'en_PH',
    type: 'website',
    title: 'ImportTaxPH — Free Philippine Customs Duty & VAT Calculator',
    description:
      'Estimate PH customs duties and VAT on your international online orders. Free, updated for CAO 02-2025.',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PH"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'ImportTaxPH',
            url: 'https://importtaxph.com',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ImportTaxPH',
            url: 'https://importtaxph.com',
            description: 'Free Philippine import tax and customs duty calculator.',
          },
        ]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
