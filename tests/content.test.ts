import { describe, expect, it } from "vitest"

import { en } from "@/content/en"
import { fr } from "@/content/fr"
import { experienceMeta, projectMeta } from "@/content/meta"
import { formatPeriod } from "@/lib/format"

describe("portfolio content", () => {
  it("lists the same experiences and projects, in the same order, in every locale", () => {
    expect(fr.experience.items.map((item) => item.id)).toEqual(
      en.experience.items.map((item) => item.id),
    )
    expect(fr.projects.items.map((item) => item.id)).toEqual(
      en.projects.items.map((item) => item.id),
    )
  })

  it("has metadata for every experience and project", () => {
    expect(new Set(en.experience.items.map((item) => item.id))).toEqual(
      new Set(Object.keys(experienceMeta)),
    )
    expect(new Set(en.projects.items.map((item) => item.id))).toEqual(
      new Set(Object.keys(projectMeta)),
    )
  })

  it("gives every project either a tech stack or localized focus tags", () => {
    for (const locale of [en, fr]) {
      for (const project of locale.projects.items) {
        const tags = project.focus ?? projectMeta[project.id].stack
        expect(tags.length, project.id).toBeGreaterThan(0)
      }
    }
  })

  it("describes every project screenshot in every locale", () => {
    for (const locale of [en, fr]) {
      for (const project of locale.projects.items) {
        if (projectMeta[project.id].image) expect(project.imageAlt, project.id).toBeTruthy()
      }
    }
  })

  it("keeps lists aligned between locales", () => {
    expect(fr.stats).toHaveLength(en.stats.length)
    expect(fr.testimonial.quotes).toHaveLength(en.testimonial.quotes.length)
    expect(fr.projects.more.items.map((site) => site.url)).toEqual(
      en.projects.more.items.map((site) => site.url),
    )
    expect(fr.education.awards).toHaveLength(en.education.awards.length)
    en.projects.items.forEach((project, index) => {
      expect(fr.projects.items[index].highlights).toHaveLength(project.highlights.length)
    })
  })
})

describe("formatPeriod", () => {
  it("formats a closed period", () => {
    expect(formatPeriod({ start: "2024-09", end: "2025-04" }, "en", "Present")).toBe(
      "Sep 2024 – Apr 2025",
    )
  })

  it("uses the present label for an open period", () => {
    expect(formatPeriod({ start: "2026-10" }, "fr", "aujourd'hui")).toBe("oct. 2026 – aujourd'hui")
  })

  it("collapses a single-month period", () => {
    expect(formatPeriod({ start: "2026-10", end: "2026-10" }, "en", "Present")).toBe("Oct 2026")
  })
})
