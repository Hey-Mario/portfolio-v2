import { describe, expect, it } from "vitest"

import { languageAlternates, serializeJsonLd } from "@/lib/seo"

describe("seo helpers", () => {
  it("builds hreflang alternates with an x-default", () => {
    expect(languageAlternates()).toEqual({ en: "/en", fr: "/fr", "x-default": "/en" })
  })

  it("escapes < so JSON-LD cannot break out of its script tag", () => {
    const out = serializeJsonLd({ name: "</script><script>alert(1)</script>" })
    expect(out).not.toContain("<")
    expect(JSON.parse(out)).toEqual({ name: "</script><script>alert(1)</script>" })
  })
})
