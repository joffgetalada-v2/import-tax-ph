# import-tax-ph — Project Build Brief

> Hand this brief to Claude Code. Build the project exactly as specified.
> Start in **Plan mode**: propose a file structure and plan first, then implement.

---

## 1. What we're building

**ImportTax.ph** — a free, fast web tool that estimates Philippine customs **duties + VAT (import landed cost)** on international online purchases and shipments.

**Who it's for:** Filipino online shoppers (Temu, Shein, AliExpress, Amazon), balikbayan-box senders, and small importers who want to know *"how much will customs charge me?"* before they buy or ship.

**Business context:** free to use; monetized later via display ads and package-forwarding/courier affiliate links. It must be **low-maintenance** — essentially a static, client-side tool that only needs occasional rate updates.

---

## 2. Quality bar (read this carefully)

- The UI must look **professional, modern, and trustworthy** — a fintech-grade calculator, **not** a generic or basic layout. Avoid default-Tailwind-blue-everywhere and clichéd AI gradients.
- **Use the `frontend-design` skill** to drive a distinctive, production-grade interface. **Install and use any other skills needed** for this project.
- **Mobile-first** — most Filipino users are on phones; design for a 360px viewport first, then scale up.
- Fast, accessible (WCAG AA), with tasteful micro-interactions and no jank.

---

## 3. Technical constraints

- Stack is already scaffolded: **Next.js (App Router) + TypeScript + Tailwind CSS**. Keep it.
- **100% client-side calculation.** No backend, no database, no API routes, no server-only dependencies. This keeps hosting free and maintenance near-zero on Vercel.
- **All tax rates, thresholds, and exchange rates live in ONE editable config file**, e.g. `lib/rates.ts`. This is critical: updating rates each year must be a one-file edit, not a code hunt.
- The core computation must be a **pure, well-commented function** (e.g. `lib/calculateImportTax.ts`) with TypeScript types, kept separate from UI.
- Deploys to **Vercel** and auto-deploys on `git push` to `main`. Don't break the default build.

---

## 4. Core feature — the import tax calculator

### Inputs
- **Item value** (number) + **currency selector** (PHP, USD, and a few common ones). Convert to PHP using an **editable static exchange-rate constant** in `rates.ts` — do NOT call a live FX API (keep it low-maintenance). Let the user optionally override the rate, and show "rate as of [date]".
- **Shipping cost** (optional) and **insurance** (optional) — used for CIF.
- **Product category** (dropdown) → maps to a representative duty rate from the config.
- **Optional toggle / note**: "multiple shipments to the same address arriving the same day" — for the de minimis consolidation rule (see §5).

### Calculation logic (pure function, fully commented)
1. `cifValue = (itemValue + shipping + insurance)` converted to PHP.
2. **De minimis check:** if the dutiable value is **≤ ₱10,000**, the shipment is **EXEMPT** — `duty = 0`, `vat = 0`. Show a clear "Tax-free under the ₱10,000 de minimis threshold" result, plus a note about the consolidation rule.
3. Otherwise:
   - `duty = dutyRate(category) × cifValue`
   - `vatBase = cifValue + duty` (+ excise if applicable)
   - `vat = 0.12 × vatBase`
   - `totalTaxes = duty + vat` (+ excise)
   - `landedCost = cifValue + totalTaxes` (+ optional courier handling fee)

### Output — results breakdown panel
Show a clear, itemized breakdown:
- Dutiable (CIF) value
- Customs duty (display the % used)
- VAT (12%)
- Excise (only if applicable)
- Courier handling fee (optional)
- **Total duties & taxes** (emphasized)
- **Estimated total landed cost** (most emphasized)
- A small **visual breakdown** (e.g. a segmented bar) showing the cost composition.
- **Animated number count-up** when results appear.
- Two distinct visual states: a **"tax-free / exempt" success state** vs the **taxable breakdown state**.

---

## 5. Rate data — STARTING VALUES (must be verified against official sources)

Put these in `lib/rates.ts`, with a header comment:
`// Verify against the official Bureau of Customs & Tariff Commission tariff finder. Last reviewed: 2026-05-30.`

