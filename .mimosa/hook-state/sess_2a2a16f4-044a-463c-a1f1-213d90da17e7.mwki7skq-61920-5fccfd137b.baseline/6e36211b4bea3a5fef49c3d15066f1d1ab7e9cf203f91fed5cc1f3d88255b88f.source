"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  TrendingUp,
  Calendar,
  Bell,
  UserPlus,
  FileText,
  Package,
  Wrench,
  ClipboardList,
  CheckSquare,
  Library,
  BarChart3,
} from "lucide-react"

interface DashboardStats {
  totalStudents: number
  totalFaculty: number
  totalCourses: number
  totalRevenue: number
  studentGrowth: number
  facultyGrowth: number
  revenueGrowth: number
}

interface Activity {
  id: string
  type: string
  message: string
  time: string
  icon: string
}

interface Event {
  id: string
  title: string
  date: string
  type: string
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalStudents: 1250,
    totalFaculty: 85,
    totalCourses: 45,
    totalRevenue: 2850000,
    studentGrowth: 12,
    facultyGrowth: 5,
    revenueGrowth: 8,
  })

  const [recentActivities, setRecentActivities] = useState<Activity[]>([
    {
      id: "1",
      type: "enrollment",
      message: "New student Amina Diallo enrolled in MBA Finance",
      time: "2 hours ago",
      icon: "user-plus",
    },
    {
      id: "2",
      type: "assignment",
      message: "Prof. John Mensah created new assignment for Strategic Management",
      time: "4 hours ago",
      icon: "file-text",
    },
    {
      id: "3",
      type: "payment",
      message: "Payment received from Kwame Asante - MBA Program Fee",
      time: "6 hours ago",
      icon: "dollar-sign",
    },
  ])

  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([
    {
      id: "1",
      title: "MBA Graduation Ceremony",
      date: "December 15, 2025",
      type: "graduation",
    },
    {
      id: "2",
      title: "Faculty Meeting",
      date: "October 20, 2025",
      type: "meeting",
    },
  ])

  const { toast } = useToast()

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      const response = await fetch("/api/admin/dashboard")
      if (!response.ok) throw new Error("Failed to fetch dashboard data")
      const data = await response.json()

      if (data.stats) setStats(data.stats)
      if (data.activities) setRecentActivities(data.activities)
      if (data.events) setUpcomingEvents(data.events)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
      // Using default data if API fails
    }
  }

  const quickActions = [
    {
      title: "Add Student",
      icon: UserPlus,
      color: "bg-blue-50 hover:bg-blue-100 text-blue-600",
      href: "/admin/students/manage",
    },
    {
      title: "Add Faculty",
      icon: GraduationCap,
      color: "bg-green-50 hover:bg-green-100 text-green-600",
      href: "/admin/teachers/manage",
    },
    {
      title: "Schedule Class",
      icon: Calendar,
      color: "bg-yellow-50 hover:bg-yellow-100 text-yellow-600",
      href: "/admin/classes/manage",
    },
    {
      title: "Generate Report",
      icon: FileText,
      color: "bg-purple-50 hover:bg-purple-100 text-purple-600",
      href: "/admin/reports",
    },
    {
      title: "Manage Assets",
      icon: Package,
      color: "bg-orange-50 hover:bg-orange-100 text-orange-600",
      href: "/admin/assets",
    },
    {
      title: "Maintenance",
      icon: Wrench,
      color: "bg-red-50 hover:bg-red-100 text-red-600",
      href: "/admin/assets/maintenance",
    },
    {
      title: "Attendance",
      icon: CheckSquare,
      color: "bg-teal-50 hover:bg-teal-100 text-teal-600",
      href: "/admin/attendance",
    },
    {
      title: "Library",
      icon: Library,
      color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-600",
      href: "/admin/library/manage",
    },
  ]

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">ABS Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome to African Business School (ABS) Management System</p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Last updated: {new Date().toLocaleString()}</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Students</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.totalStudents.toLocaleString()}
                </p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />+{stats.studentGrowth}% from last month
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Faculty Members</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalFaculty}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />+{stats.facultyGrowth}% from last month
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Courses</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalCourses}</p>
                <p className="text-sm text-blue-600 mt-1">This semester</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900">
                <BookOpen className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  XOF {stats.totalRevenue.toLocaleString()}
                </p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />+{stats.revenueGrowth}% from last month
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-20 flex flex-col items-center justify-center ${action.color}`}
                asChild
              >
                <a href={action.href}>
                  <action.icon className="h-6 w-6 mb-1" />
                  <span className="text-xs font-medium">{action.title}</span>
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Recent Activities</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Bell className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-white">{activity.message}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{event.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard
