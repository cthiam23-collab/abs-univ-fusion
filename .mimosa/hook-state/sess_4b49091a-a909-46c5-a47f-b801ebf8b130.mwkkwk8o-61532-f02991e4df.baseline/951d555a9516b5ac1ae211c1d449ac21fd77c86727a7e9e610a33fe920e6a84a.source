import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated faculty data (replace with actual database operations in a real application)
const facultyMembers = [
  {
    id: "1",
    name: "Dr. John Smith",
    email: "john.smith@abs.edu",
    department: "Computer Science",
    position: "Professor",
    specialization: "Artificial Intelligence",
  },
  {
    id: "2",
    name: "Dr. Emily Johnson",
    email: "emily.johnson@abs.edu",
    department: "Business",
    position: "Associate Professor",
    specialization: "Marketing",
  },
  {
    id: "3",
    name: "Prof. Michael Brown",
    email: "michael.brown@abs.edu",
    department: "Engineering",
    position: "Assistant Professor",
    specialization: "Robotics",
  },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(facultyMembers)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newFaculty = await request.json()
  const id = (facultyMembers.length + 1).toString()
  const createdFaculty = { id, ...newFaculty }
  facultyMembers.push(createdFaculty)

  return NextResponse.json(createdFaculty, { status: 201 })
}
