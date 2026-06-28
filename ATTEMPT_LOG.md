# ATTEMPT_LOG

Loop Engineering Method — one row per attempt: `phase | hypothesis | change made | verify result`.

## Phase 0 — Emergency: restore the site

| # | phase | hypothesis | change made | verify result |
|---|-------|-----------|-------------|---------------|
| 1 | P0 | `next.config.ts` `redirects()` sends apex→www while Vercel dashboard sends www→apex, creating an infinite redirect loop (ERR_TOO_MANY_REDIRECTS = "This page isn't working"). Introduced in commit c6cdbbf. | Removed the `redirects()` block from `next.config.ts` so apex is served directly (host canonicalization stays at the Vercel dashboard level, per the recovery brief). | **PASS** — `npm run build` exit 0; `curl /` → 200 with marker "Philippine Import Tax Calculator"; no `Location`/3xx header (loop gone); 5 sampled routes all 200; `/sitemap.xml` 200 w/ 18 urls; `/robots.txt` 200; no `noindex` on `/`. |

### Notes / ruled out
- Build was NOT failing: the redirect config is syntactically valid, so the deploy succeeded and broke only at runtime. Symptom (redirect loop page, not a 500/404) matches a host-level redirect conflict, not a build/import/env error.
- `vercel` CLI not installed → cannot read deploy logs or test the per-deployment URL from here. Production verification handed off (see HANDOFF.md).
- Merged to `main` (commit 2428c29, fast-forward) per user authorization to restore production.

## Phase 1 — P0: crawlable & indexable

| # | phase | hypothesis | change made | verify result |
|---|-------|-----------|-------------|---------------|
| 1 | P1 | Canonical signals pointed at `www.importtaxph.com` (19 files from commit c6cdbbf), but the canonical production host is the apex `importtaxph.com` — wrong-host canonicals split signals / waste crawl budget. No `noindex` or `Disallow:/` present (confirmed). | Bulk-reverted all 19 files `www.importtaxph.com` → `importtaxph.com` (metadataBase, JSON-LD url/item, sitemap BASE_URL, robots sitemap, ShareButtons). Added `alternates: { canonical }` to root layout (`/`) and an explicit per-route canonical on all 18 routes. | **PASS** — build exit 0; 0 www refs remain; sampled canonicals resolve to apex (`/`→`https://importtaxph.com`, per-route→apex path); `/robots.txt` Sitemap=apex, Allow:/ (no Disallow:/); `/sitemap.xml` 200, 18 `<loc>` all apex; no `noindex` on `/`. |

### Notes
- Host redirect (apex↔www) intentionally NOT in code — handled at Vercel dashboard. Dashboard 307→308 change for `www` is a human handoff (HANDOFF.md / SEARCH_CONSOLE_CHECKLIST.md).
- Merged to `main` (commit 409a86f, fast-forward) per user authorization.

## Phase 2 — P1: on-page technical SEO

| # | phase | hypothesis / finding | change made | verify result |
|---|-------|----------------------|-------------|---------------|
| 1 | P2 | Audit: all 18 pages have exactly one `<h1>` (✓); titles/descriptions unique (✓); but 6 marketplace pages had stale `og:title`/`og:description` from the f8240cb title rewrite, and about/disclaimer/privacy had NO JSON-LD. Marketplace pages have no visible FAQ → FAQPage schema there would violate Google policy (deferred to Phase 3 content). | Synced `og:title`+`og:description` to the corrected meta on all 6 marketplace pages; synced their `ShareButtons` titles. Added `BreadcrumbList` JSON-LD to about/disclaimer/privacy. | **PASS** — build exit 0; og:title == meta title on all 6 marketplace pages; twitter:card/title/description emit; og:image (1200px PNG) present; BreadcrumbList now on about/disclaimer/privacy. |
| 2 | P2 | Lighthouse target: SEO=100, Perf≥90 (mobile), A11y≥95. | Ran `npx lighthouse` on `/` (headless Chrome). | **PASS** — Performance 96, Accessibility 97, Best-Practices 96, **SEO 100**. (Chrome ran; trailing EPERM was only a temp-dir cleanup error after the report was written.) |

### Notes
- Structured-data coverage now: WebApplication on home + 6 marketplace; FAQPage on home + 2 guides (where visible FAQs exist); HowTo on how-it-works; BreadcrumbList on every route; ContactPage on contact; Article on the 2 guides.
- FAQ sections (visible Q&A + FAQPage schema) for the 6 marketplace pages deferred to Phase 3 (content), to keep schema tied to visible content per Google policy.
