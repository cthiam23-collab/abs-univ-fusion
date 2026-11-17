import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const reportType = searchParams.get("type")

  let reportData

  switch (reportType) {
    case "enrollment":
      reportData = {
        totalStudents: 1000,
        newEnrollments: 250,
        departmentBreakdown: {
          "Computer Science": 300,
          Business: 250,
          Engineering: 200,
          Arts: 150,
          Sciences: 100,
        },
      }
      break
    case "financial":
      reportData = {
        totalRevenue: 5000000,
        totalExpenses: 4000000,
        netProfit: 1000000,
        revenueBreakdown: {
          Tuition: 4000000,
          Grants: 800000,
          Donations: 200000,
        },
        expenseBreakdown: {
          Salaries: 2500000,
          Facilities: 1000000,
          Research: 500000,
        },
      }
      break
    case "academic":
      reportData = {
        averageGPA: 3.2,
        departmentPerformance: {
          "Computer Science": 3.4,
          Business: 3.1,
          Engineering: 3.3,
          Arts: 3.5,
          Sciences: 3.2,
        },
        topPerformingCourses: [
          "CS101: Introduction to Programming",
          "BUS201: Principles of Management",
          "ENG102: Academic Writing",
        ],
      }
      break
    default:
      return NextResponse.json({ error: "Invalid report type" }, { status: 400 })
  }

  return NextResponse.json(reportData)
}
