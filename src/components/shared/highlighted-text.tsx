import { splitHighlights } from "@/lib/highlight"

/** Renders `text` with the given terms picked out in the brand gradient. */
export function HighlightedText({ text, terms }: { text: string; terms: string[] }) {
  return splitHighlights(text, terms).map((part, index) =>
    part.highlighted ? (
      <span
        key={index}
        className="bg-linear-to-r from-brand to-blue-600 box-decoration-clone bg-clip-text text-transparent dark:to-sky-400"
      >
        {part.text}
      </span>
    ) : (
      part.text
    ),
  )
}
