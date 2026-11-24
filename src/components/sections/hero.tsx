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

            <h1 id="hero-title" className="mt-6 max-w-4xl sm:mt-8">
              <span
                style={step(1)}
                className="animated fadeInUp block font-mono text-sm tracking-wide text-brand"
              >
                {siteConfig.shortName} · <span className="whitespace-nowrap">{hero.role}</span>
              </span>
              <span
                style={step(2)}
                className="animated fadeInUp mt-3 block text-4xl font-semibold tracking-tight text-balance sm:mt-4 sm:text-5xl lg:text-6xl"
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
            <div
              style={step(2)}
              className="animated fadeInUp relative order-first mx-auto w-36 sm:w-44 lg:order-none lg:mr-4 lg:w-80"
            >
              <div
                aria-hidden
                className="absolute inset-0 translate-x-3 translate-y-3 drift rounded-2xl border border-brand/40 bg-brand/5 lg:translate-x-4 lg:translate-y-4"
              />
              <Image
                src={siteConfig.headshot}
                alt={siteConfig.shortName}
                width={800}
                height={1000}
                priority
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 176px, 144px"
                className="relative aspect-4/5 w-full rounded-2xl object-cover shadow-lg ring-1 shadow-brand/10 ring-border"
              />
            </div>
          )}
        </div>

        <dl className="mt-10 grid gap-4 border-t border-border/60 pt-6 sm:mt-14 sm:grid-cols-3 sm:gap-8 sm:pt-10 lg:mt-16">
          {stats.map((stat) => (
            <div key={stat.label} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-4 reveal sm:flex sm:flex-col-reverse sm:gap-1">
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight whitespace-nowrap sm:order-none sm:text-5xl lg:text-6xl">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
