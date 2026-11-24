import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Services } from "@/components/sections/services"
import { Skills } from "@/components/sections/skills"
import { Testimonial } from "@/components/sections/testimonial"
import { getContent } from "@/content"
import { getDictionary, getLocale } from "@/i18n/server"
import { personJsonLd, serializeJsonLd } from "@/lib/seo"

export default async function HomePage() {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()])
  const content = getContent(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd(locale, content)) }}
      />
      <Hero locale={locale} hero={content.hero} stats={content.stats} t={t} />
      <About about={content.about} />
      <Services services={content.services} />
      <Experience locale={locale} experience={content.experience} t={t} />
      <Projects locale={locale} projects={content.projects} t={t} />
      <Testimonial testimonial={content.testimonial} t={t} />
      <Skills skills={content.skills} />
      <Education education={content.education} t={t} />
      <Contact contact={content.contact} t={t} />
    </>
  )
}
