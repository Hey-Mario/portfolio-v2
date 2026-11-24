import type { Metadata } from "next"

import type { PortfolioContent } from "@/content/types"
import { defaultLocale, locales, type Locale } from "@/i18n/config"
import type { Messages } from "@/i18n/messages/en"

import { siteConfig } from "./site"

const ogLocales: Record<Locale, string> = { en: "en_US", fr: "fr_FR" }

/** `{ en: "/en", fr: "/fr", "x-default": "/en" }` */
export function languageAlternates(path = "") {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}${path}`])),
    "x-default": `/${defaultLocale}${path}`,
  }
}

export function buildMetadata(locale: Locale, t: Messages): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t.meta.title, template: `%s · ${siteConfig.shortName}` },
    description: t.meta.description,
    applicationName: siteConfig.shortName,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    alternates: { canonical: `/${locale}`, languages: languageAlternates() },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: siteConfig.shortName,
      title: t.meta.title,
      description: t.meta.description,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((other) => other !== locale).map((other) => ogLocales[other]),
      firstName: "Mario",
      lastName: "Randriamanantena",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  }
}

/** schema.org Person, rendered as JSON-LD on the home page. */
export function personJsonLd(locale: Locale, content: PortfolioContent) {
  const { links } = siteConfig
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: `${siteConfig.url}/${locale}`,
    email: `mailto:${siteConfig.email}`,
    jobTitle: content.hero.role,
    description: content.hero.summary,
    address: { "@type": "PostalAddress", addressLocality: "Antananarivo", addressCountry: "MG" },
    sameAs: [links.github, links.linkedin].filter(Boolean),
    alumniOf: [{ "@type": "CollegeOrUniversity", name: "ESTI" }],
    knowsAbout: content.skills.groups.slice(0, 3).flatMap((group) => group.items),
    knowsLanguage: ["fr", "en", "mg"],
  }
}

/** Serializes JSON-LD safely for an inline <script> tag (escapes "<"). */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\" + "u003c")
}
