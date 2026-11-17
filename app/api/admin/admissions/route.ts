import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated applicants data (replace with actual database operations in a real application)
const applicants = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    program: "Computer Science",
    status: "Pending",
    applicationDate: "2023-05-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    program: "Business Administration",
    status: "Accepted",
    applicationDate: "2023-04-15",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice@example.com",
    program: "Engineering",
    status: "Rejected",
    applicationDate: "2023-04-20",
  },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(applicants)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newApplicant = await request.json()
  const id = (applicants.length + 1).toString()
  const applicationDate = new Date().toISOString().split("T")[0]
  const createdApplicant = { id, ...newApplicant, applicationDate }
  applicants.push(createdApplicant)

  return NextResponse.json(createdApplicant, { status: 201 })
}
