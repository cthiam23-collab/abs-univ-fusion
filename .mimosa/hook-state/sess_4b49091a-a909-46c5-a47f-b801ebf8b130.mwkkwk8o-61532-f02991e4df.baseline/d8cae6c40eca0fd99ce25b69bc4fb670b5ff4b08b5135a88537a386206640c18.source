import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated notifications data (replace with actual database operations in a real application)
const notifications = [
  { id: "1", message: "New user registration", date: "2023-05-01", read: false },
  { id: "2", message: "Course update request", date: "2023-05-02", read: false },
  { id: "3", message: "System maintenance scheduled", date: "2023-05-03", read: true },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(notifications)
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await request.json()
  const notificationIndex = notifications.findIndex((n) => n.id === id)

  if (notificationIndex !== -1) {
    notifications[notificationIndex].read = true
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: "Notification not found" }, { status: 404 })
  }
}
