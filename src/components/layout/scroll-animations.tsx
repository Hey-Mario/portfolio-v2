"use client"

import { useEffect } from "react"

const STAGGER_MS = 90
const MAX_STAGGER = 4
/** Let React finish hydrating before touching the DOM, or it reports attribute mismatches. */
const HYDRATION_GRACE_MS = 250

/**
 * Fades in every `.reveal` element the first time it scrolls into view. Pick the effect with
 * `data-animate="fadeInLeft"` (defaults to `fadeInUp`). Elements that enter together are
 * staggered. Reduced-motion users get the content immediately.
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

const OFFSET = "1.5rem"

/** Start positions of the Animate.css-style effects used with `data-animate`. */
const from: Record<string, string> = {
  fadeInUp: `translate3d(0, ${OFFSET}, 0)`,
  fadeInLeft: `translate3d(-${OFFSET}, 0, 0)`,
  fadeInRight: `translate3d(${OFFSET}, 0, 0)`,
}

/**
 * Animates with the Web Animations API instead of classes or inline styles: React never sees a
 * changed attribute, so a late hydration pass can't report a mismatch. `fill: "both"` keeps the
 * element visible afterwards (the `.reveal` CSS hides it until then); hover effects use the
 * `translate` property, so the held `transform: none` doesn't block them.
 */
function play(element: HTMLElement, delay: number, duration = 700) {
  element.animate(
    [
      { opacity: 0, transform: from[element.dataset.animate ?? "fadeInUp"] ?? from.fadeInUp },
      { opacity: 1, transform: "none" },
    ],
    { duration, delay, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "both" },
  )
}

function observeReveals(): (() => void) | undefined {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))

  // Reduced motion: the CSS never hides .reveal, so there is nothing to do.
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => play(element, 0, 0))
    return
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
