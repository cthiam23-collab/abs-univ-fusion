import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated facilities data (replace with actual database operations in a real application)
const facilities = [
  { id: "1", name: "Main Auditorium", type: "Auditorium", capacity: 500, location: "Main Campus", status: "Available" },
  { id: "2", name: "Science Lab A", type: "Laboratory", capacity: 50, location: "Science Building", status: "In Use" },
  { id: "3", name: "Library Study Room 1", type: "Study Room", capacity: 20, location: "Library", status: "Available" },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(facilities)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newFacility = await request.json()
  const id = (facilities.length + 1).toString()
  const createdFacility = { id, ...newFacility }
  facilities.push(createdFacility)

  return NextResponse.json(createdFacility, { status: 201 })
}
