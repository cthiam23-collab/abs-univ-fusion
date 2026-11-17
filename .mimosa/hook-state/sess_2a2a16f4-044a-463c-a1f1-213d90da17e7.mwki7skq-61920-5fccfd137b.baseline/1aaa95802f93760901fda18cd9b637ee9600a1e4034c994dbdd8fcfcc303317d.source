import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Simulated settings data (replace with actual database operations in a real application)
let settings = {
  siteName: "African Business School (ABS)",
  maintenanceMode: false,
  maxUploadSize: 5,
  allowRegistration: true,
}

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json(settings)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const updatedSettings = await request.json()
  settings = { ...settings, ...updatedSettings }

  return NextResponse.json(settings)
}
