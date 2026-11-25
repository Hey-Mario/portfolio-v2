import { Section } from "@/components/shared/section"
import { TechIcon } from "@/components/shared/tech-icon"
import type { PortfolioContent } from "@/content/types"

export function Skills({ skills }: { skills: PortfolioContent["skills"] }) {
  return (
    <Section id="skills" eyebrow={skills.eyebrow} title={skills.title}>
      <dl className="grid gap-x-12 gap-y-6 lg:grid-cols-2">
        {skills.groups.map((group) => (
          <div
            key={group.title}
            className="grid gap-3 border-t border-border/60 pt-5 reveal sm:grid-cols-[8rem_1fr] sm:gap-6"
          >
            <dt className="text-sm font-semibold sm:pt-1">{group.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-background px-2 py-1 text-sm"
                  >
                    <TechIcon name={item} className="size-3.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
