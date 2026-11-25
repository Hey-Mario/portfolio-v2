/**
 * Locale-independent facts (links, dates, tech stacks). Localized copy lives in
 * `en.ts` / `fr.ts` and references these entries by id.
 */

/** `YYYY-MM` */
export type YearMonth = `${number}-${number}`

/** A missing `end` means "present". */
export type Period = { start: YearMonth; end?: YearMonth }

export type ProjectStatus = "live" | "internal" | "upcoming"

export type ExperienceMeta = { url?: string; period: Period; stack: string[] }

export type ProjectMeta = {
  url?: string
  /** Screenshot under /public, captured from the live site. */
  image?: string
  status: ProjectStatus
  period: Period
  stack: string[]
}

const experiences = {
  pyxis: {
    url: "https://pyxis.site",
    period: { start: "2026-10" },
    stack: ["Next.js", "React", "TypeScript", "Fastify", "MongoDB", "Zod", "Vitest", "Playwright"],
  },
  "solar-transit": {
    period: { start: "2023-05" },
    stack: [
      "Laravel",
      "Livewire",
      "Filament",
      "Angular",
      "Next.js",
      "NestJS",
      "FastAPI",
      "MySQL",
      "MongoDB",
    ],
  },
  akademika: {
    url: "https://akademika.mg",
    period: { start: "2024-09", end: "2025-04" },
    stack: ["Angular", "Ionic", "NgRx", "NestJS", "TypeORM", "MySQL"],
  },
  mahomby: {
    period: { start: "2023-01", end: "2023-04" },
    stack: ["Angular", "Ionic", "Node.js", "Express", "MongoDB"],
  },
} satisfies Record<string, ExperienceMeta>

export type ExperienceId = keyof typeof experiences

export const experienceMeta: Record<ExperienceId, ExperienceMeta> = experiences

const projects = {
  lavanty: {
    url: "https://lavanty.online",
    image: "/images/projects/lavanty.webp",
    status: "live",
    period: { start: "2026-10" },
    stack: ["Next.js", "Fastify", "MongoDB", "WebSockets", "Web Push", "Zod", "Vitest"],
  },
  akademika: {
    url: "https://akademika.mg",
    image: "/images/projects/akademika.webp",
    status: "live",
    period: { start: "2024-09", end: "2025-04" },
    stack: ["Angular 18", "Ionic", "NestJS", "TypeORM", "MySQL", "JWT"],
  },
  pvgis: {
    url: "https://pvgis.com",
    image: "/images/projects/pvgis.webp",
    status: "live",
    period: { start: "2023-05" },
    stack: [],
  },
  "solar-rent": {
    url: "https://solar-rent.mu",
    image: "/images/projects/solar-rent.webp",
    status: "live",
    period: { start: "2023-05" },
    stack: [],
  },
  "solar-advisor": {
    status: "upcoming",
    period: { start: "2025-06", end: "2025-09" },
    stack: ["Laravel 12", "Livewire 3", "Filament", "NestJS", "TypeORM", "Gotenberg"],
  },
  sfer: {
    status: "internal",
    period: { start: "2023-05" },
    stack: [],
  },
  "pyxis-site": {
    url: "https://pyxis.site",
    image: "/images/projects/pyxis-site.webp",
    status: "live",
    period: { start: "2026-10", end: "2026-10" },
    stack: ["Next.js 16", "React 19", "Tailwind CSS", "Playwright", "axe-core"],
  },
} satisfies Record<string, ProjectMeta>

export type ProjectId = keyof typeof projects

export const projectMeta: Record<ProjectId, ProjectMeta> = projects
