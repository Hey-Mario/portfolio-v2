export type CountValue = {
  /** Text shown before the animated number, plus an optional "+" glued to it. */
  lead: string
  /** The animated number, as written (keeps its decimal separator). */
  number: string
  /** Everything after the number, e.g. " yrs". */
  trail: string
  /** Trailing "+" that belongs to the number visually ("10+"). */
  plus: string
}

/** Splits a stat such as "3.5+ yrs", "+3,5 ans" or "10+" into prefix, number and suffix. */
export function parseCountValue(value: string): CountValue | null {
  const match = /^(\D*?)(\d+(?:[.,]\d+)?)(.*)$/.exec(value)
  if (!match) return null
  const [, lead, number, rest] = match
  const plus = rest.startsWith("+") ? "+" : ""
  return { lead, number, trail: rest.slice(plus.length), plus }
}

/** Formats `value` with the same number of decimals and separator as `template`. */
export function formatCount(value: number, template: string): string {
  const separator = template.includes(",") ? "," : "."
  const decimals = template.split(/[.,]/)[1]?.length ?? 0
  return value.toFixed(decimals).replace(".", separator)
}
