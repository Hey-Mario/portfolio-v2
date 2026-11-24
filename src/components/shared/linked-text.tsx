import { splitByLinks } from "@/lib/linkify"

type LinkedTextProps = { text: string; links: Record<string, string>; newTabLabel: string }

/** Renders `text` with known domain names turned into external links. */
export function LinkedText({ text, links, newTabLabel }: LinkedTextProps) {
  return splitByLinks(text, links).map((part, index) =>
    part.href ? (
      <a
        key={index}
        href={part.href}
        target="_blank"
        rel="noreferrer"
        className="text-foreground underline decoration-brand/50 underline-offset-4 transition-colors hover:decoration-brand"
      >
        {part.text}
        <span className="sr-only"> {newTabLabel}</span>
      </a>
    ) : (
      part.text
    ),
  )
}
