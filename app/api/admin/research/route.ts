import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated research project data (replace with actual database operations in a real application)
const researchProjects = [
  {
    id: "1",
    title: "AI in Education",
    description: "Exploring the use of AI in personalized learning",
    principalInvestigator: "Dr. John Smith",
    fundingAmount: 500000,
    startDate: "2023-01-01",
    endDate: "2024-12-31",
  },
  {
    id: "2",
    title: "Sustainable Energy Solutions",
    description: "Developing new technologies for renewable energy",
    principalInvestigator: "Dr. Emily Johnson",
    fundingAmount: 750000,
    startDate: "2023-03-15",
    endDate: "2025-03-14",
  },
  {
    id: "3",
    title: "Cybersecurity in IoT Devices",
    description: "Enhancing security measures for Internet of Things devices",
    principalInvestigator: "Prof. Michael Brown",
    fundingAmount: 600000,
    startDate: "2023-06-01",
    endDate: "2025-05-31",
  },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(researchProjects)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const newProject = await request.json()
  const id = (researchProjects.length + 1).toString()
  const createdProject = { id, ...newProject }
  researchProjects.push(createdProject)

  return NextResponse.json(createdProject, { status: 201 })
}
