import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    const countResult = await sql(`SELECT COUNT(*) as count FROM classes`)
    const total = countResult[0]?.count || 0

    const classes = await sql(
      `SELECT c.*, u.full_name as teacher_name
       FROM classes c
       LEFT JOIN teachers t ON c.homeroom_teacher_id = t.id
       LEFT JOIN users u ON t.user_id = u.id
       ORDER BY c.level, c.name
       LIMIT $1 OFFSET $2`,
      [limit, offset],
    )

    return NextResponse.json({
      data: classes,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error("Error fetching classes:", error)
    return NextResponse.json({ error: "Failed to fetch classes" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { name, level, section, maxCapacity, homeroomTeacherId } = body

    if (!name || !level) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO classes (name, level, section, max_capacity, homeroom_teacher_id)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, level, section, maxCapacity || 40, homeroomTeacherId],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating class:", error)
    return NextResponse.json({ error: "Failed to create class" }, { status: 500 })
  }
}