- `DE_MINIMIS_PHP = 10000` — shipments at/below this are exempt from duty AND VAT (CMTA; per CAO No. 02-2025, effective 2025-05-07, based on FOB/FCA value, with a same-day same-recipient consolidation rule).
- `VAT_RATE = 0.12`
- **Duty rates by category** (representative estimates only — the real rate depends on the item's HS/AHTN code; the UI must say so):
  - Electronics / gadgets: `0.10` (many are 0% — note the variance)
  - Clothing / apparel: `0.15`
  - Shoes / footwear: `0.15`
  - Bags / accessories: `0.15`
  - Toys: `0.10`
  - Cosmetics / skincare: `0.10`
  - Books: `0.00`
  - Other / general goods: `0.10`
- `EXCHANGE_RATES = { USD: 57, ... }` — editable, with an "as of [date]" note.
- Optional `COURIER_HANDLING_FEES` constants (e.g. a flat ₱120 example).

> These figures are **starting estimates for guidance**, not authoritative tax data. The app must treat them as editable and carry the disclaimer in §9.

---

## 6. Pages / routes

- `/` **Home** — hero + the calculator as the centerpiece + a short "how it works" + FAQ + disclaimer.
- `/temu-import-tax`, `/shein-import-tax`, `/aliexpress-import-tax`, `/balikbayan-box` — intent landing pages, each embedding the **same** calculator component with tailored copy and examples.
- `/how-it-works` (guide) — explains PH customs computation, the ₱10,000 de minimis, and the CAO 02-2025 consolidation rule, in plain Taglish-friendly English.
- `/about`, `/disclaimer`, `/privacy` — footer pages (a privacy page is required for AdSense later).
- A reusable `<ImportTaxCalculator />` component shared across all pages.

---

## 7. Design / UX requirements (the "not basic" part)

- A distinctive, professional **fintech aesthetic** — think the clarity of Wise/Stripe calculators. Pick a considered, trustworthy palette (e.g. a deep navy or green for trust with one warm accent); strong contrast.
- Strong typographic hierarchy, generous spacing rhythm, clear grouping of inputs.
- The calculator sits in an **elevated, focused card**; results reveal with a smooth transition and number count-up.
- Clear **trust elements**: an "Updated 2026 · per CAO 02-2025" badge, an "Estimate only — not an official BOC computation" note, and a link to the Bureau of Customs.
- **Mobile-first and responsive** (verify at 360px); make the compute button easy to reach on mobile.
- **Accessibility:** real `<label>`s, visible focus rings, keyboard navigation, AA contrast.
- Tasteful micro-interactions only; optional light/dark mode.
- Clean header with an **"ImportTax.ph"** wordmark + a footer with nav and the disclaimer. Simple, clean favicon/wordmark.

---

## 8. SEO & metadata

- Per-page Next.js `metadata` (title + description) targeting transactional intent — e.g. *"How much is import tax on a Temu order in the Philippines? Free customs duty + VAT calculator."*
- Semantic headings (one `<h1>` per page), helpful **original** copy (needed for future AdSense approval — no thin or duplicated content).
- Open Graph tags, a `sitemap.xml`, and `robots.txt`. Do **not** block indexing.

---

## 9. Legal / trust (mandatory)

Display this prominently on every calculator:

> *This is an estimate for guidance only — not an official Bureau of Customs assessment, and not legal or tax advice. Actual duties depend on HS/AHTN classification and BOC valuation. Always verify with the Bureau of Customs.*

Link official sources (Bureau of Customs; Tariff Commission tariff finder) on the guide page.

---

## 10. Build approach (for Claude Code)

1. Start in **Plan mode**: propose the file structure and a step-by-step plan, then implement.
2. Use the **`frontend-design` skill**; install/use any other skills needed.
3. Suggested build order:
   1. Project structure + shared layout, header, footer
   2. `lib/rates.ts` config
   3. Pure `calculateImportTax` function + TypeScript types
   4. `<ImportTaxCalculator />` component with the results breakdown
   5. Home page
   6. Intent landing pages (Temu / Shein / AliExpress / balikbayan)
   7. Guide/FAQ + disclaimer / privacy / about pages
   8. SEO metadata + sitemap + robots
   9. Final polish: responsive + accessibility pass
4. Run the dev server, confirm a clean production build (`npm run build`), then it's ready to commit and push (auto-deploys to Vercel).

Keep everything client-side, keep all rates in the single config file, and keep the UI polished and professional throughout.