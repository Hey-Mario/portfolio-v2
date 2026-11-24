import { MailIcon, MessageCircleIcon } from "lucide-react"

import type { Messages } from "@/i18n/messages/en"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

import { GitHubIcon, LinkedInIcon } from "./brand-icons"

export function getSocialLinks(t: Messages) {
  const { links, email } = siteConfig
  return [
    { label: t.social.email, href: `mailto:${email}`, icon: MailIcon, external: false },
    { label: t.social.github, href: links.github, icon: GitHubIcon, external: true },
    ...(links.linkedin
      ? [{ label: t.social.linkedin, href: links.linkedin, icon: LinkedInIcon, external: true }]
      : []),
    { label: t.social.whatsapp, href: links.whatsapp, icon: MessageCircleIcon, external: true },
  ]
}

export function SocialLinks({ t, className }: { t: Messages; className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {getSocialLinks(t).map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            aria-label={external ? `${label} ${t.common.newTab}` : label}
            title={label}
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  )
}
