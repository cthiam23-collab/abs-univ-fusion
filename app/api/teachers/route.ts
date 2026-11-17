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
    const search = searchParams.get("search") || ""
    const offset = (page - 1) * limit

    let query = `
      SELECT t.*, u.full_name, u.email, u.phone
      FROM teachers t
      JOIN users u ON t.user_id = u.id
      WHERE 1=1
    `
    const params: any[] = []

    if (search) {
      query += ` AND (u.full_name ILIKE $${params.length + 1} OR u.email ILIKE $${params.length + 2})`
      params.push(`%${search}%`, `%${search}%`)
    }

    const countResult = await sql(`SELECT COUNT(*) as count FROM (${query}) as t`)
    const total = countResult[0]?.count || 0

    query += ` ORDER BY t.hire_date DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    const teachers = await sql(query, params)
    return NextResponse.json({
      data: teachers,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error("Error fetching teachers:", error)
    return NextResponse.json({ error: "Failed to fetch teachers" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { email, fullName, phone, employeeId, specialization, hireDate, bio } = body

    if (!email || !fullName || !employeeId || !hireDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const userResult = await sql(
      `INSERT INTO users (email, password_hash, full_name, role, phone, is_active) 
       VALUES ($1, $2, $3, $4, $5, true) RETURNING id`,
      [email, "temp_password", fullName, "teacher", phone],
    )

    const userId = userResult[0].id

    const teacherResult = await sql(
      `INSERT INTO teachers (user_id, employee_id, specialization, hire_date, bio, status)
       VALUES ($1, $2, $3, $4, $5, 'active') RETURNING *`,
      [userId, employeeId, specialization, hireDate, bio],
    )

    return NextResponse.json(teacherResult[0], { status: 201 })
  } catch (error) {
    console.error("Error creating teacher:", error)
    return NextResponse.json({ error: "Failed to create teacher" }, { status: 500 })
  }
}
