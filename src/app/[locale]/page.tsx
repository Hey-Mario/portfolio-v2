import { sectionIds } from "@/lib/site"
import { getDictionary } from "@/i18n/server"

// Temporary shell preview — replaced section by section in the next steps.
export default async function HomePage() {
  const t = await getDictionary()

  return (
    <div className="container-page">
      <section className="py-24">
        <p className="eyebrow">Portfolio · 2026</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {t.meta.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
          {t.meta.description}
        </p>
      </section>
      {sectionIds.map((id, index) => (
        <section key={id} id={id} className="border-t border-border/60 py-24">
          <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{t.nav[id]}</h2>
        </section>
      ))}
    </div>
  )
}
