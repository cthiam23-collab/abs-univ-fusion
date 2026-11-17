import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated programs data (replace with actual database operations in a real application)
const programs = [
  { id: "1", name: "Bachelor of Business Administration", department: "Business", duration: "4 years", degree: "BBA" },
  {
    id: "2",
    name: "Master of Science in Computer Science",
    department: "Computer Science",
    duration: "2 years",
    degree: "MSc",
  },
  {
    id: "3",
    name: "Bachelor of Arts in International Relations",
    department: "Political Science",
    duration: "3 years",
    degree: "BA",
  },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(programs)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newProgram = await request.json()
  const id = (programs.length + 1).toString()
  const createdProgram = { id, ...newProgram }
  programs.push(createdProgram)

  return NextResponse.json(createdProgram, { status: 201 })
}
