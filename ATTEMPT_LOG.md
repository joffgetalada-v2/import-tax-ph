# ATTEMPT_LOG

Loop Engineering Method — one row per attempt: `phase | hypothesis | change made | verify result`.

## Phase 0 — Emergency: restore the site

| # | phase | hypothesis | change made | verify result |
|---|-------|-----------|-------------|---------------|
| 1 | P0 | `next.config.ts` `redirects()` sends apex→www while Vercel dashboard sends www→apex, creating an infinite redirect loop (ERR_TOO_MANY_REDIRECTS = "This page isn't working"). Introduced in commit c6cdbbf. | Removed the `redirects()` block from `next.config.ts` so apex is served directly (host canonicalization stays at the Vercel dashboard level, per the recovery brief). | **PASS** — `npm run build` exit 0; `curl /` → 200 with marker "Philippine Import Tax Calculator"; no `Location`/3xx header (loop gone); 5 sampled routes all 200; `/sitemap.xml` 200 w/ 18 urls; `/robots.txt` 200; no `noindex` on `/`. |

### Notes / ruled out
- Build was NOT failing: the redirect config is syntactically valid, so the deploy succeeded and broke only at runtime. Symptom (redirect loop page, not a 500/404) matches a host-level redirect conflict, not a build/import/env error.
- `vercel` CLI not installed → cannot read deploy logs or test the per-deployment URL from here. Production verification handed off (see HANDOFF.md).
