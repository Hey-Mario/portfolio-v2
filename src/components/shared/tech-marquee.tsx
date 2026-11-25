import { cn } from "@/lib/utils"

/** A slow, endless strip of the tools I use. Decorative: the full list lives in Skills. */
export function TechMarquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="marquee-track flex shrink-0 items-center gap-3 pr-3"
    >
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border/80 bg-card px-3.5 py-1.5 font-mono text-xs whitespace-nowrap text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-border/60 bg-muted/40 marquee py-4",
        className,
      )}
    >
      <div className="flex w-max marquee-move">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
