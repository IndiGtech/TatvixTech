# Tatvix Website — SEO / GEO (AI Search) Improvement Plan

> Review document. **No code is being changed yet.** Companion file: `UI_IMPROVEMENT_PLAN.md`.
> Applies the **ai-seo** skill (Structure → Authority → Presence) plus **nextjs-app-router-patterns**
> for the page/metadata implementation. Note: a separate `SEO_IMPLEMENTATION_GUIDE.md` already exists;
> this file is the *action plan* for the gaps found in audit.

## Context

Several SEO outputs are currently broken or publishing fake data, and the site does little to be
*cited* by AI engines (ChatGPT, Perplexity, Claude, Google AI Overviews):

- **Sitemap advertises 9 URLs that 404** (`src/app/sitemap.ts`): `/about`, `/contact`,
  `/services/embedded-hardware-design`, `/services/firmware-development`, `/services/iot-development`,
  `/services/pcb-design`, `/industries/medical-devices`, `/industries/industrial-iot`,
  `/industries/consumer-electronics`. None of these routes exist. The live services page even uses
  **anchor links** (`/services#hardware-design`) whose slugs don't match the sitemap.
- **Structured data ships placeholder/fake business info** (`src/lib/site.ts`,
  `src/components/StructuredData.tsx`): `+1-XXX-XXX-XXXX`, "Your Business Address", New York geo coords
  (`40.7128 / -74.0060`), US-only `areaServed`. Google penalizes fake LocalBusiness data.
- **JSON-LD is injected with `next/script strategy="afterInteractive"`** — it's not in the initial
  server HTML, so crawlers/AI bots that don't execute JS may miss it.
- **Broken schema asset refs**: Organization schema points at `/logo.png` and `/og-image.jpg` which
  don't exist (`services/page.tsx` also references a missing `/services-og.jpg`). The `WebSite` schema
  declares a `SearchAction` for a `/search` route that doesn't exist and is disallowed in robots.
- **No AI-search presence layer**: no `llms.txt`, no machine-readable capability/engagement file,
  blog authored as `Organization` (weak E-E-A-T), and key pages lack extractable answer/FAQ blocks.
- **robots** doesn't explicitly allow AI crawlers, and `*.json$` disallow accidentally blocks
  `manifest.json`.

Confirmed scope: **India HQ serving a global market**, and we will **build the missing
service/industry landing pages** (not just trim the sitemap).

---

## Pillar 1 — Structure (make content extractable)

### 1.1 Build real landing pages — `services/[slug]` + `industries/[slug]`
- Extract the in-component `serviceDetails` array out of
  `src/app/services/ServiceClientWrapper.tsx` into `src/data/services.ts`; create `src/data/industries.ts`.
  Add per item: `slug`, `seoTitle`, `metaDescription`, a 40–60 word **definition block**, FAQ items,
  key stats. Reuse existing fields (processSteps, deliverables, technologies, timeline).
- Create `src/app/services/[slug]/page.tsx` and `src/app/industries/[slug]/page.tsx` as **server,
  statically-generated** pages (mirror `src/app/insights/[slug]/page.tsx`):
  - `generateStaticParams()` + `generateMetadata()` (canonical, OG, keywords).
  - GEO content order (ai-seo content-patterns): H1 = service/industry → **definition block** →
    numbered **how-we-deliver** steps → **comparison/spec table** → **FAQ block** → CTA.
- Update the `/services` overview cards to link to `[slug]` pages instead of `#anchors`.

### 1.2 Render JSON-LD in SSR HTML — `src/components/StructuredData.tsx`
- Switch from `next/script` (`afterInteractive`) to a plain inline
  `<script type="application/ld+json" dangerouslySetInnerHTML=...>` so structured data is in the
  initial HTML and extractable without JS.

### 1.3 Query-shaped headings + FAQ
- Use H2/H3 phrased like real queries ("What is …", "How does … work").
- Keep the homepage FAQ (`src/data/faqData.ts` + FAQ schema) in SSR output after 1.2.

## Pillar 2 — Authority (make content citable)

### 2.1 Fix business/entity data — `src/lib/site.ts` + `StructuredData.tsx`
- Populate `BUSINESS_INFO` from env with **India** defaults (no `XXX` placeholders). Add to
  `.env.local`: `NEXT_PUBLIC_BUSINESS_PHONE`, `_ADDRESS`, `_CITY`, `_STATE`, `_ZIP`,
  `NEXT_PUBLIC_BUSINESS_COUNTRY=IN` — values for you to fill.
