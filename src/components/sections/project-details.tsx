"use client"

import { ArrowUpRightIcon } from "lucide-react"

import { TechList } from "@/components/shared/tech-list"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type ProjectDetailsProps = {
  name: string
  category: string
  role: string
  period: string
  summary: string
  highlights: string[]
  tags: string[]
  url?: string
  note?: string
  labels: { details: string; workedOn: string; tags: string; visitSite: string; newTab: string }
}

export function ProjectDetails(props: ProjectDetailsProps) {
  const { name, category, role, period, summary, highlights, tags, url, note, labels } = props

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="pointer-coarse:h-11"
          aria-label={`${labels.details}: ${name}`}
        >
          {labels.details}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader className="gap-2 px-6 pt-8">
          <p className="eyebrow">{category}</p>
          <SheetTitle className="text-2xl font-semibold tracking-tight">{name}</SheetTitle>
          <p className="text-sm text-muted-foreground">
            {role} · {period}
          </p>
          <SheetDescription className="pt-2 text-base leading-relaxed text-pretty">
            {summary}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-8 px-6 pb-10">
          <section>
            <h3 className="text-sm font-semibold">{labels.workedOn}</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-pretty text-muted-foreground">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-5 leading-relaxed before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-brand/70"
                >
                  {highlight}
                </li>
              ))}
            </ul>
            {note && <p className="mt-4 text-xs text-muted-foreground italic">{note}</p>}
          </section>

          <section>
            <h3 className="text-sm font-semibold">{labels.tags}</h3>
            <TechList items={tags} className="mt-3" />
          </section>

          {url && (
            <Button asChild>
              <a href={url} target="_blank" rel="noreferrer">
                {labels.visitSite}
                <ArrowUpRightIcon />
                <span className="sr-only">{labels.newTab}</span>
              </a>
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
