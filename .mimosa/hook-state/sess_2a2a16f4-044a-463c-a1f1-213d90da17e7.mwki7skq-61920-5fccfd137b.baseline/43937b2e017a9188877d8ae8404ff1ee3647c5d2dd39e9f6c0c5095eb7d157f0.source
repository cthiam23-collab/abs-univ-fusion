import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.role || !["admin", "staff", "teacher"].includes(session.user.role)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Simulate fetching staff data from a database
  const staffData = {
    totalStudents: 500,
    assignedCourses: 5,
    upcomingClasses: 3,
    unreadMessages: 10,
  }

  return NextResponse.json(staffData)
}
