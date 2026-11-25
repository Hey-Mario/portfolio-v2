import { BriefcaseIcon, GaugeIcon, LayersIcon, ShieldCheckIcon } from "lucide-react"

import { Section } from "@/components/shared/section"
import type { PortfolioContent } from "@/content/types"

const pillarIcons = [LayersIcon, BriefcaseIcon, GaugeIcon, ShieldCheckIcon]

export function About({ about }: { about: PortfolioContent["about"] }) {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div data-animate="fadeInLeft" className="space-y-5 reveal">
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-xl leading-snug font-medium tracking-tight text-balance sm:text-2xl"
                  : "leading-relaxed text-pretty text-muted-foreground sm:text-lg"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-foreground reveal">
            {about.pillarsTitle}
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
            {about.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length]
              return (
                <li
                  key={pillar.title}
                  data-animate={index % 2 ? "fadeInRight" : "fadeInUp"}
                  className="rounded-xl border border-border/80 bg-card p-4 reveal transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 sm:p-5"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h4 className="mt-3 text-base leading-snug font-semibold">{pillar.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {pillar.description}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  )
}
