import JsonLd from '@/components/JsonLd';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  heading?: string;
  /** When false, renders the visible FAQ only (use if the page emits its own FAQPage schema). */
  includeSchema?: boolean;
}

/**
 * Visible FAQ block + (optional) FAQPage JSON-LD.
 * Google requires FAQPage schema to mirror visible on-page Q&A — this keeps them in sync.
 */
export default function FaqSection({
  faqs,
  heading = 'Frequently asked questions',
  includeSchema = true,
}: FaqSectionProps) {
  if (!faqs.length) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="mt-10">
      {includeSchema && <JsonLd data={faqSchema} />}
      <h2 className="text-xl font-bold text-foreground mb-4">{heading}</h2>
      <dl className="space-y-5">
        {faqs.map((faq) => (
          <div key={faq.q} className="border-b border-border pb-5 last:border-0">
            <dt className="font-semibold text-foreground text-sm mb-1.5">{faq.q}</dt>
            <dd className="text-sm text-muted leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
