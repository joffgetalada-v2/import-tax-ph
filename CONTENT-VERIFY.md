# CONTENT-VERIFY — figures used in Phase 3 content

Every numeric/factual figure used in the new Phase 3 pages, with its status. Phase 3 content
reuses ONLY facts already established and published on the site; nothing new was invented.

## Established & sourced — no action needed
- **₱10,000 de minimis**, measured on the **FOB** goods value (excludes shipping/insurance);
  at or below = exempt from duty AND 12% VAT. Source: CMTA (RA 10863) §423; CAO No. 02-2025
  (effective 2025-05-07).
- **12% VAT**, applied to (CIF + duty). Source: National Internal Revenue Code.
- **CIF** = item cost + insurance + freight; duty (when taxable) is charged on CIF.
- **Same-day consolidation rule** (CAO 02-2025).
- FDA clearance (cosmetics/supplements/food) and NTC clearance (some radio/electronic devices).

## Representative duty rates — already in `lib/rates.ts`; re-verify periodically
These are the SAME representative estimates already published on the site (rates-sources page +
calculator). Each new page states they are estimates and links to the Tariff Commission finder.
Verify against https://finder.tariffcommission.gov.ph for the exact 8-digit HS/AHTN code.

| Rate | Used on | Status |
|------|---------|--------|
| Electronics 10% (many 0% under WTO ITA) | phones guide; vat guide example | representative (in lib/rates.ts) |
| Clothing/apparel 15% | compute & de-minimis guide examples | representative (in lib/rates.ts) |
| Footwear 15% | shoes guide | representative (in lib/rates.ts) |
| Bags & accessories 15% | bags guide | representative (in lib/rates.ts) |
| Cosmetics 10% | cosmetics guide | representative (in lib/rates.ts) |

## ⚠️ TODO-VERIFY — confirm before relying / before adding specifics
1. **Car parts / automotive duty rate** — the `/guides/import-tax-on-car-parts-philippines`
   page deliberately does **not** state a specific car-parts duty %. Automotive parts span many
   HS headings with widely varying (often higher) rates. If you want concrete numbers on that
   page, verify the specific HS-code rates first.
2. **Balikbayan exemption specifics (₱150,000, up to 3× per calendar year)** — these CMTA
   statutory figures appear in the `/balikbayan-box` page **meta description** (added earlier).
   The new balikbayan FAQ keeps them qualitative ("a statutory value, a set number of times")
   to be safe. Confirm the current figures with the Bureau of Customs, then decide whether to
   restate the specific numbers in the balikbayan copy.

## Worked-example inputs (illustrative only — not claims)
Order values in worked examples (e.g. ₱12,000 / ₱15,000 / ₱20,000 orders, ₱1,000–₱2,000
shipping) are hypothetical inputs chosen to demonstrate the math. The computed duty/VAT/landed
figures follow arithmetically from the established rates and were each checked by hand.
