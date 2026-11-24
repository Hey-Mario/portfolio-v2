import { ArrowLeftIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getDictionary, getLocale } from "@/i18n/server"

export default async function NotFound() {
  const [locale, t] = await Promise.all([getLocale(), getDictionary()])

  return (
    <div className="container-page flex flex-col items-start py-32">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">{t.notFound.title}</h1>
      <p className="mt-4 text-muted-foreground">{t.notFound.description}</p>
      <Button asChild variant="outline" className="mt-8">
        <a href={`/${locale}`}>
          <ArrowLeftIcon />
          {t.notFound.backHome}
        </a>
      </Button>
    </div>
  )
}
