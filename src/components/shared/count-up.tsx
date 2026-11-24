"use client"

import { useEffect, useRef } from "react"

import { formatCount, parseCountValue } from "@/lib/count"

const DURATION_MS = 1600

/**
 * Renders a stat such as "3.5+ yrs" and counts its number up from zero the first time it is on
 * screen. The server renders the final value, so it reads fine without JavaScript or with
 * reduced motion.
 */
export function CountUp({ value }: { value: string }) {
  const parsed = parseCountValue(value)
  const numberRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = numberRef.current
    if (!element || !parsed) return
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const target = Number.parseFloat(parsed.number.replace(",", "."))
    let frame = 0
    element.textContent = formatCount(0, parsed.number)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION_MS, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          element.textContent = formatCount(target * eased, parsed.number)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      element.textContent = parsed.number
    }
    // `parsed` is derived from `value` and re-created each render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (!parsed) return <>{value}</>

  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden className="tabular-nums">
        {parsed.lead}
        <span ref={numberRef}>{parsed.number}</span>
        {parsed.plus}
        {parsed.trail && (
          <span className="ml-1 text-xl font-medium text-muted-foreground lg:text-2xl">
            {parsed.trail.trim()}
          </span>
        )}
      </span>
    </>
  )
}
