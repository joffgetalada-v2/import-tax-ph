import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/de-minimis-philippines' },
  title: "PHP 10,000 De Minimis Philippines (CAO 02-2025)",
  description: "How the PHP 10,000 de minimis works under CAO 02-2025: at or below PHP 10,000 goods value you pay zero customs duty and zero 12% VAT. See exactly how it's measured.",
  openGraph: {
    title: "PHP 10,000 De Minimis Philippines (CAO 02-2025)",
    description: "How the PHP 10,000 de minimis works under CAO 02-2025: at or below PHP 10,000 goods value you pay zero customs duty and zero 12% VAT. See exactly how it's measured.",
  },
};

const content = {
  "slug": "de-minimis-philippines",
  "tag": "De minimis",
  "h1": "The PHP 10,000 De Minimis in the Philippines (CAO 02-2025), Explained",
  "intro": "Under CAO 02-2025, shipments with a goods value at or below PHP 10,000 enter the Philippines free of both customs duty and 12% VAT. Here is exactly how that threshold is measured and when you lose it.",
  "breadcrumbName": "De Minimis",
  "shareTitle": "The PHP 10,000 De Minimis Philippines (CAO 02-2025)",
  "sections": [
    {
      "h2": "What the PHP 10,000 de minimis actually exempts",
      "paragraphs": [
        "The de minimis is the value floor below which the Bureau of Customs does not collect import charges. If your shipment qualifies, it is exempt from BOTH the customs duty AND the 12% VAT — not just one of them. There is no partial tax; a qualifying parcel clears free of import tax entirely.",
        "The legal basis is Section 423 of the CMTA (Republic Act 10863), implemented by Customs Administrative Order No. 02-2025, which took effect on 7 May 2025. The threshold figure is PHP 10,000."
      ],
      "callout": "Key rule: at or below PHP 10,000 goods value = exempt from customs duty AND 12% VAT. The exemption is all-or-nothing, not a deductible allowance."
    },
    {
      "h2": "It's checked on FOB goods value — not CIF",
      "paragraphs": [
        "This is the part most shoppers get wrong. The PHP 10,000 test is applied to the FOB/FCA value — the price of the goods alone — converted to pesos. It EXCLUDES the shipping (freight) and insurance you paid.",
        "So a PHP 9,500 order with PHP 1,200 shipping still qualifies for the exemption, because the goods value (PHP 9,500) is what gets compared to PHP 10,000 — the freight does not count toward the threshold. (Note: if the parcel does become taxable, duty is then charged on the CIF value, which is goods + insurance + freight. CIF matters for the tax math, not for the de minimis test.)"
      ],
      "bullets": [
        "Threshold test: FOB goods value only, in PHP — shipping and insurance excluded.",
        "Tax base if taxable: CIF value (goods + insurance + freight), in PHP.",
        "Two different numbers — don't confuse the eligibility test with the tax base."
      ]
    },
    {
      "h2": "The same-day consolidation rule",
      "paragraphs": [
        "You cannot dodge the threshold by splitting one big purchase into several small parcels. Under CAO 02-2025, multiple parcels addressed to the same recipient or address that arrive on the same day may be aggregated by customs.",
        "If the COMBINED FOB value of those parcels exceeds PHP 10,000, the exemption is lost and the whole lot becomes assessable for duty and 12% VAT."
      ],
      "callout": "Avoid ordering many same-day parcels to one address if the goods together exceed PHP 10,000 — customs may add them up and tax the total."
    },
    {
      "h2": "How the math works once you're above the threshold",
      "paragraphs": [
        "If your FOB goods value goes over PHP 10,000, the exemption no longer applies and the full shipment is assessed. The computation runs in this order: (1) compare the FOB goods value to PHP 10,000; (2) if above, customs duty = duty rate x CIF value; (3) VAT = 12% x (CIF + duty); (4) landed cost = CIF + duty + VAT.",
        "Worked example using a representative clothing/apparel rate of 15%: say a jacket costs PHP 12,000 with PHP 1,000 shipping and no separate insurance. The FOB value (PHP 12,000) is over PHP 10,000, so it is taxable. CIF = PHP 13,000. Duty = 15% x 13,000 = PHP 1,950. VAT = 12% x (13,000 + 1,950) = PHP 1,794. Landed cost = 13,000 + 1,950 + 1,794 = PHP 16,744.",
        "Duty rates depend on the product's 8-digit HS/AHTN code, so the 15% above is a representative estimate for apparel, not an official quote. Run your exact figures through the calculator before you buy."
      ]
    },
    {
      "h2": "Even exempt parcels can carry courier fees",
      "paragraphs": [
        "Tax-exempt does not always mean free at the door. Couriers (DHL, FedEx, UPS, LBC) and PHLPOST may still charge small processing or handling fees even on parcels that owe zero duty and zero VAT.",
        "Some goods also need clearance from other agencies regardless of value — for example cosmetics, supplements, and food go through the FDA, and certain electronics and radio devices through the NTC. Those clearances can apply even when the shipment is under PHP 10,000."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is the PHP 10,000 de minimis based on the item price or the total with shipping?",
      "a": "It is based on the FOB goods value — the price of the items alone, converted to pesos. Shipping (freight) and insurance are excluded from the PHP 10,000 test. If the goods value is at or below PHP 10,000, the parcel is exempt even if shipping pushes the total higher."
    },
    {
      "q": "If my order is under PHP 10,000, do I pay any duty or VAT?",
      "a": "No. At or below PHP 10,000 FOB goods value, the shipment is exempt from both customs duty and the 12% VAT under CAO 02-2025 and Section 423 of the CMTA. You may still see a small courier or postal processing/handling fee, but no import tax."
    },
    {
      "q": "Can I split a big order into smaller parcels to stay under PHP 10,000?",
      "a": "Not reliably. CAO 02-2025 lets customs aggregate multiple parcels going to the same recipient or address that arrive on the same day. If the combined FOB value exceeds PHP 10,000, the exemption is lost and the whole shipment becomes taxable."
    },
    {
      "q": "What exactly is PHP 10,000 — duty plus VAT, or just the price?",
      "a": "It is the goods' FOB value (their price alone) in pesos, not a tax amount and not the CIF total. Customs compares that goods value to PHP 10,000 to decide if the shipment is exempt. If it is over, duty is then charged on the CIF value and 12% VAT on CIF plus duty."
    },
    {
      "q": "When did the PHP 10,000 de minimis rule take effect?",
      "a": "CAO No. 02-2025, which implements the PHP 10,000 de minimis under Section 423 of the CMTA (RA 10863), took effect on 7 May 2025."
    }
  ],
  "related": [
    {
      "href": "/guides/how-to-compute-import-tax-philippines",
      "label": "How to compute import tax in the Philippines"
    },
    {
      "href": "/guides/vat-on-imports-philippines",
      "label": "12% VAT on imports, explained"
    },
    {
      "href": "/guides/package-held-by-customs-philippines",
      "label": "Why is my package held by customs?"
    }
  ],
  "lastUpdated": "2026-06-01"
};

export default function Page() {
  return <GuideArticle {...content} />;
}
