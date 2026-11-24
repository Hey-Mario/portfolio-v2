import { ExternalLink } from "@/components/shared/external-link"
import { Section } from "@/components/shared/section"
import { TechList } from "@/components/shared/tech-list"
import { Badge } from "@/components/ui/badge"
import { projectMeta, type ProjectStatus } from "@/content/meta"
import type { PortfolioContent } from "@/content/types"
import type { Locale } from "@/i18n/config"
import type { Messages } from "@/i18n/messages/en"
import { formatPeriod } from "@/lib/format"
import { cn } from "@/lib/utils"

import { ProjectDetails } from "./project-details"

type ProjectsProps = {
  locale: Locale
  projects: PortfolioContent["projects"]
  t: Messages
}

function StatusBadge({ status, label }: { status: ProjectStatus; label: string }) {
  return (
    <Badge variant="outline" className="shrink-0 gap-1.5 font-normal text-muted-foreground">
      <span
        aria-hidden
        className={cn(
          "size-1.5 rounded-full",
          status === "live" ? "bg-emerald-500" : "bg-muted-foreground/50",
        )}
      />
      {label}
    </Badge>
  )
}

export function Projects({ locale, projects, t }: ProjectsProps) {
  return (
    <Section id="projects" eyebrow={projects.eyebrow} title={projects.title} intro={projects.intro}>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.items.map((project, index) => {
          const meta = projectMeta[project.id]
          const featured = index === 0
          const tags = project.focus ?? meta.stack
          return (
            <li
              key={project.id}
              data-animate={featured ? "fadeInUp" : index % 2 === 1 ? "fadeInLeft" : "fadeInRight"}
              className={cn("reveal", featured && "md:col-span-2")}
            >
              <article className="flex h-full flex-col rounded-xl border border-border/80 bg-card p-6 transition duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow">{project.category}</p>
                  <StatusBadge status={meta.status} label={t.status[meta.status]} />
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
                <p
                  className={cn(
                    "mt-4 flex-1 leading-relaxed text-pretty text-muted-foreground",
                    featured && "max-w-3xl",
                  )}
                >
                  {project.summary}
                </p>
                <TechList items={tags} className="mt-6" />
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ProjectDetails
                    name={project.name}
                    category={project.category}
                    role={project.role}
                    period={formatPeriod(meta.period, locale, t.common.present)}
                    summary={project.summary}
                    highlights={project.highlights}
                    tags={tags}
                    url={meta.url}
                    note={project.note}
                    labels={{
                      details: t.common.details,
                      workedOn: t.common.workedOn,
                      tags: project.focus ? t.common.focus : t.common.stack,
                      visitSite: t.common.visitSite,
                      newTab: t.common.newTab,
                    }}
                  />
                  {meta.url && (
                    <ExternalLink
                      href={meta.url}
                      newTabLabel={t.common.newTab}
                      className="text-sm font-medium underline-offset-4 hover:underline"
                    >
                      {t.common.visitSite}
                    </ExternalLink>
                  )}
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      <div className="mt-14 reveal sm:mt-16">
        <h3 className="text-sm font-semibold">{projects.more.title}</h3>
        <ul className="mt-5 grid gap-x-8 gap-y-4 border-t border-border/60 pt-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.more.items.map((site) => (
            <li key={site.url}>
              <ExternalLink
                href={site.url}
                newTabLabel={t.common.newTab}
                className="font-medium underline-offset-4 hover:underline"
              >
                {site.name}
              </ExternalLink>
              <p className="mt-1 text-sm text-pretty text-muted-foreground">{site.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
