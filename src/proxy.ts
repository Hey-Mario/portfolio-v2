import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, isLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config"

function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  if (isLocale(saved)) return saved

  const languages = new Negotiator({
    headers: { "accept-language": request.headers.get("accept-language") ?? "" },
  }).languages()

  try {
    return match(languages, locales, defaultLocale) as Locale
  } catch {
    return defaultLocale
  }
}

/** Redirects every path without a locale prefix to its localized version. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )
  if (hasLocale) return

  const url = request.nextUrl.clone()
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next.js internals, Vercel internals and any file with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
