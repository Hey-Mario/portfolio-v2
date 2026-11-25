import { TechIcon } from "@/components/shared/tech-icon"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type TechListProps = {
  items: string[]
  className?: string
  /** Plain tags (product features, not technologies) get no icon. */
  plain?: boolean
}

export function TechList({ items, className, plain = false }: TechListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item}>
          <Badge variant="secondary" className="gap-1.5 font-normal">
            {!plain && <TechIcon name={item} />}
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
