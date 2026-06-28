# SEARCH CONSOLE & INDEXING CHECKLIST (human)

Code-side crawlability is done (Phase 1). These steps require dashboards/accounts and
cannot be done from the repo.

## 1. Vercel domain redirect (do this first)
- [ ] Vercel → Project → Settings → Domains: change the **`www.importtaxph.com`
      redirect from 307 Temporary → 308 Permanent**. Apex `importtaxph.com` stays the
      canonical Production domain. (`import-tax-ph.vercel.app` → apex is already 301 = fine.)
- Why: 308 is a permanent redirect Google passes signals through; 307 is temporary and
  keeps both hosts "live" in Google's eyes.

## 2. Google Search Console
- [ ] Add/verify the property for **`https://importtaxph.com`** (Domain property preferred —
      verifies all hosts/protocols via one DNS TXT record).
- [ ] Submit the sitemap: `https://importtaxph.com/sitemap.xml`
- [ ] URL Inspection → "Request Indexing" for the key URLs:
      - `https://importtaxph.com/`
      - `https://importtaxph.com/temu-import-tax`
      - `https://importtaxph.com/shein-import-tax`
      - `https://importtaxph.com/aliexpress-import-tax`
      - `https://importtaxph.com/lazada-import-tax`
      - `https://importtaxph.com/shopee-import-tax`
      - `https://importtaxph.com/balikbayan-box`
      - `https://importtaxph.com/how-it-works`
      - `https://importtaxph.com/guides`
- [ ] Watch **Pages (Index coverage)** report. It states explicitly if a URL is
      "Excluded by 'noindex' tag" or "Crawled – currently not indexed". There is NO noindex
      in the code, so any such message would point to a host/redirect or dashboard issue.

## 3. Bing Webmaster Tools
- [ ] Add `https://importtaxph.com`, import from GSC (one click), submit the same sitemap.

## 4. After indexing starts
- [ ] Confirm Google shows the **apex** URLs (not www, not *.vercel.app) in `site:importtaxph.com`.
- [ ] Check Rich Results Test for the structured data (WebApplication / FAQPage / BreadcrumbList).
