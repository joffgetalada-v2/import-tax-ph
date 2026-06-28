import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/how-to-compute-import-tax-philippines' },
  title: "How to Compute Import Tax in the Philippines",
  description: "Learn how to compute import tax in the Philippines step by step: the PHP 10,000 de minimis check, customs duty on CIF, and 12% VAT, with a clear worked example.",
  openGraph: {
    title: "How to Compute Import Tax in the Philippines",
    description: "Learn how to compute import tax in the Philippines step by step: the PHP 10,000 de minimis check, customs duty on CIF, and 12% VAT, with a clear worked example.",
  },
};

const content = {
  "slug": "how-to-compute-import-tax-philippines",
  "tag": "Calculation",
  "h1": "How to Compute Import Tax in the Philippines",
  "intro": "Computing your import tax comes down to four steps: check the goods value against the PHP 10,000 de minimis, then apply duty, then 12% VAT, then add it all up. This guide walks through the exact method with a worked example.",
  "breadcrumbName": "Compute Import Tax",
  "shareTitle": "How to Compute Import Tax in the Philippines",
  "sections": [
    {
      "h2": "First, know your two values: FOB and CIF",
      "paragraphs": [
        "Two figures drive the whole computation. FOB (free on board) is the price of the goods alone, converted to pesos, excluding shipping and insurance. CIF is the goods price plus insurance plus freight (shipping), also in pesos.",
        "The reason both matter: the PHP 10,000 de minimis exemption is checked against the FOB value, but if your order is taxable, customs duty is charged on the larger CIF value. Mixing these up is the most common computation mistake."
      ],
      "bullets": [
        "FOB = the goods' price only (no shipping, no insurance), in PHP",
        "CIF = item cost + insurance + freight (shipping), in PHP",
        "De minimis check uses FOB; duty is charged on CIF"
      ]
    },
    {
      "h2": "The four-step computation method",
      "paragraphs": [
        "Follow these steps in order. If step 1 says you are exempt, you stop there and owe no duty or VAT (though a courier may still add a small handling fee)."
      ],
      "bullets": [
        "Step 1 — De minimis check: Convert the goods (FOB) value to PHP. If it is PHP 10,000 or below, the parcel is exempt from both customs duty and 12% VAT. Stop here.",
        "Step 2 — Customs duty: If FOB is above PHP 10,000, multiply your category's duty rate by the CIF value. Duty = duty rate x CIF.",
        "Step 3 — 12% VAT: VAT = 12% x (CIF + duty). Note that VAT is charged on the CIF value plus the duty, not on CIF alone.",
        "Step 4 — Landed cost: Add it together. Landed cost = CIF + duty + VAT."
      ],
      "callout": "Key rule: the PHP 10,000 de minimis is measured on the FOB goods value (price alone, excluding shipping and insurance). Duty, when owed, is then charged on the full CIF value."
    },
    {
      "h2": "Worked example: a PHP 15,000 apparel order",
      "paragraphs": [
        "Say you order clothing worth PHP 15,000 with PHP 1,000 shipping and no separate insurance. Clothing and apparel typically carries a representative duty rate of about 15% (the exact rate depends on the item's HS/AHTN classification).",
        "Step 1: FOB is PHP 15,000, which is above PHP 10,000, so the order is taxable. Step 2: CIF = 15,000 + 1,000 = PHP 16,000; duty = 15% x 16,000 = PHP 2,400. Step 3: VAT = 12% x (16,000 + 2,400) = 12% x 18,400 = PHP 2,208. Step 4: landed cost = 16,000 + 2,400 + 2,208 = PHP 20,608."
      ],
      "bullets": [
        "FOB goods value: PHP 15,000 (above PHP 10,000, so taxable)",
        "CIF value: PHP 16,000 (15,000 goods + 1,000 shipping)",
        "Customs duty (15% x CIF): PHP 2,400",
        "12% VAT on (CIF + duty): PHP 2,208",
        "Total landed cost: PHP 20,608"
      ]
    },
    {
      "h2": "Watch the same-day consolidation rule",
      "paragraphs": [
        "Splitting one big order into several small parcels does not reliably dodge the threshold. Under the rules, multiple parcels sent to the same recipient or address that arrive on the same day may be aggregated by the Bureau of Customs.",
        "If the combined FOB value of those parcels exceeds PHP 10,000, the de minimis exemption is lost and the whole consignment becomes taxable. Plan your orders with the combined value in mind."
      ]
    },
    {
      "h2": "Other things that can affect your total",
      "paragraphs": [
        "Two factors sit outside the basic math. First, your real duty rate depends on the item's 8-digit HS/AHTN code; the category rates here are representative estimates only. Many electronics, for example, are duty-free, while goods like automotive parts often carry higher duty rates than typical consumer goods, so verify the exact rate for your code.",
        "Second, some goods need clearance from another agency before release. Cosmetics, supplements, and food go through the FDA, and certain electronics or radio devices go through the NTC. Couriers like DHL, FedEx, UPS, and LBC advance duties and bill you, while PHLPOST collects at the post office, and even exempt parcels can carry small handling fees."
      ],
      "callout": "Verify your exact duty rate in the official Tariff Commission tariff finder before you rely on a category estimate, especially for higher-duty items."
    }
  ],
  "faqs": [
    {
      "q": "How do I compute import tax in the Philippines?",
      "a": "Check the goods (FOB) value against the PHP 10,000 de minimis. If it is PHP 10,000 or below, you are exempt from duty and VAT. If above, compute duty = duty rate x CIF, then VAT = 12% x (CIF + duty), then landed cost = CIF + duty + VAT."
    },
    {
      "q": "Is duty calculated on the item price or on the total with shipping?",
      "a": "Customs duty is charged on the CIF value, which is the item cost plus insurance plus freight (shipping) in pesos. Only the de minimis exemption check uses the FOB goods value alone, excluding shipping and insurance."
    },
    {
      "q": "What value decides if my parcel is tax-free?",
      "a": "The FOB value, meaning the price of the goods alone converted to PHP, not counting shipping or insurance. If that FOB value is PHP 10,000 or below, the parcel is exempt from both customs duty and the 12% VAT."
    },
    {
      "q": "How is the 12% VAT calculated on imports?",
      "a": "VAT is 12% applied to the CIF value plus the customs duty, not to the CIF alone. So VAT = 12% x (CIF + duty). It is added on top of the duty when computing your total landed cost."
    },
    {
      "q": "Can I split an order into smaller parcels to stay under PHP 10,000?",
      "a": "Not reliably. Multiple parcels to the same recipient or address arriving on the same day may be aggregated by customs. If the combined FOB value exceeds PHP 10,000, the exemption is lost and the whole consignment becomes taxable."
    }
  ],
  "related": [
    {
      "href": "/guides/de-minimis-philippines",
      "label": "The PHP 10,000 de minimis rule explained"
    },
    {
      "href": "/guides/vat-on-imports-philippines",
      "label": "How 12% VAT on imports works"
    },
    {
      "href": "/guides/how-to-pay-customs-duties-philippines",
      "label": "How to pay customs duties and VAT"
    }
  ],
  "lastUpdated": "2026-06-01"
};

export default function Page() {
  return <GuideArticle {...content} />;
}
