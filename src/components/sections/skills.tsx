import { Section } from "@/components/shared/section"
import { TechList } from "@/components/shared/tech-list"
import type { PortfolioContent } from "@/content/types"

export function Skills({ skills }: { skills: PortfolioContent["skills"] }) {
  return (
    <Section id="skills" eyebrow={skills.eyebrow} title={skills.title}>
      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <li key={group.title} className="reveal">
            <h3 className="text-sm font-semibold">{group.title}</h3>
            <TechList items={group.items} className="mt-4" />
          </li>
        ))}
      </ul>
    </Section>
  )
}
