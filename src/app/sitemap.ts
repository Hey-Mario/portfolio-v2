import type { MetadataRoute } from "next"

import { locales } from "@/i18n/config"
import { languageAlternates } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(languageAlternates()).map(([key, path]) => [key, `${siteConfig.url}${path}`]),
  )

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages },
  }))
}
