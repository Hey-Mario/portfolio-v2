import { CompassIcon, DatabaseIcon, MonitorIcon, RocketIcon, ServerIcon } from "lucide-react"

import { Section } from "@/components/shared/section"
import { TechIcon } from "@/components/shared/tech-icon"
import type { PortfolioContent } from "@/content/types"

const groupIcons = [MonitorIcon, ServerIcon, DatabaseIcon, RocketIcon, CompassIcon]

export function Skills({ skills }: { skills: PortfolioContent["skills"] }) {
  return (
    <Section id="skills" eyebrow={skills.eyebrow} title={skills.title}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {skills.groups.map((group, index) => {
          const Icon = groupIcons[index % groupIcons.length]
          return (
            <li
              key={group.title}
              data-animate={index % 2 ? "fadeInRight" : "fadeInLeft"}
              className="rounded-2xl border border-border/80 bg-card p-5 reveal sm:p-6 lg:col-span-2 lg:[&:nth-child(n+4)]:col-span-3"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-brand/10 text-brand">
                  <Icon aria-hidden className="size-[1.125rem]" />
                </span>
                <h3 className="font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background px-2.5 py-1.5 text-sm transition-colors hover:border-brand/40"
                  >
                    <TechIcon name={item} className="size-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
