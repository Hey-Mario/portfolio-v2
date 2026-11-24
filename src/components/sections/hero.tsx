import { ArrowRightIcon, DownloadIcon, MapPinIcon } from "lucide-react"
import Image from "next/image"

import { SocialLinks } from "@/components/shared/social-links"
import { Button } from "@/components/ui/button"
import type { PortfolioContent } from "@/content/types"
import type { Locale } from "@/i18n/config"
import type { Messages } from "@/i18n/messages/en"
import { siteConfig } from "@/lib/site"

type HeroProps = {
  locale: Locale
  hero: PortfolioContent["hero"]
  stats: PortfolioContent["stats"]
  t: Messages
}

export function Hero({ locale, hero, stats, t }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="container-page pt-14 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {hero.availability}
          </p>

          <h1 id="hero-title" className="mt-8 max-w-4xl">
            <span className="block font-mono text-sm tracking-wide text-brand">
              {siteConfig.shortName} · <span className="whitespace-nowrap">{hero.role}</span>
            </span>
            <span className="mt-4 block text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {hero.title}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {hero.summary}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-11 px-5 text-base">
              <a href="#contact">
                {hero.primaryCta}
                <ArrowRightIcon />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-5 text-base">
              <a href={siteConfig.cv[locale]} download>
                <DownloadIcon />
                {hero.secondaryCta}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPinIcon aria-hidden className="size-4" />
              {hero.location}
            </span>
            <SocialLinks t={t} className="-ml-2" />
          </div>
        </div>

        {siteConfig.headshot && (
          <div className="relative order-first mx-auto w-40 sm:w-48 lg:order-none lg:mr-4 lg:w-80">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-brand/40 bg-brand/5 lg:translate-x-4 lg:translate-y-4"
            />
            <Image
              src={siteConfig.headshot}
              alt={siteConfig.shortName}
              width={800}
              height={1000}
              priority
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 192px, 160px"
              className="relative aspect-4/5 w-full rounded-2xl object-cover shadow-sm ring-1 ring-border"
            />
          </div>
        )}
      </div>

      <dl className="mt-16 grid gap-8 border-t border-border/60 pt-10 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse gap-1">
            <dt className="text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="text-3xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
