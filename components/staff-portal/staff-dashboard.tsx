"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useSession } from "next-auth/react"

export function StaffDashboard() {
  const [staffData, setStaffData] = useState<{
    totalStudents: number
    assignedCourses: number
    upcomingClasses: number
    unreadMessages: number
  } | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const res = await fetch("/api/staff")
        const data = await res.json()
        setStaffData(data)
      } catch (error) {
        console.error("Error fetching staff data:", error)
      }
    }
    fetchStaffData()
  }, [])

  if (!staffData) {
    return <div>Loading...</div>
  }

  if (!session?.user?.role || !["admin", "staff", "teacher"].includes(session.user.role)) {
    return <div>Unauthorized access. Please log in as a staff member.</div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Students: {staffData.totalStudents}</p>
          <Link href="/staff/students">
            <Button className="mt-4 w-full">View Students</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            Courses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Assigned Courses: {staffData.assignedCourses}</p>
          <Link href="/staff/courses">
            <Button className="mt-4 w-full">Manage Courses</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Upcoming Classes: {staffData.upcomingClasses}</p>
          <Link href="/staff/schedule">
            <Button className="mt-4 w-full">View Schedule</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Unread Messages: {staffData.unreadMessages}</p>
          <Link href="/staff/messages">
            <Button className="mt-4 w-full">View Messages</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default StaffDashboard
