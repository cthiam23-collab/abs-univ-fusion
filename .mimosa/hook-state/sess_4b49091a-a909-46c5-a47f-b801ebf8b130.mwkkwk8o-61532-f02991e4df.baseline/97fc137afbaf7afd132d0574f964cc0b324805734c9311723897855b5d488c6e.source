import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated student data (replace with actual database operations in a real application)
const students = [
  { id: "1", name: "John Doe", email: "john@example.com", program: "Computer Science", enrollmentDate: "2023-01-15" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", program: "Business Admin", enrollmentDate: "2023-02-01" },
  { id: "3", name: "Alice Johnson", email: "alice@example.com", program: "Engineering", enrollmentDate: "2023-03-10" },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(students)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newStudent = await request.json()
  const id = (students.length + 1).toString()
  const enrollmentDate = new Date().toISOString().split("T")[0]
  const createdStudent = { id, ...newStudent, enrollmentDate }
  students.push(createdStudent)

  return NextResponse.json(createdStudent, { status: 201 })
}
