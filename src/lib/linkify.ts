export type TextPart = { text: string; href?: string }

/** Maps "example.com" → "https://example.com" for a list of site URLs. */
export function linkMap(urls: string[]): Record<string, string> {
  return Object.fromEntries(urls.map((url) => [new URL(url).hostname.replace(/^www\./, ""), url]))
}

/**
 * Splits `text` so every occurrence of a known domain becomes a link part.
 * The text itself is left untouched.
 */
export function splitByLinks(text: string, links: Record<string, string>): TextPart[] {
  const domains = Object.keys(links)
  const parts: TextPart[] = []
  let rest = text

  while (rest) {
    let match: { index: number; domain: string } | null = null
    for (const domain of domains) {
      const index = rest.indexOf(domain)
      if (index === -1) continue
      if (
        !match ||
        index < match.index ||
        (index === match.index && domain.length > match.domain.length)
      ) {
        match = { index, domain }
      }
    }

    if (!match) {
      parts.push({ text: rest })
      break
    }
    if (match.index > 0) parts.push({ text: rest.slice(0, match.index) })
    parts.push({ text: match.domain, href: links[match.domain] })
    rest = rest.slice(match.index + match.domain.length)
  }

  return parts
}
