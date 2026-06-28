import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ShareButtons from '@/components/ShareButtons';
import FaqSection, { type FaqItem } from '@/components/FaqSection';

const BASE_URL = 'https://importtaxph.com';

export interface GuideSection {
  h2: string;
  /** Plain-text paragraphs (no HTML). */
  paragraphs: string[];
  /** Optional bullet list rendered under the paragraphs. */
  bullets?: string[];
  /** Optional callout box (e.g. a key rule or a verify note). */
  callout?: string;
}

export interface GuideArticleProps {
  /** Slug after /guides/ — used for canonical, breadcrumb, and JSON-LD URLs. */
  slug: string;
  /** Small breadcrumb / tag label, e.g. "Calculation" or "Category". */
  tag: string;
  /** Full H1 including the target keyword. */
  h1: string;
  /** Hero intro paragraph. */
  intro: string;
  sections: GuideSection[];
  faqs: FaqItem[];
  /** ISO date string, e.g. "2026-06-01". */
  lastUpdated: string;
  related: { href: string; label: string }[];
  /** Title used for social share buttons. */
  shareTitle: string;
  /** Human breadcrumb name, e.g. "How to Compute Import Tax". */
  breadcrumbName: string;
}

export default function GuideArticle({
  slug,
  tag,
  h1,
  intro,
  sections,
  faqs,
  lastUpdated,
  related,
  shareTitle,
  breadcrumbName,
}: GuideArticleProps) {
  const url = `${BASE_URL}/guides/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: h1,
    description: intro,
    url,
    dateModified: lastUpdated,
    publisher: {
      '@type': 'Organization',
      name: 'ImportTaxPH',
      url: BASE_URL,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: `${BASE_URL}/guides` },
      { '@type': 'ListItem', position: 3, name: breadcrumbName, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center gap-2 text-xs text-navy-300 mb-4">
            <Link href="/guides" className="hover:text-white transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span>{tag}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
            {h1}
          </h1>
          <p className="text-navy-100 text-base leading-relaxed max-w-xl">{intro}</p>
        </div>
      </section>

      {/* Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-10 text-sm text-muted leading-relaxed">
          {sections.map((section) => (
            <section key={section.h2}>
              <h2 className="text-xl font-bold text-foreground mb-3">{section.h2}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-accent-500 mt-0.5 shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <div className="mt-4 rounded-lg bg-accent-50 border border-accent-300 px-4 py-3">
                  <p className="text-sm text-muted">{section.callout}</p>
                </div>
              )}
            </section>
          ))}

          {/* FAQ */}
          <FaqSection faqs={faqs} includeSchema={false} />

          {/* CTA */}
          <div className="rounded-xl bg-navy-50 border border-border p-6">
            <p className="text-sm font-semibold text-foreground mb-1">
              Estimate your import tax in seconds
            </p>
            <p className="text-sm text-muted mb-4">
              Our free calculator shows duty, 12% VAT, and total landed cost — so the bill on
              arrival is never a surprise.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-navy-950 font-semibold text-sm rounded-lg px-5 py-2.5 transition-colors"
            >
              Open the calculator →
            </Link>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                Related guides
              </p>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="text-sm text-navy-600 hover:text-navy-800 underline"
                    >
                      {r.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <ShareButtons title={shareTitle} />

          {/* Last updated + source + disclaimer */}
          <div className="border-t border-border pt-6 mt-6 space-y-2">
            <p className="text-xs text-muted">
              Last updated: {lastUpdated} · Source:{' '}
              <a
                href="https://customs.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Bureau of Customs
              </a>{' '}
              &amp;{' '}
              <a
                href="https://finder.tariffcommission.gov.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Tariff Commission
              </a>
              .
            </p>
            <p className="text-xs text-muted">
              This guide is general information, not official customs or legal advice. Duty rates
              shown are representative estimates; the actual rate depends on your item&apos;s
              HS/AHTN classification, which only the Bureau of Customs determines.
            </p>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/guides" className="text-sm text-navy-600 hover:text-navy-800 underline">
            ← All guides
          </Link>
        </div>
      </article>
    </>
  );
}
