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
                "rounded-xl border border-border/80 bg-card p-5 reveal transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 sm:p-6 lg:col-span-2",
                // A last row of two cards shares the full width instead of leaving a gap.
                isLastPair(index, services.items.length) && "lg:col-span-3",
                index === services.items.length - 1 && index % 2 === 0 && "sm:max-lg:col-span-2",
              )}
            >
              <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <Icon aria-hidden className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                {service.description}
              </p>
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
