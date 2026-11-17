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
    const studentId = searchParams.get("studentId")
    const status = searchParams.get("status")
    const academicYear = searchParams.get("academicYear")

    let query = `
      SELECT f.*, s.admission_number, u.full_name as student_name
      FROM fees f
      JOIN students s ON f.student_id = s.id
      JOIN users u ON s.user_id = u.id
      WHERE 1=1
    `
    const params: any[] = []

    if (studentId) {
      query += ` AND f.student_id = $${params.length + 1}`
      params.push(studentId)
    }

    if (status) {
      query += ` AND f.status = $${params.length + 1}`
      params.push(status)
    }

    if (academicYear) {
      query += ` AND f.academic_year = $${params.length + 1}`
      params.push(academicYear)
    }

    query += ` ORDER BY f.due_date ASC`

    const fees = await sql(query, params)
    return NextResponse.json({ data: fees })
  } catch (error) {
    console.error("Error fetching fees:", error)
    return NextResponse.json({ error: "Failed to fetch fees" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { studentId, amount, feeType, dueDate, academicYear } = body

    if (!studentId || !amount || !feeType || !dueDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO fees (student_id, amount, fee_type, due_date, academic_year, status)
       VALUES ($1, $2, $3, $4, $5, 'pending') RETURNING *`,
      [studentId, amount, feeType, dueDate, academicYear],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating fee:", error)
    return NextResponse.json({ error: "Failed to create fee" }, { status: 500 })
  }
}
