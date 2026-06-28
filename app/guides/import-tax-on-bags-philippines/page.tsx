import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

export const metadata: Metadata = {
  alternates: { canonical: '/guides/import-tax-on-bags-philippines' },
  title: "Import Tax on Bags in the Philippines: Duty & VAT",
  description: "How much import tax on bags in the Philippines? Bags under PHP 10,000 (goods value) are exempt; above that you pay duty on CIF plus 12% VAT. See a worked example.",
  openGraph: {
    title: "Import Tax on Bags in the Philippines: Duty & VAT",
    description: "How much import tax on bags in the Philippines? Bags under PHP 10,000 (goods value) are exempt; above that you pay duty on CIF plus 12% VAT. See a worked example.",
  },
};

const content = {
  "slug": "import-tax-on-bags-philippines",
  "tag": "Category",
  "h1": "Import tax on bags in the Philippines: duty, VAT, and de minimis explained",
  "intro": "Buying a bag from abroad and wondering what customs will charge? Here is how import tax on bags in the Philippines works, from the PHP 10,000 de minimis threshold to the duty and 12% VAT you owe once a bag goes over it.",
  "breadcrumbName": "Bags",
  "shareTitle": "Import Tax on Bags in the Philippines: Duty & VAT Guide",
  "sections": [
    {
      "h2": "Is your bag below the PHP 10,000 de minimis?",
      "paragraphs": [
        "The first thing customs checks is the de minimis threshold. If the FOB value of your bag — the price of the goods alone, before shipping and insurance, converted to pesos — is PHP 10,000 or less, the parcel is exempt from both customs duty and the 12% VAT.",
        "Affordable bags and small accessories often slip in under this limit. But mid-range and luxury handbags, designer totes, and branded leather goods easily exceed PHP 10,000 in goods value on their own, which means they become taxable."
      ],
      "callout": "Only the goods value counts toward the PHP 10,000 limit. Shipping and insurance are NOT added when checking de minimis — but they ARE added later when computing the duty."
    },
    {
      "h2": "How duty and VAT are computed on bags",
      "paragraphs": [
        "Once a bag is over the threshold, the math runs in a set order. Bags and accessories carry a representative duty rate of around 15%, though the exact rate depends on the material and the bag's 8-digit tariff classification, so treat 15% as an estimate and verify your specific item.",
        "The steps are: (1) compare the FOB goods value to PHP 10,000; (2) if above, customs duty = duty rate x CIF value, where CIF is item cost + insurance + freight in pesos; (3) VAT = 12% x (CIF + duty); (4) your landed cost = CIF + duty + VAT."
      ],
      "bullets": [
        "FOB value = price of the bag alone (used only for the PHP 10,000 de minimis check).",
        "CIF value = bag price + shipping + insurance (the base for duty).",
        "Duty = ~15% x CIF (representative rate for bags; may vary by material).",
        "VAT = 12% x (CIF + duty).",
        "Landed cost = CIF + duty + VAT."
      ]
    },
    {
      "h2": "Worked example: a PHP 12,000 bag",
      "paragraphs": [
        "Say you order a bag priced at PHP 12,000 with PHP 1,500 shipping and no separate insurance. Because the FOB goods value (PHP 12,000) is above PHP 10,000, the parcel is taxable.",
        "CIF value = 12,000 + 1,500 = PHP 13,500. Duty at the representative 15% = PHP 2,025. VAT = 12% x (13,500 + 2,025) = PHP 1,863. Your total landed cost = 13,500 + 2,025 + 1,863 = PHP 17,388.",
        "If that same bag had cost PHP 9,500 in goods value, it would have fallen under the PHP 10,000 de minimis and arrived free of duty and VAT — though a courier may still charge a small handling fee."
      ]
    },
    {
      "h2": "Watch out for combined parcels and high-value finds",
      "paragraphs": [
        "If you order several bags or accessories that arrive at the same address on the same day, the Bureau of Customs may aggregate them. If the combined FOB value crosses PHP 10,000, the exemption is lost for the lot — so splitting a big order into many small parcels does not reliably dodge the tax.",
        "Couriers like DHL, FedEx, UPS, and LBC advance the duties and bill you on delivery, while PHLPOST collects at the post office when you claim a postal parcel. Run the numbers before you check out so the bill is never a surprise."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Do I pay import tax on a bag under PHP 10,000?",
      "a": "No. If the bag's FOB goods value — the price alone, before shipping and insurance — is PHP 10,000 or less, it is exempt from both customs duty and the 12% VAT. A courier may still charge a small processing or handling fee even on an exempt parcel."
    },
    {
      "q": "What duty rate applies to imported bags in the Philippines?",
      "a": "Bags and accessories carry a representative duty rate of about 15%, but this is only an estimate. The real rate depends on the material and the bag's 8-digit tariff (HS/AHTN) classification, so confirm the exact rate for your specific item before relying on it."
    },
    {
      "q": "How is the tax calculated on a bag that costs more than PHP 10,000?",
      "a": "Customs duty is the duty rate (about 15% for bags) multiplied by the CIF value, which is the bag price plus shipping plus insurance in pesos. Then VAT is 12% of (CIF + duty). Your landed cost is CIF + duty + VAT."
    },
    {
      "q": "Is shipping included when checking the PHP 10,000 limit?",
      "a": "No. Only the goods value (FOB) is compared to the PHP 10,000 de minimis threshold; shipping and insurance are excluded for that check. However, shipping and insurance ARE added to form the CIF value once the bag is taxable and duty is computed."
    },
    {
      "q": "Will buying two bags in separate parcels avoid the tax?",
      "a": "Not reliably. If multiple parcels go to the same recipient and address and arrive on the same day, the Bureau of Customs may aggregate them. If the combined FOB value exceeds PHP 10,000, the de minimis exemption is lost."
    }
  ],
  "related": [
    {
      "href": "/guides/de-minimis-philippines",
      "label": "The PHP 10,000 de minimis rule explained"
    },
    {
      "href": "/guides/import-tax-on-shoes-philippines",
      "label": "Import tax on shoes in the Philippines"
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
