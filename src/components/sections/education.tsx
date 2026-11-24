import { AwardIcon, GraduationCapIcon } from "lucide-react"

import { ExternalLink } from "@/components/shared/external-link"
import { Section } from "@/components/shared/section"
import { Badge } from "@/components/ui/badge"
import type { PortfolioContent } from "@/content/types"
import type { Messages } from "@/i18n/messages/en"

type EducationProps = { education: PortfolioContent["education"]; t: Messages }

export function Education({ education, t }: EducationProps) {
  return (
    <Section id="education" eyebrow={education.eyebrow} title={education.title}>
      <div className="grid gap-16 lg:grid-cols-2">
        <ul className="space-y-8">
          {education.items.map((item) => (
            <li key={item.degree} className="flex reveal gap-4">
              <GraduationCapIcon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand" />
              <div>
                <h3 className="font-semibold text-pretty">
                  {item.degree}
                  {item.status && (
                    <Badge variant="outline" className="ml-2 align-middle font-normal">
                      {item.status}
                    </Badge>
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                {item.detail && (
                  <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {item.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div>
          <h3 className="flex reveal items-center gap-2 text-sm font-semibold">
            <AwardIcon aria-hidden className="size-4 text-brand" />
            {education.awardsTitle}
          </h3>
          <ul className="mt-6 divide-y divide-border/60 border-y border-border/60">
            {education.awards.map((award) => (
              <li key={award.project} className="grid reveal grid-cols-[5.5rem_1fr] gap-4 py-4">
                <span className="text-sm font-semibold text-brand">{award.rank}</span>
                <div className="text-sm">
                  <p className="font-medium">
                    {award.event}
                    {award.date && <span className="text-muted-foreground"> · {award.date}</span>}
                  </p>
                  <p className="mt-1 text-pretty text-muted-foreground">
                    {award.url ? (
                      <ExternalLink
                        href={award.url}
                        newTabLabel={t.common.newTab}
                        className="underline-offset-4 hover:underline"
                      >
                        {award.project}
                      </ExternalLink>
                    ) : (
                      award.project
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
