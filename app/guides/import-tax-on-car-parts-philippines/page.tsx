import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/import-tax-on-car-parts-philippines' },
  title: 'Import Tax on Car Parts in the Philippines',
  description:
    'How import tax on car parts works in the Philippines: the ₱10,000 de minimis, customs duty on CIF, and 12% VAT — and why you must verify your part’s exact HS-code duty rate.',
  openGraph: {
    title: 'Import Tax on Car Parts in the Philippines',
    description:
      'How import tax on car parts works in the Philippines: the ₱10,000 de minimis, customs duty on CIF, and 12% VAT — and why you must verify your part’s exact HS-code duty rate.',
  },
};

const content = {
  slug: 'import-tax-on-car-parts-philippines',
  tag: 'Category',
  breadcrumbName: 'Car Parts',
  h1: 'Import Tax on Car Parts in the Philippines',
  intro:
    'Importing car parts or accessories? The ₱10,000 de minimis and 12% VAT work the same as for any import — but automotive duty rates vary widely by part, so this guide shows the method and where to confirm the exact rate for your item.',
  shareTitle: 'Import Tax on Car Parts in the Philippines',
  sections: [
    {
      h2: 'Does the ₱10,000 de minimis apply to car parts?',
      paragraphs: [
        'Yes. Car parts follow the same rule as any imported parcel: if the goods value (FOB) — the price of the part alone, before shipping and insurance, converted to pesos — is at or below ₱10,000, the shipment is exempt from both customs duty and 12% VAT.',
        'Small items like filters, sensors, spark plugs, or trim clips often stay under the threshold, while larger or pricier parts such as body panels, ECUs, or full assemblies usually exceed it and become taxable.',
      ],
      callout:
        'Same-day consolidation applies: if several parcels reach the same address on the same day, customs may add their FOB values together. If the combined goods value tops ₱10,000, the exemption is lost.',
    },
    {
      h2: 'Why we don’t quote a single duty rate for car parts',
      paragraphs: [
        'Automotive parts span many different tariff headings — engine components, electrical parts, tires, glass, body panels, and accessories are each classified differently. Their duty rates vary widely and are often higher than typical consumer goods.',
        'Because of that spread, there is no single reliable "car parts" duty rate. The only dependable figure is the one for your specific part’s 8-digit HS/AHTN code, which you can look up in the official Tariff Commission tariff finder.',
      ],
      callout:
        'Verify your exact rate before you rely on any estimate: look up your part’s HS/AHTN code in the Tariff Commission Tariff Finder (finder.tariffcommission.gov.ph) or ask the Bureau of Customs.',
    },
    {
      h2: 'How duty and VAT are computed once you’re above ₱10,000',
      paragraphs: [
        'The method is the same as any taxable import — only the duty rate is specific to your part. Duty is charged on the CIF value (part cost + insurance + freight, in pesos), then 12% VAT is applied on top of CIF plus duty.',
      ],
      bullets: [
        'Step 1 — Compare the FOB goods value to ₱10,000. At or below: exempt, stop here.',
        'Step 2 — Duty = your part’s verified HS-code rate × CIF value.',
        'Step 3 — VAT = 12% × (CIF value + duty).',
        'Step 4 — Landed cost = CIF + duty + VAT.',
      ],
    },
    {
      h2: 'A worked example for the part that’s fixed',
      paragraphs: [
        'Exempt case: a ₱8,000 sensor with ₱700 shipping has an FOB goods value of ₱8,000 — at or below ₱10,000 — so it is exempt from duty and VAT (a small courier handling fee may still apply).',
        'Taxable case: suppose a part has a CIF value of ₱20,000. Once you have looked up the duty for its HS code, duty = rate × ₱20,000, and VAT = 12% × (₱20,000 + duty). The 12% VAT step is always the same; only the duty rate changes with the part.',
      ],
    },
    {
      h2: 'Permits, fees, and who collects the tax',
      paragraphs: [
        'Couriers such as DHL, FedEx, UPS, and LBC usually advance the duty and VAT to customs and then bill you, while PHLPOST collects at the post office when you claim a postal parcel.',
        'Some parts with electronic or radio components may need NTC clearance. Keep your order invoice — proof of the price you actually paid helps if customs assesses your part at a higher value.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How much is import tax on car parts in the Philippines?',
      a: 'If the part’s goods value (FOB) is at or below ₱10,000, there is no duty or VAT. Above ₱10,000, you pay customs duty on the CIF value plus 12% VAT on (CIF + duty). The duty rate depends on the part’s HS/AHTN code, so look it up rather than assuming a flat rate.',
    },
    {
      q: 'Are small car parts under ₱10,000 tax-free?',
      a: 'Yes. If the goods value of the part (the price alone, before shipping and insurance) converted to pesos is at or below ₱10,000, it is exempt from both customs duty and 12% VAT. A small courier or postal handling fee may still apply.',
    },
    {
      q: 'What duty rate applies to imported car parts?',
      a: 'It varies. Automotive parts fall under many different tariff headings, and their rates are often higher than ordinary consumer goods. There is no single car-parts rate — check your specific part’s HS/AHTN code in the Tariff Commission tariff finder for the correct figure.',
    },
    {
      q: 'Does shipping count toward the ₱10,000 limit for car parts?',
      a: 'No. The ₱10,000 de minimis is compared only against the FOB goods value — the part’s price, excluding shipping and insurance. Shipping and insurance are added afterward to form the CIF value that duty and VAT are computed on once the order is taxable.',
    },
    {
      q: 'Who do I pay the duty and VAT to for imported car parts?',
      a: 'It depends on the carrier. Couriers like DHL, FedEx, UPS, and LBC typically advance the duty and VAT and bill you on delivery, while PHLPOST collects the assessed amount at the post office when you claim a postal parcel.',
    },
  ],
  related: [
    { href: '/guides/how-to-compute-import-tax-philippines', label: 'How to compute import tax in the Philippines' },
    { href: '/guides/de-minimis-philippines', label: 'The ₱10,000 de minimis rule explained' },
    { href: '/rates-sources', label: 'Our duty rates & official sources' },
  ],
  lastUpdated: '2026-06-01',
};

export default function Page() {
  return <GuideArticle {...content} />;
}