- `LocalBusiness`: India `PostalAddress`; remove hardcoded NYC `geo` (or set real coords).
- Add `areaServed: Worldwide` to Organization + Service schemas (currently `getServiceSchema`
  hardcodes United States) to reflect the global market.
- Fix logo ref (`/logo.png` → real asset) and remove the invalid `WebSite` `SearchAction`.

### 2.2 Blog E-E-A-T — `src/components/ArticleJsonLd.tsx`, `BlogLayout.tsx`, `src/data/blogPosts.ts`
- Change Article author from `Organization` → `Person` (name + short bio + `jobTitle`); data already
  carries `post.author`.
- Show a visible **author byline** and **"Last updated: <date>"** (freshness signal — ChatGPT cites
  recently-updated content ~3.2× more, per ai-seo platform notes).
- Add `FAQPage` schema to posts containing Q&A; ensure each post's lead is a self-contained 40–60 word
  answer block.

### 2.3 Stats & sourcing
- Where claims appear (services, industries, blog), prefer specific numbers with sources/dates over
  generic marketing language (ai-seo: citations +40%, statistics +37%).

## Pillar 3 — Presence (be where AI looks)

### 3.1 Allow AI crawlers — `src/app/robots.ts`
- Add allow rules for `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`,
  `Google-Extended` (a blocked bot cannot cite you).
- Remove `*.json$` disallow (it blocks `manifest.json`); drop `crawlDelay` (ignored by Google);
  optionally block training-only `CCBot`.

### 3.2 Machine-readable files (in `public/`)
- `public/llms.txt` — site overview, who it's for, links to key pages.
- `public/services.md` — capabilities + **engagement model + how to get a quote** (Tatvix is custom
  engineering, not list-priced), so AI buying-agents can represent it. (Replaces a `/pricing.md`.)

### 3.3 Open Graph image — dynamic
- Add `src/app/opengraph-image.tsx` using `next/og` `ImageResponse` (branded, always exists), fixing
  the broken `/og-image.jpg` across all shares; add per-route OG for `/services`, `/industries`, and
  `insights/[slug]` afterward. This also retires the missing `/services-og.jpg` reference.

## Sitemap correctness — `src/app/sitemap.ts`
- Generate service/industry/blog URLs from the data modules (single source of truth, matching slugs).
- Remove `/about` and `/contact` (no such routes) — the homepage `#about` + contact modal cover these.

---

## Files

**Create:** `src/app/services/[slug]/page.tsx`, `src/app/industries/[slug]/page.tsx`,
`src/data/services.ts`, `src/data/industries.ts`, `public/llms.txt`, `public/services.md`,
`src/app/opengraph-image.tsx`.
**Modify:** `src/lib/site.ts`, `src/components/StructuredData.tsx`, `src/app/sitemap.ts`,
`src/app/robots.ts`, `src/components/ArticleJsonLd.tsx`, `src/components/BlogLayout.tsx`,
`src/app/services/ServiceClientWrapper.tsx`, `src/app/services/page.tsx`, `.env.local`.

## Verification

1. `npm run build` — new `[slug]` pages statically generate; sitemap contains only real routes.
2. `npm run dev`:
   - View source on `/`, a `/services/<slug>`, and an insight → `application/ld+json` present in
     **initial HTML**.
   - `/sitemap.xml` → every URL returns 200 (no 404s).
   - Validate schema (Google Rich Results / Schema.org): Organization, LocalBusiness, Service,
     FAQPage, Article — no placeholder data, no invalid SearchAction.
   - `/robots.txt` allows AI bots; `/llms.txt`, `/services.md`, OG image resolve.
3. Manual AI-visibility spot check (DIY, per ai-seo): run 5–10 key queries
   ("embedded systems development company India", "IoT product development firm", etc.) through
   ChatGPT / Perplexity / Google before and after; log citations monthly.

## Out of scope (deferred)

- Off-site presence (Wikipedia, Reddit, review sites, LinkedIn/GitHub), monitoring-tool setup,
  and the OKF bundle — recommended follow-ups once on-site work lands.
- Real address/phone values — you provide; the plan wires env + schema to accept them.
