import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated staff data (replace with actual database operations in a real application)
const staffMembers = [
  {
    id: "1",
    name: "Dr. Smith",
    email: "smith@abs.edu",
    position: "Professor",
    department: "Computer Science",
    hireDate: "2020-01-15",
  },
  {
    id: "2",
    name: "Prof. Johnson",
    email: "johnson@abs.edu",
    position: "Associate Professor",
    department: "Business",
    hireDate: "2019-08-01",
  },
  {
    id: "3",
    name: "Ms. Davis",
    email: "davis@abs.edu",
    position: "Administrative Assistant",
    department: "Student Affairs",
    hireDate: "2021-03-10",
  },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(staffMembers)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newStaff = await request.json()
  const id = (staffMembers.length + 1).toString()
  const hireDate = new Date().toISOString().split("T")[0]
  const createdStaff = { id, ...newStaff, hireDate }
  staffMembers.push(createdStaff)

  return NextResponse.json(createdStaff, { status: 201 })
}
