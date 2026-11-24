import { AppWindowIcon, PlugIcon, SmartphoneIcon, StoreIcon, WrenchIcon } from "lucide-react"

import { Section } from "@/components/shared/section"
import type { PortfolioContent } from "@/content/types"

const serviceIcons = [AppWindowIcon, StoreIcon, PlugIcon, WrenchIcon, SmartphoneIcon]

export function Services({ services }: { services: PortfolioContent["services"] }) {
  return (
    <Section id="services" eyebrow={services.eyebrow} title={services.title} intro={services.intro}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length]
          return (
            <li
              key={service.title}
              className="reveal rounded-xl border border-border/80 bg-card p-6"
            >
              <Icon aria-hidden className="size-5 text-brand" />
              <h3 className="mt-4 font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                {service.description}
              </p>
            </li>
          )
        })}
      </ul>

      <h3 className="mt-20 reveal text-sm font-semibold tracking-wide">{services.processTitle}</h3>
      <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.process.map((step, index) => (
          <li key={step.title} className="reveal border-t-2 border-foreground/80 pt-4">
            <span className="font-mono text-xs text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="mt-1 font-semibold">{step.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
