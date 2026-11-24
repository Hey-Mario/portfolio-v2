# portfolio-v2

Personal portfolio of **Lovamanitra Mario Randriamanantena**, full-stack engineer (Next.js · Angular · NestJS · Laravel).

> Work in progress — this README is completed at the end of the build.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components, Server Actions, Cache Components)
- React 19, TypeScript (strict)
- Tailwind CSS 4 + [shadcn/ui](https://ui.shadcn.com) (Radix primitives)
- Native i18n (English / French) with `proxy.ts` + `next/root-params`
- Vitest (unit) · Playwright + axe (end-to-end & accessibility)

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in the EmailJS keys to enable the contact form
pnpm dev
```

## Scripts

| Script                                               | Description                                                  |
| ---------------------------------------------------- | ------------------------------------------------------------ |
| `pnpm dev`                                           | Start the dev server                                         |
| `pnpm build` / `pnpm start`                          | Production build / serve                                     |
| `pnpm lint` · `pnpm typecheck` · `pnpm format:check` | Static checks                                                |
| `pnpm test`                                          | Unit tests (Vitest)                                          |
| `pnpm test:e2e`                                      | End-to-end + accessibility tests (Playwright, needs a build) |

## License

Code: [MIT](./LICENSE). Content, photos and documents: all rights reserved.
