"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const mainNavItems = [
    {
      title: "About",
      href: "/about",
      items: [
        { title: "History", href: "/about/history" },
        { title: "Mission & Values", href: "/about/mission" },
        { title: "Gallery", href: "/gallery" },
        { title: "Leadership", href: "/about/leadership" },
      ],
    },
    // ... same items as MainNav
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          {mainNavItems.map((item) => (
            <div key={item.href} className="space-y-2">
              <Link
                href={item.href}
                className={cn("text-lg font-medium hover:text-primary", pathname === item.href && "text-primary")}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
              {item.items && (
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn("block text-sm hover:text-primary", pathname === subItem.href && "text-primary")}
                      onClick={() => setOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
