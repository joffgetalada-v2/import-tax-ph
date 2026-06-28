import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/import-tax-on-phones-philippines' },
  title: "Import Tax on Phones in the Philippines (2026)",
  description: "How much is import tax on phones in the Philippines? Orders with a goods value at or under PHP 10,000 are exempt; above that you pay duty plus 12% VAT. Full guide here.",
  openGraph: {
    title: "Import Tax on Phones in the Philippines (2026)",
    description: "How much is import tax on phones in the Philippines? Orders with a goods value at or under PHP 10,000 are exempt; above that you pay duty plus 12% VAT. Full guide here.",
  },
};

const content = {
  "slug": "import-tax-on-phones-philippines",
  "tag": "Category",
  "h1": "Import Tax on Phones in the Philippines",
  "intro": "Buying a smartphone from abroad? Here's how Philippine import tax works on phones — including the good news that many smartphones are duty-free, when the 12% VAT still applies, and how to check before you order.",
  "breadcrumbName": "Phones",
  "shareTitle": "Import Tax on Phones in the Philippines",
  "sections": [
    {
      "h2": "How import tax on phones works",
      "paragraphs": [
        "Whether you pay anything depends first on the value of the goods alone — the phone's price, before shipping and insurance, converted to pesos. This is the FOB value. If your shipment's FOB value is at or below PHP 10,000, it qualifies for the de minimis exemption and is free of both customs duty and the 12% VAT.",
        "If the FOB value is above PHP 10,000, the shipment becomes taxable. Customs duty (when it applies) is charged on the CIF value — the item cost plus insurance plus freight — and then 12% VAT is added on top of (CIF + duty).",
        "The catch for phones is that the duty rate is not a flat number. It depends on the item's exact 8-digit HS/AHTN tariff code, so the only way to be certain is to verify that code for your specific device."
      ],
      "bullets": [
        "Smartphones: many are 0% duty under the WTO Information Technology Agreement (ITA), so often the only charge is 12% VAT when the value is above PHP 10,000.",
        "Other phone-related electronics (cases, power banks, smartwatches, accessories) commonly fall under the ~10% representative electronics rate — but verify the HS code.",
        "12% VAT still applies to taxable shipments even when the duty rate is 0%."
      ]
    },
    {
      "h2": "Are phones really duty-free?",
      "paragraphs": [
        "Often, yes — for the phone handset itself. Under the WTO Information Technology Agreement, many smartphones and similar IT products carry a 0% customs duty rate. That means if your order is above the PHP 10,000 de minimis, you may still owe no duty at all — only the 12% VAT on the landed value.",
        "But 0% is not automatic for everything in the box. Accessories, chargers, smartwatches, and certain other electronics can classify differently and may carry duty (the representative electronics rate is about 10%). The duty rate is set by the precise HS/AHTN code, so always confirm the classification for what you are actually importing."
      ],
      "callout": "Verify-note: Whether your phone is 0% or carries duty comes down to its exact 8-digit HS/AHTN tariff code. Check the Tariff Commission's tariff finder for your specific model before assuming it's duty-free."
    },
    {
      "h2": "Worked example: a taxable gadget at 10%",
      "paragraphs": [
        "Suppose you order a phone-related electronic device with a goods (FOB) value of PHP 25,000, plus PHP 1,500 in shipping and insurance. Because the FOB value is above PHP 10,000, the shipment is taxable. We'll use the representative electronics duty rate of 10% for this example.",
        "First, CIF = item + insurance + freight = 25,000 + 1,500 = PHP 26,500. Duty = 10% x 26,500 = PHP 2,650. VAT = 12% x (26,500 + 2,650) = 12% x 29,150 = PHP 3,498. Landed cost = 26,500 + 2,650 + 3,498 = PHP 32,648.",
        "If the same device were classified at 0% duty (as many smartphones are), you would skip the duty step: VAT = 12% x 26,500 = PHP 3,180, for a landed cost of PHP 29,680."
      ],
      "callout": "The duty rate used here (10% electronics) is a representative estimate, not an official figure. Your actual rate depends on the device's HS/AHTN code."
    },
    {
      "h2": "Watch the de minimis and the same-day rule",
      "paragraphs": [
        "The PHP 10,000 threshold is measured against the goods value only — not the shipping or insurance. So a phone priced under PHP 10,000 can still slip in exempt even when freight is added later for the tax math.",
        "Be careful when you buy several items at once. Under CAO 02-2025, multiple parcels going to the same recipient and address on the same day can be combined by the Bureau of Customs. If the combined FOB value crosses PHP 10,000, the exemption is lost for the lot."
      ],
      "bullets": [
        "De minimis is judged on FOB (goods price), excluding shipping and insurance.",
        "Same-day parcels to one address may be aggregated — splitting an order doesn't reliably dodge the threshold.",
        "Even exempt parcels may carry a small courier processing or handling fee."
      ]
    },
    {
      "h2": "Permits, fees, and who collects the tax",
      "paragraphs": [
        "Some radio-enabled devices may need clearance from the National Telecommunications Commission (NTC). This is separate from duty and VAT and can add time to clearance, so factor it in if you are importing radio or wireless equipment beyond an ordinary consumer phone.",
        "When tax is due, couriers like DHL, FedEx, UPS, and LBC usually advance the duties and VAT and then bill you; for postal items, PHLPOST collects at the post office when you claim the parcel. Either way, expect to settle the charges before your phone is released."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Do I pay import tax on a phone under PHP 10,000?",
      "a": "No. If the goods (FOB) value of the shipment — the phone's price alone, before shipping and insurance, converted to pesos — is at or below PHP 10,000, it qualifies for the de minimis exemption and is free of both customs duty and the 12% VAT. You may still see a small courier processing fee."
    },
    {
      "q": "Are smartphones duty-free in the Philippines?",
      "a": "Many smartphones carry a 0% customs duty rate under the WTO Information Technology Agreement, so often no duty applies. However, if the shipment's value is above PHP 10,000, the 12% VAT still applies even when duty is 0%. The duty rate ultimately depends on the device's exact HS/AHTN code, so verify it."
    },
    {
      "q": "How is the tax on an expensive phone calculated?",
      "a": "If the FOB value is above PHP 10,000, duty (when it applies) is charged on the CIF value — item cost plus insurance plus freight. Then 12% VAT is added on (CIF + duty). For a phone at 0% duty, you pay only 12% VAT on the CIF value; the landed cost is CIF plus that VAT."
    },
    {
      "q": "Do phone accessories get taxed differently from the phone?",
      "a": "They can. Accessories like cases, chargers, power banks, and smartwatches may classify under a different HS code than the handset and can carry duty (the representative electronics rate is about 10%), whereas many handsets are 0%. Confirm the classification for each item."
    },
    {
      "q": "Will buying two phones in one order increase my tax?",
      "a": "Possibly. The PHP 10,000 de minimis applies per shipment by FOB value, and under CAO 02-2025 multiple parcels to the same recipient and address arriving the same day can be combined. If the combined goods value exceeds PHP 10,000, the exemption is lost."
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
