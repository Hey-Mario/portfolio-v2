import { ArrowRightIcon, DownloadIcon, MapPinIcon } from "lucide-react"
import Image from "next/image"

import { CountUp } from "@/components/shared/count-up"
import { HighlightedText } from "@/components/shared/highlighted-text"
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

/** Staggers the entrance: each step starts a little after the previous one. */
const step = (index: number) => ({ animationDelay: `${index * 90}ms` }) as React.CSSProperties

export function Hero({ locale, hero, stats, t }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-20 hero-glow" />
      <div aria-hidden className="absolute inset-0 -z-10 grid-fade" />

      <div className="container-page pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              {siteConfig.headshot && (
                <Image
                  src={siteConfig.headshot}
                  alt=""
                  width={96}
                  height={96}
                  sizes="44px"
                  style={step(0)}
                  className="animated fadeInUp size-11 rounded-full object-cover object-top ring-1 ring-border lg:hidden"
                />
              )}
              <p
                style={step(0)}
                className="animated fadeInUp inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                <span className="relative flex size-2" aria-hidden>
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {hero.availability}
              </p>
            </div>

            <h1 id="hero-title" className="mt-6 max-w-4xl sm:mt-8">
              <span
                style={step(1)}
                className="animated fadeInUp block text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
              >
                <HighlightedText text={hero.title} terms={hero.highlights} />
              </span>
            </h1>

            <p
              style={step(3)}
              className="animated fadeInUp mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:mt-6 sm:text-lg"
            >
              {hero.summary}
            </p>

            <div
              style={step(4)}
              className="animated fadeInUp mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
            >
              <Button asChild size="lg" className="h-11 px-5 text-base">
                <a href="#contact">
                  {hero.primaryCta}
                  <ArrowRightIcon />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 bg-card/60 px-5 text-base"
              >
                <a href={siteConfig.cv[locale]} download>
                  <DownloadIcon />
                  {hero.secondaryCta}
                </a>
              </Button>
            </div>

            <div
              style={step(5)}
              className="animated fadeInUp mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground sm:mt-8"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon aria-hidden className="size-4" />
                {hero.location}
              </span>
              <SocialLinks t={t} className="-ml-2" />
            </div>
          </div>

          {siteConfig.headshot && (
            <div style={step(2)} className="animated fadeInUp relative mr-4 hidden w-80 lg:block">
              <Image
                src={siteConfig.headshot}
                alt={siteConfig.shortName}
                width={800}
                height={1000}
                priority
                sizes="320px"
                className="relative aspect-4/5 w-full rounded-2xl object-cover shadow-xl ring-1 shadow-foreground/10 ring-border"
              />
            </div>
          )}
        </div>

        <dl className="mt-10 grid grid-cols-3 divide-x divide-border/60 border-y border-border/60 sm:mt-14 lg:mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 px-3 py-5 reveal first:pl-0 sm:gap-2 sm:px-6 sm:py-8"
            >
              <dt className="text-xs leading-snug text-pretty text-muted-foreground sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-first text-2xl font-semibold tracking-tight whitespace-nowrap sm:text-5xl lg:text-6xl">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
