import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/import-tax-on-shoes-philippines' },
  title: "Import Tax on Shoes in the Philippines: Duty + VAT",
  description: "How much import tax on shoes in the Philippines? Orders with goods value at or below PHP 10,000 are exempt; above that, footwear faces customs duty plus 12% VAT. See a worked sneaker example.",
  openGraph: {
    title: "Import Tax on Shoes in the Philippines: Duty + VAT",
    description: "How much import tax on shoes in the Philippines? Orders with goods value at or below PHP 10,000 are exempt; above that, footwear faces customs duty plus 12% VAT. See a worked sneaker example.",
  },
};

const content = {
  "slug": "import-tax-on-shoes-philippines",
  "tag": "Category",
  "h1": "Import Tax on Shoes in the Philippines: Duty, VAT, and a Worked Example",
  "intro": "Buying sneakers, boots, or heels from abroad? Here is how Philippine customs decides whether your footwear is taxed, and exactly what duty and 12% VAT you would pay if it is.",
  "breadcrumbName": "Shoes & Footwear",
  "shareTitle": "Import Tax on Shoes in the Philippines (Duty + VAT)",
  "sections": [
    {
      "h2": "Is your shoe order taxed at all? The PHP 10,000 rule",
      "paragraphs": [
        "Customs first looks at the de minimis threshold. If the goods value of your footwear — the price of the shoes alone, before shipping and insurance, converted to pesos — is at or below PHP 10,000, the parcel is exempt from BOTH customs duty and 12% VAT.",
        "Only the FOB value of the shoes is compared to the threshold, not your total checkout price. So a pair priced at PHP 9,500 with PHP 800 shipping is still exempt, because the PHP 9,500 goods value stays under PHP 10,000.",
        "If your shoes cost more than PHP 10,000, the whole shipment becomes taxable and duty plus VAT are calculated on the landed value."
      ],
      "callout": "Watch the same-day consolidation rule: if you order multiple pairs to the same address that arrive the same day, customs may add the FOB values together. If the combined goods value tops PHP 10,000, the exemption is lost."
    },
    {
      "h2": "How duty and VAT are computed on footwear",
      "paragraphs": [
        "Once your shoes are above the threshold, footwear carries a representative customs duty of about 15%. This is an estimate for typical shoes — the exact rate depends on the 8-digit HS/AHTN classification, so verify yours in the Tariff Commission tariff finder.",
        "Duty is charged on the CIF value (shoe cost + insurance + freight, all in PHP), and then 12% VAT is applied on top of CIF plus duty."
      ],
      "bullets": [
        "Step 1 — Compare the FOB goods value to PHP 10,000. At or below: exempt, stop here.",
        "Step 2 — Duty = 15% (representative footwear rate) x CIF value.",
        "Step 3 — VAT = 12% x (CIF value + duty).",
        "Step 4 — Landed cost = CIF + duty + VAT."
      ]
    },
    {
      "h2": "Worked example: a PHP 12,000 sneaker order",
      "paragraphs": [
        "Say you buy sneakers for PHP 12,000 with PHP 1,000 shipping and no separate insurance.",
        "The goods value (PHP 12,000) is above PHP 10,000, so the order is taxable. CIF = 12,000 + 1,000 = PHP 13,000. Duty at the 15% representative footwear rate = PHP 1,950. VAT = 12% x (13,000 + 1,950) = PHP 1,794.",
        "Total landed cost = 13,000 + 1,950 + 1,794 = PHP 16,744. That is roughly PHP 3,744 in duty and tax on top of the CIF value. Run your own numbers in our free calculator before you check out."
      ]
    },
    {
      "h2": "What else can affect your shoe import",
      "paragraphs": [
        "How you pay depends on the carrier. Couriers such as DHL, FedEx, UPS, and LBC usually advance the duties to customs and then bill you on delivery, while PHLPOST collects at the post office when you claim the parcel.",
        "Even an exempt pair under PHP 10,000 can still carry a small courier processing or handling fee, so the bill may not be exactly zero.",
        "Keep your order invoice. Proof of the real price you paid helps if customs assesses your shoes at a higher value than you actually paid."
      ]
    }
  ],
  "faqs": [
    {
      "q": "How much is the import tax on shoes in the Philippines?",
      "a": "If the goods value of your shoes is at or below PHP 10,000, there is no duty or VAT. Above PHP 10,000, footwear carries a representative customs duty of about 15% on the CIF value, plus 12% VAT on (CIF + duty). The exact duty depends on the shoes' HS/AHTN code, so treat 15% as an estimate and verify it."
    },
    {
      "q": "Are cheap shoes under PHP 10,000 tax-free when imported?",
      "a": "Yes. If the footwear's goods value (the price alone, before shipping and insurance) converted to pesos is at or below PHP 10,000, the parcel is exempt from both customs duty and 12% VAT. Note that a small courier or postal handling fee may still apply even when the shoes are exempt."
    },
    {
      "q": "Does shipping count toward the PHP 10,000 limit for shoes?",
      "a": "No. The PHP 10,000 de minimis threshold is compared only against the FOB goods value — the shoe price itself, excluding shipping and insurance. Shipping and insurance are added later to form the CIF value that duty and VAT are calculated on once the order is taxable."
    },
    {
      "q": "What if I order two pairs of shoes that arrive the same day?",
      "a": "Under the same-day consolidation rule, customs may add together multiple parcels sent to the same recipient or address that arrive on the same day. If the combined goods value exceeds PHP 10,000, the de minimis exemption is lost and the shipment becomes taxable."
    },
    {
      "q": "Who do I pay the customs duty and VAT to for imported shoes?",
      "a": "It depends on the carrier. Couriers like DHL, FedEx, UPS, and LBC typically advance the duty and VAT to customs and then bill you, usually on delivery. For postal items, PHLPOST collects the assessed amount at the post office when you claim the package."
    }
  ],
  "related": [
    {
      "href": "/guides/de-minimis-philippines",
      "label": "The PHP 10,000 de minimis rule explained"
    },
    {
      "href": "/guides/import-tax-on-bags-philippines",
      "label": "Import tax on bags in the Philippines"
    },
    {
      "href": "/",
      "label": "Free import tax calculator"
    }
  ],
  "lastUpdated": "2026-06-01"
};

export default function Page() {
  return <GuideArticle {...content} />;
}
