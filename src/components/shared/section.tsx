import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  className?: string
  /** "muted" paints a soft band behind the section to break up long runs of white. */
  tone?: "default" | "muted"
  children: React.ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  className,
  tone = "default",
  children,
}: SectionProps) {
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "border-t border-border/60 py-12 sm:py-20 lg:py-24",
        tone === "muted" && "bg-muted/70",
        className,
      )}
    >
      <div className="container-page">
        <header className="max-w-2xl reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2
            id={titleId}
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base text-pretty text-muted-foreground sm:text-lg">{intro}</p>
          )}
        </header>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
