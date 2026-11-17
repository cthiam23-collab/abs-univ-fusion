import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET() {
  try {
    const result = await sql`SELECT NOW() as current_time, version() as db_version`
    const usersCount = await sql`SELECT COUNT(*) as count FROM users`

    return NextResponse.json({
      success: true,
      message: "Database connection successful!",
      data: {
        currentTime: result[0].current_time,
        dbVersion: result[0].db_version,
        usersCount: usersCount[0].count,
      },
    })
  } catch (error: any) {
    console.error("Database test error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    )
  }
}
