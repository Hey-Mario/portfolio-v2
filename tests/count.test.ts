import { describe, expect, it } from "vitest"

import { formatCount, parseCountValue } from "@/lib/count"

describe("parseCountValue", () => {
  it("splits an English stat with a suffix", () => {
    expect(parseCountValue("3.5+ yrs")).toEqual({
      lead: "",
      number: "3.5",
      plus: "+",
      trail: " yrs",
    })
  })

  it("splits a French stat with a leading plus and decimal comma", () => {
    expect(parseCountValue("+3,5 ans")).toEqual({
      lead: "+",
      number: "3,5",
      plus: "",
      trail: " ans",
    })
  })

  it("handles bare numbers and trailing plus", () => {
    expect(parseCountValue("6")).toEqual({ lead: "", number: "6", plus: "", trail: "" })
    expect(parseCountValue("10+")).toEqual({ lead: "", number: "10", plus: "+", trail: "" })
  })

  it("returns null when there is no number", () => {
    expect(parseCountValue("many")).toBeNull()
  })
})

describe("formatCount", () => {
  it("keeps the decimals and separator of the template", () => {
    expect(formatCount(1.25, "3.5")).toBe("1.3")
    expect(formatCount(1.25, "3,5")).toBe("1,3")
    expect(formatCount(7.4, "10")).toBe("7")
  })
})
