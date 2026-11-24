import { NextResponse, type NextRequest } from "next/server"

import { defaultLocale, isLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config"

/** English unless the visitor explicitly picked a language with the switcher (stored in a cookie). */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  return isLocale(saved) ? saved : defaultLocale
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
