import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated courses data (replace with actual database operations in a real application)
const courses = [
  {
    id: "1",
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 3,
    instructor: "Dr. John Smith",
  },
  {
    id: "2",
    code: "BUS201",
    name: "Principles of Marketing",
    department: "Business",
    credits: 4,
    instructor: "Dr. Emily Johnson",
  },
  {
    id: "3",
    code: "ENG301",
    name: "Advanced Robotics",
    department: "Engineering",
    credits: 4,
    instructor: "Prof. Michael Brown",
  },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(courses)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newCourse = await request.json()
  const id = (courses.length + 1).toString()
  const createdCourse = { id, ...newCourse }
  courses.push(createdCourse)

  return NextResponse.json(createdCourse, { status: 201 })
}
