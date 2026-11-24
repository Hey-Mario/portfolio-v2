"use client"

import { useEffect, useState } from "react"

type NavLinksProps = { items: { href: string; label: string }[] }

/** Desktop navigation that marks the section currently being read. */
export function NavLinks({ items }: NavLinksProps) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const ids = items.map((item) => item.href.slice(1))
    let frame = 0

    const update = () => {
      frame = 0
      // The active section is the last one whose top has crossed the sticky header.
      let current: string | null = null
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= 120) current = id
      }
      setActive(current)
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
  }, [items])

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            aria-current={active === item.href.slice(1) ? "true" : undefined}
            className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform hover:text-foreground aria-[current=true]:text-foreground aria-[current=true]:after:scale-x-100"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
