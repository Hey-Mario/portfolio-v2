import { ArrowUpRightIcon, MailIcon, MapPinIcon, MessageCircleIcon } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons"
import { Section } from "@/components/shared/section"
import type { PortfolioContent } from "@/content/types"
import type { Messages } from "@/i18n/messages/en"
import { siteConfig } from "@/lib/site"

import { ContactForm } from "./contact-form"

type ContactProps = {
  contact: PortfolioContent["contact"]
  hero: PortfolioContent["hero"]
  t: Messages
}

export function Contact({ contact, hero, t }: ContactProps) {
  const { links } = siteConfig
  const direct = [
    {
      icon: MailIcon,
      title: t.social.email,
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      icon: MessageCircleIcon,
      title: t.social.whatsapp,
      label: siteConfig.phone,
      href: links.whatsapp,
      external: true,
    },
    {
      icon: LinkedInIcon,
      title: t.social.linkedin,
      label: "Mario Randriamanantena",
      href: links.linkedin,
      external: true,
    },
    {
      icon: GitHubIcon,
      title: t.social.github,
      label: "github.com/Hey-Mario",
      href: links.github,
      external: true,
    },
  ].filter((item) => item.href)

  return (
    <Section
      id="contact"
      tone="muted"
      eyebrow={contact.eyebrow}
      title={contact.title}
      intro={contact.intro}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
        <div data-animate="fadeInLeft" className="reveal">
          <h3 className="text-sm font-semibold">{t.contactForm.direct}</h3>
          <ul className="mt-4 grid gap-3">
            {direct.map(({ icon: Icon, title, label, href, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-border/80 bg-card p-3.5 transition duration-300 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 sm:p-4"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-muted-foreground">{title}</span>
                    <span className="block truncate font-medium">{label}</span>
                  </span>
                  <ArrowUpRightIcon
                    aria-hidden
                    className="size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  />
                  {external && <span className="sr-only">{t.common.newTab}</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPinIcon aria-hidden className="size-4 shrink-0" />
              {hero.location}
            </p>
          </div>
        </div>

        <div
          data-animate="fadeInRight"
          className="relative rounded-2xl border border-border/80 bg-card p-6 reveal shadow-sm sm:p-8 lg:self-start"
        >
          <ContactForm labels={t.contactForm} />
        </div>
      </div>
    </Section>
  )
}
