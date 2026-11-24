import { MailIcon, MessageCircleIcon } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons"
import { Section } from "@/components/shared/section"
import type { PortfolioContent } from "@/content/types"
import type { Messages } from "@/i18n/messages/en"
import { siteConfig } from "@/lib/site"

import { ContactForm } from "./contact-form"

type ContactProps = { contact: PortfolioContent["contact"]; t: Messages }

export function Contact({ contact, t }: ContactProps) {
  const { links } = siteConfig
  const direct = [
    {
      icon: MailIcon,
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      icon: MessageCircleIcon,
      label: `WhatsApp · ${siteConfig.phone}`,
      href: links.whatsapp,
      external: true,
    },
    { icon: GitHubIcon, label: "github.com/Hey-Mario", href: links.github, external: true },
    ...(links.linkedin
      ? [{ icon: LinkedInIcon, label: t.social.linkedin, href: links.linkedin, external: true }]
      : []),
  ]

  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="reveal">
          <h3 className="text-sm font-semibold">{t.contactForm.direct}</h3>
          <ul className="mt-5 space-y-3">
            {direct.map(({ icon: Icon, label, href, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon aria-hidden className="size-4 shrink-0" />
                  <span>{label}</span>
                  {external && <span className="sr-only">{t.common.newTab}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative reveal rounded-xl border border-border/80 bg-card p-6 sm:p-8">
          <ContactForm labels={t.contactForm} />
        </div>
      </div>
    </Section>
  )
}
