"use client"

import { ArrowUpIcon } from "lucide-react"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

/** Show the button once the visitor has scrolled roughly one screen down. */
const SHOW_AFTER_PX = 600

export function ScrollToTop({ label }: { label: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setVisible(window.scrollY > SHOW_AFTER_PX)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    frame = requestAnimationFrame(update)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      // The page's smooth scrolling (and its reduced-motion opt-out) is set on <html> in CSS.
      onClick={() => window.scrollTo({ top: 0 })}
      className={cn(
        "fixed right-4 bottom-4 z-40 grid size-11 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-lg shadow-black/5 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:right-6 sm:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUpIcon aria-hidden className="size-5" />
    </button>
  )
}
