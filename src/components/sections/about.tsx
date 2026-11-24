import { BriefcaseIcon, GaugeIcon, LayersIcon, ShieldCheckIcon } from "lucide-react"

import { Section } from "@/components/shared/section"
import type { PortfolioContent } from "@/content/types"

const pillarIcons = [LayersIcon, BriefcaseIcon, GaugeIcon, ShieldCheckIcon]

export function About({ about }: { about: PortfolioContent["about"] }) {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="reveal space-y-5 text-lg leading-relaxed text-pretty text-muted-foreground">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div>
          <h3 className="reveal text-sm font-semibold tracking-wide text-foreground">
            {about.pillarsTitle}
          </h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {about.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length]
              return (
                <li key={pillar.title} className="reveal">
                  <Icon aria-hidden className="size-5 text-brand" />
                  <h4 className="mt-3 font-semibold">{pillar.title}</h4>
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
