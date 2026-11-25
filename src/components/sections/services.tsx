import { AppWindowIcon, PlugIcon, SmartphoneIcon, StoreIcon, WrenchIcon } from "lucide-react"

import { Section } from "@/components/shared/section"
import type { PortfolioContent } from "@/content/types"

const serviceIcons = [AppWindowIcon, StoreIcon, PlugIcon, WrenchIcon, SmartphoneIcon]

export function Services({ services }: { services: PortfolioContent["services"] }) {
  return (
    <Section
      id="services"
      tone="muted"
      eyebrow={services.eyebrow}
      title={services.title}
      intro={services.intro}
    >
      <ul className="grid gap-x-12 border-t border-border/60 lg:grid-cols-2">
        {services.items.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length]
          return (
            <li
              key={service.title}
              className="flex gap-4 border-b border-border/60 py-5 reveal sm:py-6"
            >
              <Icon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" />
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      <h3 className="mt-14 text-sm font-semibold tracking-wide reveal sm:mt-20">
        {services.processTitle}
      </h3>
      <ol className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
        {services.process.map((step, index) => (
          <li key={step.title} className="relative reveal">
            <span
              aria-hidden
              className="absolute top-5 left-12 hidden h-px w-[calc(100%-2rem)] bg-linear-to-r from-brand/50 to-transparent lg:block"
            />
            <span className="grid size-10 place-items-center rounded-full bg-foreground font-mono text-sm font-semibold text-background">
              {index + 1}
            </span>
            <h4 className="mt-3 font-semibold">{step.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-pretty text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
