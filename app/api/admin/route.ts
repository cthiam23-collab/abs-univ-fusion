import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Simulate fetching admin data from a database
  const adminData = {
    totalUsers: 1000,
    totalCourses: 50,
    totalRevenue: 500000,
    newNotifications: 5,
    activeUsers: 750,
    totalFaculty: 100,
    upcomingEvents: 3,
  }

  return NextResponse.json(adminData)
}
