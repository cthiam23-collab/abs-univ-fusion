"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { BookOpen, Calendar, FileText, CreditCard, MessageSquare, Menu } from "lucide-react"
import { CourseRegistration } from "@/components/student-portal/course-registration"
import { AcademicRecords } from "@/components/student-portal/academic-records"
import { FinancialInformation } from "@/components/student-portal/financial-information"
import { MessagingSystem } from "@/components/student-portal/messaging-system"
import { StudentDashboard } from "@/components/student-portal/student-dashboard"
import { useLanguage } from "@/contexts/language-context"

const menuItems = [
  { value: "dashboard", icon: BookOpen, label: "Dashboard", color: "text-blue-500" },
  { value: "courses", icon: Calendar, label: "Course Registration", color: "text-green-500" },
  { value: "academic", icon: FileText, label: "Academic Records", color: "text-yellow-500" },
  { value: "financial", icon: CreditCard, label: "Financial Information", color: "text-purple-500" },
  { value: "messages", icon: MessageSquare, label: "Messages", color: "text-pink-500" },
]

export default function StudentPortalPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { t } = useLanguage()

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setShowMobileMenu(false)
  }

  const renderComponent = (tab: string) => {
    switch (tab) {
      case "dashboard":
        return <StudentDashboard />
      case "courses":
        return <CourseRegistration />
      case "academic":
        return <AcademicRecords />
      case "financial":
        return <FinancialInformation />
      case "messages":
        return <MessagingSystem />
      default:
        return <StudentDashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-shrink-0 md:w-64 bg-white shadow-md">
        <div className="w-full">
          <div className="flex items-center justify-center h-16 bg-primary">
            <h2 className="text-2xl font-bold text-white">{t("studentPortal")}</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-4rem)] px-3 py-4">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <Button
                  key={item.value}
                  variant={activeTab === item.value ? "secondary" : "ghost"}
                  className={`w-full justify-start ${item.color}`}
                  onClick={() => handleTabChange(item.value)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {t(item.label)}
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </aside>

      {/* Mobile menu */}
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>{t("studentPortalMenu")}</SheetTitle>
            <SheetDescription>{t("selectSection")}</SheetDescription>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-8rem)] mt-6">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.value}
                  variant={activeTab === item.value ? "secondary" : "ghost"}
                  className={`w-full justify-start ${item.color}`}
                  onClick={() => handleTabChange(item.value)}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {t(item.label)}
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          {/* Mobile menu trigger */}
          <div className="md:hidden mb-6">
            <Button onClick={() => setShowMobileMenu(true)} className="w-full">
              <Menu className="mr-2 h-4 w-4" />
              {t("menu")}
            </Button>
          </div>

          {/* Active component */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-6">
              {t(menuItems.find((item) => item.value === activeTab)?.label || "")}
            </h1>
            {renderComponent(activeTab)}
          </div>
        </div>
      </main>
    </div>
  )
}
