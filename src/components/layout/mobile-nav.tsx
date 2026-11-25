"use client"

import { DownloadIcon, MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type MobileNavProps = {
  items: { href: string; label: string }[]
  cv: { href: string; label: string }
  labels: { open: string; title: string }
}

export function MobileNav({ items, cv, labels }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="lg:hidden pointer-coarse:size-11"
          aria-label={labels.open}
        >
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 px-6 pt-14">
        <SheetTitle className="sr-only">{labels.title}</SheetTitle>
        <nav aria-label={labels.title}>
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <a
                    href={item.href}
                    className="block rounded-md px-2 py-2 text-base font-medium transition-colors hover:bg-muted"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild className="mt-4">
          <a href={cv.href} download>
            <DownloadIcon />
            {cv.label}
          </a>
        </Button>
      </SheetContent>
    </Sheet>
  )
}
