import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  className?: string
  children: React.ReactNode
}

export function Section({ id, eyebrow, title, intro, className, children }: SectionProps) {
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("border-t border-border/60 py-20 sm:py-28", className)}
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
          {intro && <p className="mt-4 text-lg text-pretty text-muted-foreground">{intro}</p>}
        </header>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  )
}
