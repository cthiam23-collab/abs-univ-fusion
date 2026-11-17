"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
  FileText,
  Calendar,
  CheckSquare,
  DollarSign,
  Library,
  Mail,
  Package,
  BarChart3,
  Settings,
  Building,
  UserCheck,
  Bus,
  UserCog,
  Home,
  Bell,
  Shield,
  ArrowLeft,
} from "lucide-react"

const navSections = [
  {
    label: "Overview",
    items: [
      { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "People",
    items: [
      { href: "/admin/students/manage", label: "Students", icon: Users },
      { href: "/admin/teachers/manage", label: "Teachers", icon: GraduationCap },
      { href: "/admin/parents", label: "Parents/Guardians", icon: UserCog },
      { href: "/admin/users", label: "User Accounts", icon: Shield },
    ],
  },
  {
    label: "Academic",
    items: [
      { href: "/admin/classes/manage", label: "Classes", icon: Building },
      { href: "/admin/courses", label: "Courses", icon: BookOpen },
      { href: "/admin/grades/manage", label: "Grades", icon: ClipboardList },
      { href: "/admin/exams/manage", label: "Exams", icon: FileText },
      { href: "/admin/schedule", label: "Schedule", icon: Calendar },
      { href: "/admin/attendance", label: "Attendance", icon: CheckSquare },
    ],
  },
  {
    label: "Administration",
    items: [
      { href: "/admin/finance/fees", label: "Finance & Fees", icon: DollarSign },
      { href: "/admin/assets", label: "Assets", icon: Package },
      { href: "/admin/library/manage", label: "Library", icon: Library },
      { href: "/admin/transport", label: "Transport", icon: Bus },
      { href: "/admin/hostel", label: "Hostel", icon: Home },
      { href: "/admin/admissions", label: "Admissions", icon: UserCheck },
    ],
  },
  {
    label: "Communication",
    items: [
      { href: "/admin/messages", label: "Messages", icon: Mail },
      { href: "/admin/notifications", label: "Notifications", icon: Bell },
    ],
  },
  {
    label: "Insights",
    items: [
      { href: "/admin/reports", label: "Reports", icon: BarChart3 },
      { href: "/admin/dashboard/comprehensive", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    label: "System",
    items: [
      { href: "/admin/system-settings", label: "Settings", icon: Settings },
    ],
  },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/admin/dashboard") {
      return pathname === "/admin/dashboard" || pathname === "/admin"
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="flex h-screen bg-muted/30">
      <aside className="w-64 flex-shrink-0 bg-card border-r border-border overflow-y-auto">
        <div className="p-4 border-b border-border">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">African Business School (ABS)</p>
              <p className="text-xs text-muted-foreground">Management System</p>
            </div>
          </Link>
        </div>
        <nav className="p-2 space-y-4">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {section.label}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                    )}
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-border mt-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Website
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  )
}
