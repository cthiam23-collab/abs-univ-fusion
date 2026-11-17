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
    const classId = searchParams.get("classId")
    const subjectId = searchParams.get("subjectId")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    let query = `
      SELECT e.*, sub.name as subject_name, c.name as class_name,
             u.full_name as created_by_name
      FROM exams e
      JOIN subjects sub ON e.subject_id = sub.id
      JOIN classes c ON e.class_id = c.id
      LEFT JOIN users u ON e.created_by = u.id
      WHERE 1=1
    `
    const params: any[] = []

    if (classId) {
      query += ` AND e.class_id = $${params.length + 1}`
      params.push(classId)
    }

    if (subjectId) {
      query += ` AND e.subject_id = $${params.length + 1}`
      params.push(subjectId)
    }

    const countResult = await sql(`SELECT COUNT(*) as count FROM (${query}) as t`)
    const total = countResult[0]?.count || 0

    query += ` ORDER BY e.exam_date DESC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    const exams = await sql(query, params)
    return NextResponse.json({
      data: exams,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error("Error fetching exams:", error)
    return NextResponse.json({ error: "Failed to fetch exams" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { name, subjectId, classId, examDate, startTime, endTime, totalMarks, passMarks } = body

    if (!name || !subjectId || !classId || !examDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO exams (name, subject_id, class_id, exam_date, start_time, end_time, total_marks, pass_marks, created_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [name, subjectId, classId, examDate, startTime, endTime, totalMarks || 100, passMarks || 40, session.user.id],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating exam:", error)
    return NextResponse.json({ error: "Failed to create exam" }, { status: 500 })
  }
}
