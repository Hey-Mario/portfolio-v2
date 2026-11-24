import { describe, expect, it } from "vitest"

import { linkMap, splitByLinks } from "@/lib/linkify"

const links = linkMap(["https://msdg.mu", "https://solarpool.mu/", "https://www.mbs467.mu"])

describe("linkMap", () => {
  it("keys URLs by bare hostname", () => {
    expect(links).toEqual({
      "msdg.mu": "https://msdg.mu",
      "solarpool.mu": "https://solarpool.mu/",
      "mbs467.mu": "https://www.mbs467.mu",
    })
  })
})

describe("splitByLinks", () => {
  it("links every known domain and keeps the text identical", () => {
    const text = "Other live sites: solarpool.mu, msdg.mu, mbs467.mu."
    const parts = splitByLinks(text, links)
    expect(parts.map((part) => part.text).join("")).toBe(text)
    expect(parts.filter((part) => part.href).map((part) => part.text)).toEqual([
      "solarpool.mu",
      "msdg.mu",
      "mbs467.mu",
    ])
  })

  it("returns the text untouched when nothing matches", () => {
    expect(splitByLinks("Built with Next.js", links)).toEqual([{ text: "Built with Next.js" }])
  })
})
