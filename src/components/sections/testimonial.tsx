import type { PortfolioContent } from "@/content/types"
import type { Messages } from "@/i18n/messages/en"

type TestimonialProps = { testimonial: PortfolioContent["testimonial"]; t: Messages }

export function Testimonial({ testimonial, t }: TestimonialProps) {
  const [lead, ...rest] = testimonial.quotes
  const quote = (text: string) => `${t.common.openQuote}${text}${t.common.closeQuote}`
  const initials = testimonial.author
    .split(" ")
    .map((part) => part[0])
    .join("")

  return (
    <section
      id="recommendation"
      aria-label={testimonial.eyebrow}
      className="border-t border-border/60 bg-muted/70 py-16 sm:py-20 lg:py-24"
    >
      <figure className="container-page reveal">
        <p className="eyebrow">{testimonial.eyebrow}</p>
        <span
          aria-hidden
          className="mt-6 block font-serif text-7xl leading-none text-brand/30 select-none"
        >
          “
        </span>
        <blockquote className="-mt-2">
          <p className="max-w-4xl text-xl leading-snug font-medium tracking-tight text-balance sm:text-2xl lg:text-3xl">
            {quote(lead)}
          </p>
          <div className="mt-10 grid gap-8 text-pretty text-muted-foreground md:grid-cols-2">
            {rest.map((text) => (
              <p key={text} className="leading-relaxed">
                {quote(text)}
              </p>
            ))}
          </div>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-3">
          <span
            aria-hidden
            className="grid size-10 place-items-center rounded-full bg-foreground font-mono text-xs font-semibold text-background"
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
