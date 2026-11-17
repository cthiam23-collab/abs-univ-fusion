import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("session_token")?.value

    if (token) {
      await sql`DELETE FROM sessions WHERE token = ${token}`
    }

    const response = NextResponse.json({ success: true })
    response.cookies.delete("session_token")

    return response
  } catch (error: any) {
    console.error("Logout error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
