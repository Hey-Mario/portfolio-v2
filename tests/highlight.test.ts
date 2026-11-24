import { describe, expect, it } from "vitest"

import { en } from "@/content/en"
import { fr } from "@/content/fr"
import { splitHighlights } from "@/lib/highlight"

describe("splitHighlights", () => {
  it("flags the terms and keeps the rest of the sentence", () => {
    expect(
      splitHighlights("I build SaaS and marketplace platforms.", ["SaaS", "marketplace"]),
    ).toEqual([
      { text: "I build ", highlighted: false },
      { text: "SaaS", highlighted: true },
      { text: " and ", highlighted: false },
      { text: "marketplace", highlighted: true },
      { text: " platforms.", highlighted: false },
    ])
  })

  it("prefers the longest matching term", () => {
    const parts = splitHighlights("des marketplaces", ["marketplace", "marketplaces"])
    expect(parts.filter((part) => part.highlighted).map((part) => part.text)).toEqual([
      "marketplaces",
    ])
  })

  it("returns the text untouched without terms", () => {
    expect(splitHighlights("hello", [])).toEqual([{ text: "hello", highlighted: false }])
  })

  it("finds every hero highlight in the hero title, in both languages", () => {
    for (const { hero } of [en, fr]) {
      for (const term of hero.highlights) expect(hero.title).toContain(term)
    }
  })
})
