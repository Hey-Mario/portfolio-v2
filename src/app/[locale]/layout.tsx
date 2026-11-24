import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ScrollAnimations } from "@/components/layout/scroll-animations"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { SkipLink } from "@/components/layout/skip-link"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { locales } from "@/i18n/config"
import { getDictionary, getLocale } from "@/i18n/server"
import { buildMetadata } from "@/lib/seo"

export { viewport } from "@/lib/seo"

import "../globals.css"

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata(): Promise<Metadata> {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()])
  return buildMetadata(locale, t)
}

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale()
  const t = await getDictionary()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <SkipLink label={t.a11y.skipToContent} />
            <div
              aria-hidden
              className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left scroll-progress bg-brand"
            />
            <ScrollAnimations />
            <SiteHeader locale={locale} t={t} />
            <main id="main" className="flex-1">
              {children}
            </main>
            <SiteFooter t={t} />
            <ScrollToTop label={t.a11y.scrollToTop} />
            <Toaster position="bottom-center" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
