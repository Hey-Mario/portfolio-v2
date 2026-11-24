# portfolio-v2

Source code of my personal portfolio — **Lovamanitra Mario Randriamanantena**, full-stack engineer
building SaaS and marketplace platforms.

**Live:** https://portfolio-mario.vercel.app · English & French

## Highlights

- **Next.js 16** App Router with React Server Components and **Cache Components** — both locales are
  prerendered as static HTML.
- **Native i18n** (no library): `proxy.ts` negotiates the language (cookie → `Accept-Language`),
  `next/root-params` exposes the locale to any Server Component, and messages/content are plain
  TypeScript objects, so a missing translation is a **compile error**.
- **Typed content model** — all copy lives in [`src/content`](./src/content); dates, links and stacks
  are locale-independent (`meta.ts`) and formatted with `Intl`.
- **Contact form** — react-hook-form + a shared Zod schema, a Server Action that sends through EmailJS
  with server-only keys, honeypot and minimum-fill-time bot protection, localized errors.
- **Accessible & fast** — semantic landmarks, skip link, keyboard-friendly dialogs (Radix), axe-tested in
  both themes and languages; scroll reveals are pure CSS (`animation-timeline: view()`) and respect
  reduced motion. Lighthouse 100 in Accessibility, Best Practices and SEO.
- **SEO** — per-locale metadata, canonical + `hreflang` alternates, generated Open Graph images,
  sitemap, robots and schema.org `Person` JSON-LD.

## Stack

Next.js 16 · React 19 · TypeScript (strict) · Tailwind CSS 4 · shadcn/ui (Radix) · Zod ·
react-hook-form · EmailJS · Vitest · Playwright + axe-core · GitHub Actions · Vercel

## Project structure

```
src/
  app/[locale]/        layout (root), page, 404, Open Graph image
  app/                 sitemap.ts, robots.ts, icon.svg
  components/
    layout/            header, footer, theme toggle, locale switcher, mobile nav
    sections/          hero, about, services, experience, projects, testimonial, skills, education, contact
    shared/            section shell, tech badges, social links, external link
    ui/                shadcn/ui primitives
  content/             en.ts, fr.ts (copy) · meta.ts (links, dates, stacks) · types.ts
  i18n/                locale config, UI messages, server helpers
  lib/                 site config, SEO helpers, date formatting, contact form logic
  proxy.ts             locale negotiation & redirects
tests/                 Vitest unit tests (content parity, contact handler, SEO helpers)
e2e/                   Playwright end-to-end + accessibility tests
```

## Getting started

Requires Node.js ≥ 22 and pnpm.

```bash
pnpm install
cp .env.example .env.local   # fill in the EmailJS keys to enable the contact form
pnpm dev
```

### Environment variables

| Variable                                     | Description                                         |
| -------------------------------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                       | Canonical site URL (defaults to the production URL) |
| `EMAILJS_SERVICE_ID` · `EMAILJS_TEMPLATE_ID` | EmailJS service and template                        |
| `EMAILJS_PUBLIC_KEY` · `EMAILJS_PRIVATE_KEY` | EmailJS keys — used server-side only                |

In the EmailJS dashboard (Account → Security), allow API calls from non-browser applications. The
template receives `from_name`, `from_email`, `reply_to`, `reason`, `message`, `to_name` and
`to_email`.

## Scripts

| Script                                               | Description                                                      |
| ---------------------------------------------------- | ---------------------------------------------------------------- |
| `pnpm dev`                                           | Start the dev server on http://localhost:3010                    |
| `pnpm build` / `pnpm start`                          | Production build / serve                                         |
| `pnpm lint` · `pnpm typecheck` · `pnpm format:check` | Static checks                                                    |
| `pnpm test`                                          | Unit tests (Vitest)                                              |
| `pnpm test:e2e`                                      | End-to-end + accessibility tests (Playwright; builds must exist) |

## Editing content

Update `src/content/en.ts` and `src/content/fr.ts` (TypeScript keeps them in sync), and
`src/content/meta.ts` for links, dates and tech stacks. The CV files live in `public/cv/`, and
contact details in `src/lib/site.ts`.

## License

Code: [MIT](./LICENSE). Written content, photos and documents: all rights reserved.
