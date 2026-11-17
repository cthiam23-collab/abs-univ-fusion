import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated course data (replace with actual database operations in a real application)
const courses = [
  {
    id: "1",
    code: "CS101",
    name: "Introduction to Computer Science",
    description: "Fundamental concepts of programming",
    credits: 3,
    department: "Computer Science",
  },
  {
    id: "2",
    code: "BUS201",
    name: "Principles of Management",
    description: "Basic management theories and practices",
    credits: 3,
    department: "Business",
  },
  {
    id: "3",
    code: "ENG102",
    name: "Academic Writing",
    description: "Developing academic writing skills",
    credits: 3,
    department: "English",
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
