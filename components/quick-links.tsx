import Link from "next/link"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Camera, GraduationCap, Users, Calendar, Building } from "lucide-react"

const quickLinks = [
  {
    icon: BookOpen,
    label: "Academic Programs",
    href: "/programs",
  },
  {
    icon: Camera,
    label: "Photo Gallery",
    href: "/gallery",
  },
  {
    icon: GraduationCap,
    label: "Student Life",
    href: "/student-life",
  },
  {
    icon: Users,
    label: "Alumni",
    href: "/alumni",
  },
  {
    icon: Calendar,
    label: "Events",
    href: "/events",
  },
  {
    icon: Building,
    label: "Campus Tour",
    href: "/campus",
  },
]

export function QuickLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {quickLinks.map((link, index) => (
        <Link key={index} href={link.href}>
          <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
            <CardHeader className="text-center">
              <link.icon className="w-6 h-6 mx-auto mb-2" />
              <CardTitle className="text-sm">{link.label}</CardTitle>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}
