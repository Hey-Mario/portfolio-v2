import { DownloadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Locale } from "@/i18n/config"
import type { Messages } from "@/i18n/messages/en"
import { sectionIds, siteConfig } from "@/lib/site"

import { LocaleSwitcher } from "./locale-switcher"
import { MobileNav } from "./mobile-nav"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader({ locale, t }: { locale: Locale; t: Messages }) {
  const items = sectionIds.map((id) => ({ href: `#${id}`, label: t.nav[id] }))
  const cv = { href: siteConfig.cv[locale], label: t.nav.downloadCv }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href={`/${locale}`} className="group flex items-center gap-2.5 font-medium">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-md bg-foreground font-mono text-xs font-semibold text-background"
          >
            MR
          </span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <LocaleSwitcher locale={locale} label={t.a11y.switchLocale} />
          <ThemeToggle label={t.a11y.toggleTheme} />
          <Button asChild size="sm" variant="outline" className="ml-2 hidden md:inline-flex">
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
