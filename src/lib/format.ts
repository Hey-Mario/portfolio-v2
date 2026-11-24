import type { Locale } from "@/i18n/config"
import type { Period, YearMonth } from "@/content/meta"

function toDate(value: YearMonth) {
  const [year, month] = value.split("-").map(Number)
  return new Date(Date.UTC(year, month - 1, 1))
}

/** "Oct 2026 – Present" / "oct. 2026 – aujourd'hui" */
export function formatPeriod(period: Period, locale: Locale, presentLabel: string) {
  const format = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
  const start = format.format(toDate(period.start))
  if (period.end === period.start) return start
  const end = period.end ? format.format(toDate(period.end)) : presentLabel
  return `${start} – ${end}`
}
