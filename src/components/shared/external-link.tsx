import { ArrowUpRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type ExternalLinkProps = React.ComponentProps<"a"> & {
  newTabLabel: string
  showIcon?: boolean
}

export function ExternalLink({
  newTabLabel,
  showIcon = true,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    >
      {children}
      {showIcon && <ArrowUpRightIcon aria-hidden className="size-3.5" />}
      <span className="sr-only">{newTabLabel}</span>
    </a>
  )
}
