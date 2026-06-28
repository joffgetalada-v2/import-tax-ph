import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/vat-on-imports-philippines' },
  title: "12% VAT on Imports in the Philippines Explained",
  description: "How the 12% VAT on imports in the Philippines works: it applies only to taxable parcels above the PHP 10,000 de minimis, and is charged on CIF value plus customs duty. See a worked example.",
  openGraph: {
    title: "12% VAT on Imports in the Philippines Explained",
    description: "How the 12% VAT on imports in the Philippines works: it applies only to taxable parcels above the PHP 10,000 de minimis, and is charged on CIF value plus customs duty. See a worked example.",
  },
};

const content = {
  "slug": "vat-on-imports-philippines",
  "tag": "VAT",
  "h1": "The 12% VAT on Imports in the Philippines, Explained",
  "intro": "Philippine import VAT is 12%, but it is not charged on your item price alone — it is added on top of your shipping, insurance, and any customs duty. Here is exactly how the 12% VAT on imports in the Philippines is calculated and when it actually applies.",
  "breadcrumbName": "VAT on Imports",
  "shareTitle": "12% VAT on Imports in the Philippines: How It Works",
  "sections": [
    {
      "h2": "What the 12% import VAT is charged on",
      "paragraphs": [
        "VAT (value-added tax) on imports is a flat 12%, but the surprise for most shoppers is the base it applies to. It is not 12% of your item price. The 12% is charged on the CIF value plus any customs duty.",
        "CIF value means the cost of the goods plus insurance plus freight (shipping), all converted to Philippine pesos. So your shipping cost is taxed too. If customs duty applies to your parcel, that duty amount is added to the CIF value first, and the 12% VAT is then calculated on that combined figure."
      ],
      "bullets": [
        "CIF value = item cost + insurance + freight (shipping), in PHP",
        "Customs duty = the duty rate for your product applied to the CIF value",
        "12% VAT = 12% of (CIF value + customs duty)"
      ]
    },
    {
      "h2": "When the 12% VAT actually applies",
      "paragraphs": [
        "VAT is only charged on taxable shipments. If your order qualifies for the de minimis exemption, you pay neither customs duty nor the 12% VAT.",
        "The de minimis threshold is PHP 10,000, measured against the FOB value — the price of the goods alone, excluding shipping and insurance, converted to pesos. If that goods value is at or below PHP 10,000, the parcel is exempt from both duty and VAT. Above PHP 10,000, the shipment becomes taxable and the 12% VAT (plus any duty) is assessed."
      ],
      "callout": "Watch the consolidation rule: multiple parcels going to the same recipient and address that arrive the same day may be combined by the Bureau of Customs. If the combined goods value exceeds PHP 10,000, the exemption is lost and VAT applies to the lot."
    },
    {
      "h2": "How to compute the VAT, step by step",
      "paragraphs": [
        "The order matters, because VAT sits last in the stack and is charged on everything before it.",
        "Follow these four steps to land on the figure you will be billed."
      ],
      "bullets": [
        "Step 1 — Compare the FOB goods value to PHP 10,000. At or below, you are exempt and there is no VAT.",
        "Step 2 — If above, compute customs duty: duty rate for your product x CIF value.",
        "Step 3 — Compute VAT: 12% x (CIF value + customs duty).",
        "Step 4 — Landed cost = CIF value + customs duty + VAT."
      ]
    },
    {
      "h2": "Worked example (electronics)",
      "paragraphs": [
        "Say you buy a gadget priced at PHP 20,000 with PHP 2,000 shipping and no separate insurance. The goods value (PHP 20,000) is above PHP 10,000, so the parcel is taxable.",
        "CIF value = 20,000 + 2,000 = PHP 22,000. Using a representative electronics duty rate of 10% (an estimate — many electronics such as smartphones and laptops are actually 0% under the WTO Information Technology Agreement), customs duty = 10% x 22,000 = PHP 2,200. VAT = 12% x (22,000 + 2,200) = 12% x 24,200 = PHP 2,904. Landed cost = 22,000 + 2,200 + 2,904 = PHP 27,104.",
        "Notice the VAT (PHP 2,904) is calculated on the CIF plus the duty, not on the item price alone — which is why the final bill is higher than a quick 12% of the sticker price would suggest. Duty rates are estimates only; the real rate depends on the product's 8-digit HS/AHTN code."
      ]
    },
    {
      "h2": "Import VAT is separate from seller-collected fees",
      "paragraphs": [
        "The 12% import VAT is a government tax assessed by the Bureau of Customs. It is not the same as fees a seller or platform may add at checkout.",
        "Some platforms collect estimated taxes upfront (delivered duty paid), in which case nothing is owed on arrival. Others leave it unpaid, and your courier (DHL, FedEx, UPS, LBC) advances the duty and VAT to customs then bills you, while PHLPOST collects at the post office. Even exempt parcels may carry a small courier processing or handling fee, which is a service charge, not VAT."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is the 12% VAT charged on my item price or on the shipping too?",
      "a": "On both, and more. The 12% VAT is charged on the CIF value — your item cost plus insurance plus shipping, in pesos — plus any customs duty. So shipping and duty are both inside the VAT base, not just the item price."
    },
    {
      "q": "Do I always pay 12% VAT on imports to the Philippines?",
      "a": "No. VAT only applies to taxable shipments. If the goods value (FOB, excluding shipping and insurance) is at or below the PHP 10,000 de minimis threshold, the parcel is exempt from both customs duty and the 12% VAT."
    },
    {
      "q": "How do I calculate the import VAT myself?",
      "a": "First check if the goods value is above PHP 10,000. If it is, compute customs duty as the duty rate x CIF value, then VAT as 12% x (CIF value + duty). Your landed cost is CIF + duty + VAT."
    },
    {
      "q": "Is the import VAT the same as the fee my courier or the seller charges?",
      "a": "No. The 12% VAT is a government tax collected by the Bureau of Customs. Courier handling fees and any seller checkout charges are separate. Couriers like DHL, FedEx, UPS, and LBC advance the duty and VAT then bill you, while PHLPOST collects at the post office; even exempt parcels can carry a small courier processing fee."
    },
    {
      "q": "If I split one order into several small parcels, can I avoid VAT?",
      "a": "Not reliably. Multiple parcels sent to the same recipient and address that arrive on the same day may be consolidated by the Bureau of Customs. If their combined goods value exceeds PHP 10,000, the exemption is lost and 12% VAT applies."
    }
  ],
  "related": [
    {
      "href": "/guides/de-minimis-philippines",
      "label": "The PHP 10,000 de minimis threshold explained"
    },
    {
      "href": "/guides/how-to-compute-import-tax-philippines",
      "label": "How to compute import tax in the Philippines"
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
