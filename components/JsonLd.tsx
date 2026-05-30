interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

// Safe serialisation: escapes `</` so the script tag can't be closed early.
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
