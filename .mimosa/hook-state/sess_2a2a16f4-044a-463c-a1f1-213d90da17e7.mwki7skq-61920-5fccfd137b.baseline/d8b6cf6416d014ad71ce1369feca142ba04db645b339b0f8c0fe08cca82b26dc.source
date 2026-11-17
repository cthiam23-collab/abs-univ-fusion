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

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const updatedCourse = await request.json()

  const index = courses.findIndex((course) => course.id === id)
  if (index === -1) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 })
  }

  courses[index] = { ...courses[index], ...updatedCourse }

  return NextResponse.json(courses[index])
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params

  const index = courses.findIndex((course) => course.id === id)
  if (index === -1) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 })
  }

  courses.splice(index, 1)

  return NextResponse.json({ message: "Course deleted successfully" })
}
