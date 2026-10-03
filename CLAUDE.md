# Tatvix Website — Project Guide

Tatvix marketing/landing site.

## Stack
- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4
- Framer Motion, next-themes, nodemailer
- Run: `npm run dev` → http://localhost:3000 · Build: `npm run build`

## Layout
- Pages: `src/app/` · Components: `src/components/` · Data: `src/data/` · Lib: `src/lib/`

## Git rule
- **Local changes only. NEVER commit or push unless I explicitly ask.**
- Remote: `https://github.com/IndiGtech/TatvixTech.git` (origin). Treat GitHub as source of truth; do not push over it.

## Skills — use BOTH (read their `SKILL.md` + references first, then apply)
- `nextjs-app-router-patterns` → `.agents/skills/nextjs-app-router-patterns/`
  - server-first components, `next/dynamic`, `Suspense`, file-convention metadata,
    `generateStaticParams` / `generateMetadata`.
- `ai-seo` → `.agents/skills/ai-seo/`
  - Structure → Authority → Presence: extractable answer/FAQ/comparison blocks,
    correct schema, E-E-A-T, `llms.txt`, AI-bot access.
- (`find-skills` → `.agents/skills/find-skills/` — discovery helper only.)

Every UI/SEO change should trace back to one of these skills.

## Plans (written and reviewed)
- `UI_IMPROVEMENT_PLAN.md` — perf, a11y, contact API hardening.
- `SEO_IMPROVEMENT_PLAN.md` — GEO, schema, `[slug]` landing pages, sitemap, `llms.txt`.
- `IMPLEMENTATION_SUMMARY.md` — **what's already been built from both plans** (read this first
  to know current state). Both plans are implemented and the build passes (local only).

## Business facts (for schema — replaces placeholder data)
- India HQ, serving a global market (`areaServed: Worldwide`).
- Real address/phone are user-supplied — wire via env vars in `.env.local` and leave
  clear TODO placeholders. Do NOT invent fake data.
