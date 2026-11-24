export type TextPart = { text: string; highlighted: boolean }

/** Splits `text` so that every occurrence of one of `terms` is flagged as highlighted. */
export function splitHighlights(text: string, terms: string[]): TextPart[] {
  if (terms.length === 0) return [{ text, highlighted: false }]
  const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  // Longest terms first so "marketplaces" wins over "marketplace".
  escaped.sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`(${escaped.join("|")})`, "g")
  return text
    .split(pattern)
    .filter(Boolean)
    .map((part) => ({ text: part, highlighted: terms.includes(part) }))
}
