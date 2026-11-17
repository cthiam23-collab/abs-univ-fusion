import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
}

export function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
      <Link href="/" className="hover:text-primary flex items-center">
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link href={item.href} className="hover:text-primary">
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}
