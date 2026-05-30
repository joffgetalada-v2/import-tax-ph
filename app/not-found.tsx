import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you were looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-navy-950 text-accent-400 text-3xl font-bold flex items-center justify-center mb-6">
        ₱
      </div>
      <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>
      <p className="text-muted text-lg mb-6">That page doesn&apos;t exist.</p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-navy-950 font-semibold text-sm transition-colors"
        >
          Go to Calculator
        </Link>
        <Link
          href="/how-it-works"
          className="px-5 py-2.5 rounded-lg border border-border text-foreground hover:bg-navy-50 text-sm transition-colors"
        >
          How It Works
        </Link>
      </div>
    </div>
  );
}
