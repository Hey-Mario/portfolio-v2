import { notFound } from "next/navigation"
import { locale as localeParam } from "next/root-params"

import { isLocale, type Locale } from "./config"
import { en, type Messages } from "./messages/en"
import { fr } from "./messages/fr"

const dictionaries: Record<Locale, Messages> = { en, fr }

/** Current locale, read from the `[locale]` root segment. Server-only. */
export async function getLocale(): Promise<Locale> {
  const value = await localeParam()
  if (!isLocale(value)) notFound()
  return value
}

/** UI strings for the current locale. Server-only. */
export async function getDictionary(): Promise<Messages> {
  return dictionaries[await getLocale()]
}
