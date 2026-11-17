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
    const status = searchParams.get("status") || "all"
    const offset = (page - 1) * limit

    let query = `
      SELECT 
        s.id, s.user_id, s.admission_number, s.date_of_birth, s.gender, 
        s.enrollment_date, s.status, 
        u.full_name, u.email, u.phone
      FROM students s
      JOIN users u ON s.user_id = u.id
      WHERE 1=1
    `
    const params: any[] = []

    if (search) {
      query += ` AND (u.full_name ILIKE $${params.length + 1} OR u.email ILIKE $${params.length + 2} OR s.admission_number ILIKE $${params.length + 3})`
      params.push(`%${search}%`, `%${search}%`, `%${search}%`)
    }

    if (status !== "all") {
      query += ` AND s.status = $${params.length + 1}`
      params.push(status)
    }

    // Get total count
    const countResult = await sql(`SELECT COUNT(*) as count FROM (${query}) AS student_results`, params)
    const total = Number(countResult[0]?.count || 0)

    query += ` ORDER BY s.enrollment_date DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    const students = await sql(query, params)
    return NextResponse.json({
      data: students,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error("Error fetching students:", error)
    return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { email, password, fullName, phone, admissionNumber, dateOfBirth, gender, enrollmentDate } = body

    if (!email || !fullName || !admissionNumber || !dateOfBirth || !enrollmentDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create user first
    const userResult = await sql(
      `INSERT INTO users (email, password_hash, full_name, role, phone, is_active) 
       VALUES ($1, $2, $3, $4, $5, true) RETURNING id`,
      [email, password || "temp_password", fullName, "student", phone],
    )

    if (!userResult.length) {
      throw new Error("Failed to create user")
    }

    const userId = userResult[0].id

    // Create student record
    const studentResult = await sql(
      `INSERT INTO students (user_id, admission_number, date_of_birth, gender, enrollment_date, status)
       VALUES ($1, $2, $3, $4, $5, 'active') RETURNING *`,
      [userId, admissionNumber, dateOfBirth, gender, enrollmentDate],
    )

    return NextResponse.json(studentResult[0], { status: 201 })
  } catch (error) {
    console.error("Error creating student:", error)
    return NextResponse.json({ error: "Failed to create student" }, { status: 500 })
  }
}
