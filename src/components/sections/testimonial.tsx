import type { PortfolioContent } from "@/content/types"

type TestimonialProps = { testimonial: PortfolioContent["testimonial"] }

export function Testimonial({ testimonial }: TestimonialProps) {
  const [lead] = testimonial.quotes
  const initials = testimonial.author
    .split(" ")
    .map((part) => part[0])
    .join("")

  return (
    <section
      id="recommendation"
      aria-label={testimonial.eyebrow}
      className="border-t border-border/60 bg-muted/70 py-14 sm:py-16 lg:py-20"
    >
      <figure className="container-page grid gap-10 reveal lg:grid-cols-[1fr_18rem] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">{testimonial.eyebrow}</p>
          <span
            aria-hidden
            className="mt-6 block font-serif text-7xl leading-none text-brand/30 select-none"
          >
            “
          </span>
          <blockquote className="-mt-2">
            <p className="text-xl leading-snug font-medium tracking-tight text-balance sm:text-2xl lg:text-3xl">
              {lead}
            </p>
          </blockquote>
        </div>
        <figcaption className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card p-5">
          <span
            aria-hidden
            className="grid size-11 shrink-0 place-items-center rounded-full bg-foreground font-mono text-xs font-semibold text-background"
          >
            {initials}
          </span>
          <span>
            <span className="block font-semibold">{testimonial.author}</span>
            <span className="block text-sm text-muted-foreground">
              {testimonial.role}
              {testimonial.translated && <> · {testimonial.translated}</>}
            </span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}
