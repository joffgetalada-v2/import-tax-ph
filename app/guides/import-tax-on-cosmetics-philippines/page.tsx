import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/import-tax-on-cosmetics-philippines' },
  title: "Import Tax on Cosmetics & Skincare Philippines",
  description: "How much is import tax on cosmetics and skincare in the Philippines? If your goods cost over PHP 10,000 you pay duty plus 12% VAT. See the formula and a worked example.",
  openGraph: {
    title: "Import Tax on Cosmetics & Skincare Philippines",
    description: "How much is import tax on cosmetics and skincare in the Philippines? If your goods cost over PHP 10,000 you pay duty plus 12% VAT. See the formula and a worked example.",
  },
};

const content = {
  "slug": "import-tax-on-cosmetics-philippines",
  "tag": "Category",
  "h1": "Import Tax on Cosmetics and Skincare in the Philippines",
  "intro": "Ordering makeup, serums, or sunscreen from abroad? Whether you owe Philippine import tax depends on one number: the goods value. Below PHP 10,000 (the goods alone, before shipping) your parcel is exempt; above it, you pay customs duty plus 12% VAT.",
  "breadcrumbName": "Cosmetics & Skincare",
  "shareTitle": "Import Tax on Cosmetics & Skincare in the Philippines",
  "sections": [
    {
      "h2": "Is your cosmetics order taxable?",
      "paragraphs": [
        "The first test is the de minimis threshold. Philippine Customs compares your FOB value — the price of the goods alone, converted to pesos and excluding shipping and insurance — against PHP 10,000.",
        "If the goods value is PHP 10,000 or less, your shipment is exempt from both customs duty and the 12% VAT. If it is above PHP 10,000, the whole order becomes taxable and duty plus VAT are computed on its full value (not just the amount over the threshold)."
      ],
      "callout": "De minimis is PHP 10,000 on the goods value only. A PHP 9,500 skincare haul stays exempt even if shipping pushes the total you paid past PHP 10,000."
    },
    {
      "h2": "How the duty and VAT are computed",
      "paragraphs": [
        "Once your order is taxable, the math runs in a set order. Cosmetics and skincare carry a representative duty rate of about 10%, though the exact rate depends on the product's 8-digit HS/AHTN classification.",
        "Duty is charged on the CIF value — item cost plus insurance plus freight, all in pesos. Then 12% VAT is applied on top of the CIF value plus that duty."
      ],
      "bullets": [
        "Step 1 — Compare the FOB goods value to PHP 10,000. At or below, you are exempt and can stop here.",
        "Step 2 — If above, customs duty = 10% (representative cosmetics rate) x CIF value.",
        "Step 3 — VAT = 12% x (CIF value + customs duty).",
        "Step 4 — Landed cost = CIF value + duty + VAT."
      ]
    },
    {
      "h2": "Worked example: a PHP 12,000 skincare order",
      "paragraphs": [
        "Say you order serums and creams worth PHP 12,000, with PHP 1,000 shipping and no separate insurance. The FOB goods value is PHP 12,000, which is above PHP 10,000 — so the order is taxable.",
        "Your CIF value is PHP 13,000 (12,000 goods + 1,000 freight). Customs duty at the representative 10% rate is PHP 1,300. VAT is 12% of (13,000 + 1,300), or PHP 1,716. That makes the landed cost PHP 16,016 — the PHP 13,000 CIF plus PHP 1,300 duty plus PHP 1,716 VAT.",
        "This uses the representative 10% cosmetics rate as an estimate. Confirm the actual rate for your specific product in the official Tariff Commission tariff finder before relying on a number."
      ]
    },
    {
      "h2": "FDA clearance for cosmetics and skincare",
      "paragraphs": [
        "Beyond tax, cosmetics, skincare, supplements, and food can require clearance from the Food and Drug Administration (FDA). This is a regulatory check on the product itself, separate from duty and VAT.",
        "Personal-use quantities are usually treated more leniently than commercial volumes, but large or resale-sized shipments may be held pending FDA documentation. If you are importing to sell, look into FDA registration before ordering."
      ],
      "callout": "Verify-note: FDA rules apply to the product, not the price. Even a tax-exempt parcel under PHP 10,000 can be held if the goods need agency clearance."
    },
    {
      "h2": "Who collects the payment",
      "paragraphs": [
        "Couriers such as DHL, FedEx, UPS, and LBC typically advance the duties and taxes to Customs, then bill you — on or before delivery — for the duty, the 12% VAT, and their own processing or handling fee. For postal items, PHLPOST collects at the post office when you claim the parcel.",
        "Even exempt parcels can carry small courier processing or handling fees, so a PHP 0 tax bill does not always mean PHP 0 in charges.",
        "One more trap: if several parcels reach the same recipient on the same day, Customs may combine them. If the combined goods value tops PHP 10,000, the exemption is lost for the whole lot."
      ]
    }
  ],
  "faqs": [
    {
      "q": "How much is import tax on cosmetics in the Philippines?",
      "a": "If the goods value is PHP 10,000 or less, there is no duty and no VAT. Above PHP 10,000, cosmetics carry a representative customs duty of about 10% on the CIF value (item + shipping + insurance), plus 12% VAT on the CIF value plus that duty. The exact duty rate depends on the product's HS/AHTN code, so verify it for your item."
    },
    {
      "q": "Is my skincare order exempt if it's under PHP 10,000?",
      "a": "Yes, if the FOB goods value — the price of the products alone, in pesos, before shipping and insurance — is PHP 10,000 or below, the shipment is exempt from both customs duty and the 12% VAT. Note that shipping is not counted toward this threshold, only the goods themselves."
    },
    {
      "q": "Does shipping count toward the PHP 10,000 limit?",
      "a": "No. The PHP 10,000 de minimis threshold is measured against the FOB goods value only — the cost of the cosmetics themselves. Shipping and insurance are excluded from that comparison. However, once an order is taxable, shipping and insurance are added in to form the CIF value that duty and VAT are calculated on."
    },
    {
      "q": "Do imported cosmetics need FDA approval?",
      "a": "Cosmetics, skincare, supplements, and food can require clearance from the FDA, which is separate from import tax. Small personal-use quantities are generally treated more leniently, but commercial or resale-sized shipments may be held pending FDA documentation. If you plan to sell, look into FDA registration before importing."
    },
    {
      "q": "Can customs combine my separate beauty parcels?",
      "a": "Yes. Under the same-day consolidation rule, multiple parcels going to the same recipient or address and arriving the same day may be aggregated by the Bureau of Customs. If the combined goods value exceeds PHP 10,000, the de minimis exemption is lost for the whole batch, so splitting one big order into several parcels does not reliably keep you under the limit."
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
      "href": "/",
      "label": "Free import tax calculator"
    }
  ],
  "lastUpdated": "2026-06-01"
};

export default function Page() {
  return <GuideArticle {...content} />;
}
