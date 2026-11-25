import { cacheLife } from "next/cache"

import type { Messages } from "@/i18n/messages/en"
import { siteConfig } from "@/lib/site"

async function getCurrentYear() {
  "use cache"
  cacheLife("days")
  return new Date().getFullYear()
}

export async function SiteFooter({ t }: { t: Messages }) {
  const year = await getCurrentYear()

  return (
    <footer className="border-t border-border/60">
      <div className="container-page flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.shortName}
        </p>
        <p>
          {t.footer.builtWith}{" "}
          <a
            href={siteConfig.links.source}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {t.footer.viewSource}
          </a>
        </p>
      </div>
    </footer>
  )
}
