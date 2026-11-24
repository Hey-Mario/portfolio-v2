import { AppWindowIcon, PlugIcon, SmartphoneIcon, StoreIcon, WrenchIcon } from "lucide-react"

import { Section } from "@/components/shared/section"
import type { PortfolioContent } from "@/content/types"

const serviceIcons = [AppWindowIcon, StoreIcon, PlugIcon, WrenchIcon, SmartphoneIcon]

import { cn } from "@/lib/utils"

const isLastPair = (index: number, total: number) => total % 3 === 2 && index >= total - 2

export function Services({ services }: { services: PortfolioContent["services"] }) {
  return (
    <Section
      id="services"
      tone="muted"
      eyebrow={services.eyebrow}
      title={services.title}
      intro={services.intro}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.items.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length]
          return (
            <li
              key={service.title}
              data-animate={["fadeInLeft", "fadeInUp", "fadeInRight"][index % 3]}
              className={cn(
                "rounded-xl border border-border/80 bg-card p-6 reveal transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 lg:col-span-2",
                // A last row of two cards shares the full width instead of leaving a gap.
                isLastPair(index, services.items.length) && "lg:col-span-3",
                index === services.items.length - 1 && index % 2 === 0 && "sm:max-lg:col-span-2",
              )}
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

      <h3 className="mt-16 text-sm font-semibold tracking-wide reveal sm:mt-20">
        {services.processTitle}
      </h3>
      <ol className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.process.map((step, index) => (
          <li key={step.title} className="border-t-2 border-foreground/80 pt-4 reveal">
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
