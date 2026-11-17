import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Simulated dashboard data (replace with actual database queries in a real application)
  const dashboardData = {
    totalStudents: 5000,
    totalFaculty: 250,
    totalCourses: 300,
    totalApplicants: 1500,
    studentsByDepartment: [
      { name: "Computer Science", count: 1200 },
      { name: "Business", count: 1000 },
      { name: "Engineering", count: 800 },
      { name: "Arts", count: 600 },
      { name: "Sciences", count: 700 },
      { name: "Others", count: 700 },
    ],
    applicantsTrend: [
      { month: "Jan", count: 100 },
      { month: "Feb", count: 150 },
      { month: "Mar", count: 200 },
      { month: "Apr", count: 180 },
      { month: "May", count: 220 },
      { month: "Jun", count: 250 },
    ],
  }

  return NextResponse.json({
    stats: {
      totalStudents: dashboardData.totalStudents,
      totalFaculty: dashboardData.totalFaculty,
      totalCourses: dashboardData.totalCourses,
      totalRevenue: 0,
      studentGrowth: 0,
      facultyGrowth: 0,
      revenueGrowth: 0,
    },
    activities: [],
    events: [],
    ...dashboardData,
  })
}
