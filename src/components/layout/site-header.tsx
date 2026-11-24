import { DownloadIcon } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import type { Locale } from "@/i18n/config"
import type { Messages } from "@/i18n/messages/en"
import { sectionIds, siteConfig } from "@/lib/site"

import { LocaleSwitcher } from "./locale-switcher"
import { MobileNav } from "./mobile-nav"
import { NavLinks } from "./nav-links"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader({ locale, t }: { locale: Locale; t: Messages }) {
  const items = sectionIds.map((id) => ({ href: `#${id}`, label: t.nav[id] }))
  const cv = { href: siteConfig.cv[locale], label: t.nav.downloadCv }

  return (
    <header className="sticky top-0 z-40 header-scroll border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href={`/${locale}`} className="group flex items-center gap-2.5 font-medium">
          {/* White tile keeps the navy part of the logo readable in dark mode. */}
          <span
            aria-hidden
            className="grid size-9 place-items-center rounded-lg bg-white shadow-xs ring-1 ring-border transition-transform group-hover:scale-105"
          >
            <Image
              src="/images/logo-mr.png"
              alt=""
              width={256}
              height={256}
              priority
              className="size-6 object-contain"
            />
          </span>
          <span className="sm:hidden">{siteConfig.shortName.split(" ")[0]}</span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <NavLinks items={items} />
        </nav>

        <div className="flex items-center gap-1">
          <LocaleSwitcher locale={locale} label={t.a11y.language} />
          <ThemeToggle label={t.a11y.toggleTheme} />
          <Button asChild size="sm" variant="outline" className="ml-2 hidden lg:inline-flex">
            <a href={cv.href} download>
              <DownloadIcon />
              {cv.label}
            </a>
          </Button>
          <MobileNav
            items={items}
            cv={cv}
            labels={{ open: t.a11y.openMenu, title: t.a11y.mainNav }}
          />
        </div>
      </div>
    </header>
  )
}
