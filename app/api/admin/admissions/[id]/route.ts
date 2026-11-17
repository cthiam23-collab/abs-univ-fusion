import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { applicants } from "@/data/applicants" // Import the applicants data

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const { status } = await request.json()

  // Find the applicant and update their status
  const applicant = applicants.find((a) => a.id === id)
  if (!applicant) {
    return NextResponse.json({ error: "Applicant not found" }, { status: 404 })
  }

  applicant.status = status

  return NextResponse.json(applicant)
}
