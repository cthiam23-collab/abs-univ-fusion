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
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")
    const classId = searchParams.get("classId")

    let query = `
      SELECT a.*, s.admission_number, u.full_name, 
             cl.name as class_name, sub.name as subject_name
      FROM attendance a
      JOIN students s ON a.student_id = s.id
      JOIN users u ON s.user_id = u.id
      JOIN classes cl ON a.class_id = cl.id
      JOIN subjects sub ON a.subject_id = sub.id
      WHERE 1=1
    `
    const params: any[] = []

    if (startDate) {
      query += ` AND a.attendance_date >= $${params.length + 1}`
      params.push(startDate)
    }

    if (endDate) {
      query += ` AND a.attendance_date <= $${params.length + 1}`
      params.push(endDate)
    }

    if (classId) {
      query += ` AND a.class_id = $${params.length + 1}`
      params.push(classId)
    }

    query += ` ORDER BY a.attendance_date DESC LIMIT 1000`

    const records = await sql(query, params)
    return NextResponse.json({ data: records })
  } catch (error) {
    console.error("Error fetching attendance:", error)
    return NextResponse.json({ error: "Failed to fetch attendance" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user.role !== "admin" && session.user.role !== "teacher")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { records } = body // Array of attendance records

    if (!Array.isArray(records) || records.length === 0) {
      return NextResponse.json({ error: "Invalid records" }, { status: 400 })
    }

    const created = []
    for (const record of records) {
      const result = await sql(
        `INSERT INTO attendance (student_id, class_id, subject_id, attendance_date, status, remarks, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (student_id, subject_id, attendance_date) 
         DO UPDATE SET status = $5, remarks = $6
         RETURNING *`,
        [
          record.studentId,
          record.classId,
          record.subjectId,
          record.date,
          record.status,
          record.remarks,
          session.user.id,
        ],
      )
      created.push(result[0])
    }

    return NextResponse.json({ data: created, count: created.length }, { status: 201 })
  } catch (error) {
    console.error("Error creating attendance:", error)
    return NextResponse.json({ error: "Failed to create attendance" }, { status: 500 })
  }
}
