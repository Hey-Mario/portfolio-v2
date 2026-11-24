import type { Locale } from "@/i18n/config"

import { en } from "./en"
import { fr } from "./fr"
import type { PortfolioContent } from "./types"

const content: Record<Locale, PortfolioContent> = { en, fr }

export function getContent(locale: Locale): PortfolioContent {
  return content[locale]
}

export * from "./meta"
export type * from "./types"
