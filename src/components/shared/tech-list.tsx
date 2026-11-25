import { TechIcon } from "@/components/shared/tech-icon"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function TechList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item}>
          <Badge variant="secondary" className="gap-1.5 font-normal">
            <TechIcon name={item} />
            {item}
          </Badge>
        </li>
      ))}
    </ul>
  )
}
