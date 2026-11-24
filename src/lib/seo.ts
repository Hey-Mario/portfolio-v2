import type { Metadata, Viewport } from "next"

import type { PortfolioContent } from "@/content/types"
import { defaultLocale, locales, type Locale } from "@/i18n/config"
import type { Messages } from "@/i18n/messages/en"

import { siteConfig } from "./site"

const ogLocales: Record<Locale, string> = { en: "en_US", fr: "fr_FR" }

const keywords: Record<Locale, string[]> = {
  en: [
    "full-stack engineer",
    "full-stack developer Madagascar",
    "SaaS developer",
    "marketplace developer",
    "Next.js",
    "NestJS",
    "Angular",
    "Laravel",
    "freelance developer",
    "remote developer",
  ],
  fr: [
    "ingénieur full-stack",
    "développeur full-stack Madagascar",
    "développeur SaaS",
    "développeur marketplace",
    "Next.js",
    "NestJS",
    "Angular",
    "Laravel",
    "développeur freelance",
    "développeur à distance",
  ],
}

/** `{ en: "/en", fr: "/fr", "x-default": "/en" }` */
export function languageAlternates(path = "") {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}${path}`])),
    "x-default": `/${defaultLocale}${path}`,
  }
}

/** Browser UI colour, matching the page background in each colour scheme. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
  ],
}

export function buildMetadata(locale: Locale, t: Messages): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: t.meta.title, template: `%s · ${siteConfig.shortName}` },
    description: t.meta.description,
    keywords: keywords[locale],
    applicationName: siteConfig.shortName,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    formatDetection: { telephone: false, address: false },
    alternates: { canonical: `/${locale}`, languages: languageAlternates() },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
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
      username: "Hey-Mario",
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  }
}

/**
 * schema.org graph for the home page: the person, the website and the profile page that
 * ties them together, so search engines understand who the page is about.
 */
export function personJsonLd(locale: Locale, content: PortfolioContent) {
  const { links } = siteConfig
  const pageUrl = `${siteConfig.url}/${locale}`
  const personId = `${siteConfig.url}/#person`
  const skills = [...new Set(content.skills.groups.flatMap((group) => group.items))].slice(0, 30)

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        givenName: "Lovamanitra Mario",
        familyName: "Randriamanantena",
        url: pageUrl,
        email: `mailto:${siteConfig.email}`,
        jobTitle: content.hero.role,
        ...(siteConfig.headshot ? { image: `${siteConfig.url}${siteConfig.headshot}` } : {}),
        description: content.hero.summary,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Antananarivo",
          addressCountry: "MG",
        },
        sameAs: [links.github, links.linkedin].filter(Boolean),
        worksFor: [{ "@type": "Organization", name: "Pyxis", url: "https://pyxis.site" }],
        alumniOf: [{ "@type": "CollegeOrUniversity", name: "ESTI" }],
        knowsAbout: skills,
        knowsLanguage: ["fr", "en", "mg"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.shortName,
        inLanguage: [...locales],
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile`,
        url: pageUrl,
        name: content.hero.title,
        inLanguage: locale,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        mainEntity: { "@id": personId },
      },
    ],
  }
}

/** Serializes JSON-LD safely for an inline <script> tag (escapes "<"). */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\" + "u003c")
}
