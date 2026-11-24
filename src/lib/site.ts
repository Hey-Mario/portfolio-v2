import type { Locale } from "@/i18n/config"

export const siteConfig = {
  /** Official order: family name first. */
  name: "RANDRIAMANANTENA Lovamanitra Mario",
  shortName: "Mario Randriamanantena",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-mario.vercel.app",
  email: "lovamanitramario@gmail.com",
  phone: "+261 36 17 007 07",
  /** Path under /public, or null to render the hero without a portrait. */
  headshot: null as string | null,
  links: {
    github: "https://github.com/Hey-Mario",
    linkedin: null as string | null,
    whatsapp: "https://wa.me/261361700707",
    source: "https://github.com/Hey-Mario/portfolio-v2",
  },
  cv: {
    en: "/cv/cv-en.pdf",
    fr: "/cv/cv-fr.pdf",
  } satisfies Record<Locale, string>,
}

export const sectionIds = ["about", "services", "experience", "projects", "contact"] as const

export type SectionId = (typeof sectionIds)[number]
