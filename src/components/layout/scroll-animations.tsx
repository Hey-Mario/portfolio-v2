"use client"

import { useEffect } from "react"

const STAGGER_MS = 90
const MAX_STAGGER = 4
/** Let React finish hydrating before touching the DOM, or it reports attribute mismatches. */
const HYDRATION_GRACE_MS = 250

/**
 * Plays an Animate.css animation on every `.reveal` element the first time it scrolls into view.
 * Pick the effect with `data-animate="fadeInLeft"` (defaults to `fadeInUp`). Elements that
 * enter together are staggered. Once finished, the animation classes are removed so hover
 * transforms keep working. Reduced-motion users get the content immediately.
 */
export function ScrollAnimations() {
  useEffect(() => {
    let stop: (() => void) | undefined
    let timer = 0
    const start = () => {
      timer = window.setTimeout(() => {
        stop = observeReveals()
      }, HYDRATION_GRACE_MS)
    }

    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })

    return () => {
      window.removeEventListener("load", start)
      window.clearTimeout(timer)
      stop?.()
    }
  }, [])

  return null
}

function observeReveals(): (() => void) | undefined {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
  const reveal = (element: HTMLElement) => element.setAttribute("data-revealed", "")

  if (
    matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    elements.forEach(reveal)
    return
  }

  const play = (element: HTMLElement, delay: number) => {
    const classes = ["animated", element.dataset.animate ?? "fadeInUp"]
    element.style.animationDelay = `${delay}ms`
    element.classList.add(...classes)
    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove(...classes)
        element.style.animationDelay = ""
        reveal(element)
      },
      { once: true },
    )
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        .forEach((entry, index) => {
          observer.unobserve(entry.target)
          play(entry.target as HTMLElement, Math.min(index, MAX_STAGGER) * STAGGER_MS)
        })
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  )

  elements.forEach((element) => observer.observe(element))
  return () => observer.disconnect()
}
