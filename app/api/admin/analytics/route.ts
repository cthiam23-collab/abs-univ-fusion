import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Simulated analytics data (replace with actual database queries in a real application)
  const analyticsData = {
    enrollmentTrend: [
      { month: "Jan", count: 100 },
      { month: "Feb", count: 120 },
      { month: "Mar", count: 150 },
      { month: "Apr", count: 180 },
      { month: "May", count: 200 },
    ],
    coursePopularity: [
      { course: "Computer Science", students: 300 },
      { course: "Business Admin", students: 250 },
      { course: "Engineering", students: 200 },
      { course: "Psychology", students: 180 },
      { course: "Biology", students: 150 },
    ],
    financialSummary: [
      { month: "Jan", revenue: 100000, expenses: 80000 },
      { month: "Feb", revenue: 120000, expenses: 90000 },
      { month: "Mar", revenue: 150000, expenses: 100000 },
      { month: "Apr", revenue: 180000, expenses: 120000 },
      { month: "May", revenue: 200000, expenses: 150000 },
    ],
  }

  return NextResponse.json(analyticsData)
}
