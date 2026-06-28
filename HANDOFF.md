# HANDOFF — actions that cannot be done from code

These require the Vercel dashboard, Google/Bing tools, or a human decision.

## Phase 0 — restore the site (DONE in code, needs your confirmation)
- [ ] **Verify the Preview deployment** for branch `fix/recovery-and-seo` in the Vercel
      dashboard (Deployments tab) renders the homepage (no "This page isn't working").
      The `vercel` CLI is not installed in the dev environment, so this can't be
      auto-verified from code.
- [ ] **Merge `fix/recovery-and-seo` → `main`** to deploy the fix to production
      (or approve me doing it). The root cause was a redirect loop; fix is verified locally.

## Phase 1 — domain canonicalization (dashboard side)
- [ ] In Vercel → Project → Domains: change the **`www.importtaxph.com` redirect from
      307 Temporary → 308 Permanent**. (The `import-tax-ph.vercel.app` → apex redirect is
      already 301, which is fine.) Apex `importtaxph.com` stays the canonical production domain.

## Phase 1 — Search Console (see SEARCH_CONSOLE_CHECKLIST.md)
- [ ] Verify Google Search Console + Bing Webmaster Tools, submit the sitemap, request indexing.
