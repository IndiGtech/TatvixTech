# Tatvix Website — UI / Performance / Accessibility Improvement Plan

> Review document. **No code is being changed yet.** Companion file: `SEO_IMPROVEMENT_PLAN.md`.
> Applies the **nextjs-app-router-patterns** skill (server-first, `next/dynamic`, `Suspense`,
> file-convention metadata).

## Context

The UI is functionally complete but carries performance and accessibility debt:

- **~60 of 64 components are client components** (`"use client"`), and **Framer Motion is imported in
  41 files** — all loaded eagerly on the homepage. There is **no `next/dynamic` and no `Suspense`
  anywhere** in `src/`, so the full animation payload ships on first paint.
- The **ContactModal** (`src/components/ContactModal.tsx`, 271 lines + motion) has no `role="dialog"`,
  no focus trap, no Escape handling, and no focus-return — and is loaded eagerly even when closed.
- The **contact API** (`src/app/api/contact/route.ts`) does no server-side validation, sanitization,
  or rate limiting, and interpolates raw user input into email HTML and `from`/`subject` headers
  (HTML/header-injection exposure).
- **Missing brand assets**: `favicon.ico`, `favicon.svg`, `apple-touch-icon.png` are referenced in
  `src/app/layout.tsx:104-112` but don't exist.
- Minor: dead import `CertificationBadges` in `src/app/page.tsx:19`; only 19 `aria-label`s across the
  whole app, so icon-only buttons (Navbar, MobileMenu, modal close) have no accessible name.

Goal: a **targeted, low-risk** pass — cut eager JS via code-splitting, fix modal accessibility,
generate the missing favicons, and harden the contact endpoint. (No broad client→server rewrite.)

---

## 1. Favicons / brand icons (App Router file conventions)

Replace hand-written `<link>` tags with Next's metadata files so the assets always exist and are
auto-wired.

- Add `src/app/icon.png` → Next auto-generates the favicon + `<link rel="icon">`.
- Add `src/app/apple-icon.png` → auto `apple-touch-icon`.
- Remove the now-redundant manual `<link rel="icon|apple-touch-icon">` lines in
  `src/app/layout.tsx:108-110` (keep `preconnect` / `dns-prefetch`; keep or move `manifest`).
- Source the mark from the existing `public/Logo2.png`.

*(The Open Graph social image is covered in `SEO_IMPROVEMENT_PLAN.md` since it's a discoverability
asset.)*

## 2. Homepage code-splitting & lazy loading — `src/app/page.tsx`

- Convert below-the-fold, animation-heavy sections to `next/dynamic` so their Framer Motion code is
  not in the initial bundle: candidates — `ProductEcosystem`, `IndustriesSection`, `TrustSection`,
  `AboutSection`, `CTASection`.
- Keep `Hero` eager (it drives LCP).
- Wrap dynamic sections in `Suspense` with lightweight skeleton fallbacks.
- **Lazy-mount `ContactModal`** — render it only when opened, via the existing
  `src/context/ContactModalContext.tsx`, instead of always mounting it.

**Expected result:** lower Total Blocking Time and smaller initial JS on `/`.

## 3. ContactModal accessibility — `src/components/ContactModal.tsx`

- Add `role="dialog"`, `aria-modal="true"`, and an `aria-labelledby` pointing at the modal title.
- Implement a focus trap, Escape-to-close, and focus-return to the trigger element on close.
- Add an `aria-label` to the close (X) button.

## 4. Contact API hardening — `src/app/api/contact/route.ts`

> Backend/security item tied to the contact form. Could also live in the SEO/infra doc; kept here
> because it's part of the contact UX.

- **Validate** required fields, email format, and max lengths; return `400` on failure.
- **Sanitize/escape** all user values before inserting into the email HTML; strip CR/LF from any value
  used in `from` / `subject` headers (header-injection fix).
- Add a **honeypot** hidden field (rendered in `ContactModal`) + a best-effort per-IP **rate limit**
  (note the serverless caveat in a code comment).
- Preserve the existing try/catch and `validateEmailConfig()` flow.

## 5. Quick wins

- Remove the dead `CertificationBadges` import in `src/app/page.tsx:19`.
- Add `aria-label`s to icon-only buttons (`Navbar`, `MobileMenu`, modal close). This also improves the
  accessibility tree that AI/agents read (see ai-seo "Agentic Experiences").
- Confirm exactly one `<h1>` per route (Hero owns the home `<h1>`; section components must use `<h2>`).

---

## Files

**Create:** `src/app/icon.png`, `src/app/apple-icon.png`.
**Modify:** `src/app/page.tsx`, `src/components/ContactModal.tsx`, `src/app/api/contact/route.ts`,
`src/app/layout.tsx`, plus aria-label tweaks in `Navbar`/`MobileMenu`.

## Verification

1. `npm run build` — no type errors; routes still generate.
2. `npm run dev`:
   - Lighthouse on `/` before/after → expect lower TBT / smaller JS transferred.
   - Keyboard-test ContactModal: Tab stays trapped, Esc closes, focus returns to trigger.
   - axe / Lighthouse accessibility pass → icon buttons have names; single `<h1>`.
   - Favicon + apple icon resolve in the browser tab / iOS add-to-home.
3. Contact API: missing/invalid field → `400`; `\r\n` in name → stripped from headers; rapid repeats →
   rate-limited; valid submit → email sends.

## Out of scope (deferred)

- Deep client→server refactor across all ~60 client components (chose targeted instead).
- Visual redesign / new sections — this plan is correctness + performance + a11y only.
