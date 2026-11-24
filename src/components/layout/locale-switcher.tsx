"use client"

import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { LOCALE_COOKIE, type Locale } from "@/i18n/config"

const ONE_YEAR = 60 * 60 * 24 * 365

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()
  const target: Locale = locale === "en" ? "fr" : "en"
  const href = pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${target}`)

  return (
    <Button variant="ghost" size="sm" asChild>
      <a
        href={href}
        hrefLang={target}
        lang={target}
        aria-label={label}
        title={label}
        className="font-mono text-xs tracking-wider uppercase"
        onClick={(event) => {
          document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=${ONE_YEAR}; samesite=lax`
          // Keep the reader on the same section after switching language.
          event.currentTarget.href = href + window.location.hash
        }}
      >
        {target}
      </a>
    </Button>
  )
}
