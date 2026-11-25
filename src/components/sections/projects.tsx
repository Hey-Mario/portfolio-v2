import {
  GavelIcon,
  GlobeIcon,
  GraduationCapIcon,
  StoreIcon,
  SunIcon,
  WorkflowIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react"

import Image from "next/image"

import { ExternalLink } from "@/components/shared/external-link"
import { Section } from "@/components/shared/section"
import { TechList } from "@/components/shared/tech-list"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projectMeta, type ProjectId, type ProjectStatus } from "@/content/meta"
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

const projectIcons: Record<ProjectId, LucideIcon> = {
  lavanty: GavelIcon,
  akademika: GraduationCapIcon,
  pvgis: SunIcon,
  "solar-rent": ZapIcon,
  "solar-advisor": StoreIcon,
  sfer: WorkflowIcon,
  "pyxis-site": GlobeIcon,
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

/** A screenshot in a light browser frame; projects without a public site get a placeholder. */
function Screenshot({
  src,
  alt,
  icon: Icon,
  priority = false,
  className,
}: {
  src?: string
  alt?: string
  icon: LucideIcon
  priority?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border/80 bg-muted shadow-sm",
        className,
      )}
    >
      <div aria-hidden className="flex gap-1.5 border-b border-border/80 bg-card px-3 py-2">
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
        <span className="size-2 rounded-full bg-border" />
      </div>
      <div className="relative aspect-16/10 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 560px, (min-width: 768px) 45vw, 85vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
          />
        ) : (
          <div
            aria-hidden
            className="grid size-full place-items-center bg-linear-to-br from-brand/15 via-brand/5 to-transparent"
          >
            <Icon className="size-12 text-brand" strokeWidth={1.5} />
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects({ locale, projects, t }: ProjectsProps) {
  return (
    <Section
      id="projects"
      className="contain-paint"
      eyebrow={projects.eyebrow}
      title={projects.title}
      intro={projects.intro}
    >
      <ul
        tabIndex={0}
        aria-label={projects.title}
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-4 reveal sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:snap-none md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0"
      >
        {projects.items.map((project, index) => {
          const meta = projectMeta[project.id]
          const featured = index === 0
          const tags = project.focus ?? meta.stack
          const Icon = projectIcons[project.id]
          return (
            <li
              key={project.id}
              className={cn(
                "w-[85%] shrink-0 snap-center sm:w-[60%] md:w-auto",
                featured && "md:col-span-2",
              )}
            >
              <article
                className={cn(
                  "group relative flex h-full flex-col gap-6 rounded-2xl border border-border/80 bg-card p-6 transition duration-300 hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5 sm:p-8",
                  featured && "md:grid md:grid-cols-[1fr_1.1fr] md:items-center md:gap-10",
                )}
              >
                {!featured && <Screenshot src={meta.image} alt={project.imageAlt} icon={Icon} />}
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-3">
                    <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                      <span className="text-brand">{String(index + 1).padStart(2, "0")}</span>
                      <span aria-hidden className="h-px w-6 bg-border" />
                      <span>{project.category}</span>
                    </p>
                    <StatusBadge status={meta.status} label={t.status[meta.status]} />
                  </div>
                  <h3
                    className={cn(
                      "mt-6 flex items-center gap-3 text-xl font-semibold tracking-tight sm:text-2xl",
                      featured && "md:text-3xl",
                    )}
                  >
                    <Icon aria-hidden className="size-5 shrink-0 text-brand" />
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
                  <div className="mt-6 border-t border-border/60 pt-5">
                    <TechList items={tags} plain={!!project.focus} />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
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
                      <Button asChild variant="ghost" size="sm" className="pointer-coarse:h-11">
                        <ExternalLink href={meta.url} newTabLabel={t.common.newTab}>
                          {t.common.visitSite}
                        </ExternalLink>
                      </Button>
                    )}
                  </div>
                </div>
                {featured && <Screenshot src={meta.image} alt={project.imageAlt} icon={Icon} />}
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
                className="font-medium underline-offset-4 hover:underline pointer-coarse:py-2.5"
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
