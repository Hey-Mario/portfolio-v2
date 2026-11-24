import { ExternalLink } from "@/components/shared/external-link"
import { LinkedText } from "@/components/shared/linked-text"
import { Section } from "@/components/shared/section"
import { TechList } from "@/components/shared/tech-list"
import { experienceMeta } from "@/content/meta"
import type { PortfolioContent } from "@/content/types"
import type { Locale } from "@/i18n/config"
import type { Messages } from "@/i18n/messages/en"
import { formatPeriod } from "@/lib/format"

type ExperienceProps = {
  locale: Locale
  experience: PortfolioContent["experience"]
  /** Domain → URL map; matching domains in highlights become links. */
  links: Record<string, string>
  t: Messages
}

export function Experience({ locale, experience, links, t }: ExperienceProps) {
  return (
    <Section id="experience" eyebrow={experience.eyebrow} title={experience.title}>
      <div className="relative">
        <span
          aria-hidden
          className="absolute inset-y-2 left-[calc(13rem+1.25rem)] hidden w-px draw-y bg-border md:block"
        />
        <ol className="space-y-12 sm:space-y-16">
          {experience.items.map((item) => {
            const meta = experienceMeta[item.id]
            return (
              <li
                key={item.id}
                className="relative grid gap-3 reveal md:grid-cols-[13rem_1fr] md:gap-10"
              >
                <span
                  aria-hidden
                  className="absolute top-[0.55rem] left-[calc(13rem+1.25rem-0.3125rem)] hidden size-2.5 rounded-full border-2 border-brand bg-background md:block"
                />
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase md:pt-1.5">
                  {formatPeriod(meta.period, locale, t.common.present)}
                </p>
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.role}
                    <span className="text-muted-foreground"> · </span>
                    {meta.url ? (
                      <ExternalLink
                        href={meta.url}
                        newTabLabel={t.common.newTab}
                        className="underline-offset-4 hover:underline"
                      >
                        {item.company}
                      </ExternalLink>
                    ) : (
                      item.company
                    )}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.location}</p>
                  <p className="mt-4 text-pretty">{item.summary}</p>
                  <ul className="mt-4 space-y-2.5 text-pretty text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-5 leading-relaxed before:absolute before:top-[0.7em] before:left-0 before:size-1.5 before:rounded-full before:bg-brand/70"
                      >
                        <LinkedText text={highlight} links={links} newTabLabel={t.common.newTab} />
                      </li>
                    ))}
                  </ul>
                  <TechList items={meta.stack} className="mt-5" />
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
