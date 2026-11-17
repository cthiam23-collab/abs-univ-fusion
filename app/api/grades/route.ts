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
    const subjectId = searchParams.get("subjectId")
    const term = searchParams.get("term")
    const academicYear = searchParams.get("academicYear")

    let query = `
      SELECT g.*, s.admission_number, u.full_name as student_name,
             sub.name as subject_name, e.name as exam_name
      FROM grades g
      JOIN students s ON g.student_id = s.id
      JOIN users u ON s.user_id = u.id
      JOIN subjects sub ON g.subject_id = sub.id
      LEFT JOIN exams e ON g.exam_id = e.id
      WHERE 1=1
    `
    const params: any[] = []

    if (studentId) {
      query += ` AND g.student_id = $${params.length + 1}`
      params.push(studentId)
    }

    if (subjectId) {
      query += ` AND g.subject_id = $${params.length + 1}`
      params.push(subjectId)
    }

    if (term) {
      query += ` AND g.term = $${params.length + 1}`
      params.push(term)
    }

    if (academicYear) {
      query += ` AND g.academic_year = $${params.length + 1}`
      params.push(academicYear)
    }

    const grades = await sql(query, params)
    return NextResponse.json({ data: grades })
  } catch (error) {
    console.error("Error fetching grades:", error)
    return NextResponse.json({ error: "Failed to fetch grades" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user.role !== "admin" && session.user.role !== "teacher")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { studentId, subjectId, classId, examId, score, grade, term, academicYear } = body

    if (!studentId || !subjectId || score === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO grades (student_id, subject_id, class_id, exam_id, score, grade, term, academic_year, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       ON CONFLICT (student_id, subject_id, exam_id, term, academic_year)
       DO UPDATE SET score = $5, grade = $6, updated_at = CURRENT_TIMESTAMP
       RETURNING *`,
      [studentId, subjectId, classId, examId, score, grade, term, academicYear, session.user.id],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating grade:", error)
    return NextResponse.json({ error: "Failed to create grade" }, { status: 500 })
  }
}
