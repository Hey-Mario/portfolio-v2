import { Section } from "@/components/shared/section"
import { SocialLinks } from "@/components/shared/social-links"
import type { PortfolioContent } from "@/content/types"
import type { Messages } from "@/i18n/messages/en"
import { siteConfig } from "@/lib/site"

type ContactProps = { contact: PortfolioContent["contact"]; t: Messages }

export function Contact({ contact, t }: ContactProps) {
  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title} intro={contact.intro}>
      <div className="reveal space-y-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-xl font-medium underline-offset-4 hover:underline sm:text-2xl"
        >
          {siteConfig.email}
        </a>
        <SocialLinks t={t} className="-ml-2" />
      </div>
    </Section>
  )
}
