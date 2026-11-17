import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated events data (replace with actual database operations in a real application)
const events = [
  {
    id: "1",
    title: "Orientation Day",
    description: "Welcome event for new students",
    date: "2023-09-01",
    location: "Main Auditorium",
    organizer: "Student Affairs",
  },
  {
    id: "2",
    title: "Career Fair",
    description: "Annual job fair for students and alumni",
    date: "2023-10-15",
    location: "University Hall",
    organizer: "Career Services",
  },
  {
    id: "3",
    title: "Research Symposium",
    description: "Showcase of student and faculty research projects",
    date: "2023-11-20",
    location: "Science Building",
    organizer: "Research Department",
  },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(events)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newEvent = await request.json()
  const id = (events.length + 1).toString()
  const createdEvent = { id, ...newEvent }
  events.push(createdEvent)

  return NextResponse.json(createdEvent, { status: 201 })
}
