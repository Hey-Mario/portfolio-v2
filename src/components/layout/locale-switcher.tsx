"use client"

import { usePathname } from "next/navigation"

import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

const ONE_YEAR = 60 * 60 * 24 * 365

/** Each language is named in itself, so it stays understandable whatever the page language. */
const names: Record<Locale, string> = { en: "English", fr: "Français" }

/** Two-option switch (EN | FR): the highlighted side is the language currently shown. */
export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname()

  return (
    <div
      role="group"
      aria-label={label}
      className="relative grid grid-cols-2 rounded-full border border-border bg-muted/60 p-0.5 font-mono text-xs tracking-wider uppercase"
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-full bg-foreground shadow-sm transition-transform duration-300",
          locale === "fr" && "translate-x-full",
        )}
      />
      {locales.map((code) => {
        const active = code === locale
        const href = pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${code}`)
        return (
          <a
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            title={names[code]}
            aria-current={active ? "true" : undefined}
            className={cn(
              "relative z-10 rounded-full px-2.5 py-1 text-center font-medium transition-colors",
              active ? "text-background" : "text-muted-foreground hover:text-foreground",
            )}
            onClick={(event) => {
              document.cookie = `${LOCALE_COOKIE}=${code}; path=/; max-age=${ONE_YEAR}; samesite=lax`
              // Keep the reader on the same section after switching language.
              event.currentTarget.href = href + window.location.hash
            }}
          >
            {code}
            {/* Visible text must stay inside the accessible name (WCAG 2.5.3). */}
            <span className="sr-only"> — {names[code]}</span>
          </a>
        )
      })}
    </div>
  )
}
