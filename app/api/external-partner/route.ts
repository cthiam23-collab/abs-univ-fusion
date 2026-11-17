import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "external_partner") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Simulate fetching external partner data from a database
  const partnerData = {
    activeProjects: 3,
    currentInterns: 5,
    activeAgreements: 2,
    unreadMessages: 7,
  }

  return NextResponse.json(partnerData)
}
