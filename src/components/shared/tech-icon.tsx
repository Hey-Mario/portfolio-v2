import {
  AccessibilityIcon,
  BotIcon,
  CodeXmlIcon,
  DatabaseIcon,
  FileTextIcon,
  GaugeIcon,
  LanguagesIcon,
  PlugIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TestTubeIcon,
  type LucideIcon,
} from "lucide-react"

import { techIcons } from "@/lib/tech-icons"
import { cn } from "@/lib/utils"

/** Practices and tools without a brand mark get a neutral pictogram instead. */
const pictograms: [RegExp, LucideIcon][] = [
  [/playwright/i, TestTubeIcon],
  [/axe|accessib/i, AccessibilityIcon],
  [/sql|data|donn/i, DatabaseIcon],
  [/rest|api|websocket/i, PlugIcon],
  [/i18n|rtl/i, LanguagesIcon],
  [/seo/i, SearchIcon],
  [/secur|sécur/i, ShieldCheckIcon],
  [/perform/i, GaugeIcon],
  [/spec|sp[ée]cif/i, FileTextIcon],
  [/\bai\b|\bia\b/i, SparklesIcon],
  [/gotenberg|pdf/i, FileTextIcon],
  [/bot/i, BotIcon],
]

function brandFor(name: string) {
  if (techIcons[name]) return techIcons[name]
  if (/^zod|zod$/i.test(name)) return techIcons.Zod
  if (/^git\b/i.test(name)) return techIcons["Git & code review"]
  return undefined
}

const isDark = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => Number.parseInt(hex.slice(i, i + 2), 16) / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.35
}

/** A small, decorative mark for a technology. The label next to it carries the meaning. */
export function TechIcon({ name, className }: { name: string; className?: string }) {
  const brand = brandFor(name)
  if (brand) {
    const [path, hex] = brand
    return (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="currentColor"
        className={cn("size-3.5 shrink-0", isDark(hex) && "text-foreground", className)}
        // Near-black logos (Next.js, Vercel…) follow the text colour so they stay visible in dark mode.
        style={isDark(hex) ? undefined : { color: `#${hex}` }}
      >
        <path d={path} />
      </svg>
    )
  }
  const Pictogram = pictograms.find(([re]) => re.test(name))?.[1] ?? CodeXmlIcon
  return (
    <Pictogram aria-hidden className={cn("size-3.5 shrink-0 text-muted-foreground", className)} />
  )
}
