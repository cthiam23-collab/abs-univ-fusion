"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const mainNavItems = [
  {
    title: "About",
    href: "/about",
    description: "Learn about our history, mission, and values",
    items: [
      { title: "History", href: "/about/history" },
      { title: "Mission & Values", href: "/about/mission" },
      { title: "Gallery", href: "/gallery" },
      { title: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    title: "Academics",
    href: "/programs",
    description: "Explore our academic programs and opportunities",
    items: [
      { title: "Programs", href: "/programs" },
      { title: "Faculty", href: "/faculty" },
      { title: "Research", href: "/research" },
      { title: "Library", href: "/library" },
    ],
  },
  {
    title: "Student Life",
    href: "/student-life",
    description: "Experience campus life and student activities",
    items: [
      { title: "Campus Life", href: "/student-life" },
      { title: "Events", href: "/events" },
      { title: "Organizations", href: "/student-life/organizations" },
      { title: "Housing", href: "/student-life/housing" },
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
    description: "View our photo collections and memories",
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {mainNavItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.items ? (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    {item.items.map((subItem) => (
                      <li key={subItem.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              pathname === subItem.href && "bg-accent",
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{subItem.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  pathname === item.href && "bg-accent",
                )}
              >
                {item.title}
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
