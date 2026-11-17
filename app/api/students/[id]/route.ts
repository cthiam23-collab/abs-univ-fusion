import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const student = await sql(
      `SELECT s.*, u.email, u.full_name, u.phone 
       FROM students s 
       JOIN users u ON s.user_id = u.id 
       WHERE s.id = $1`,
      [(await params).id],
    )

    if (!student.length) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 })
    }

    return NextResponse.json(student[0])
  } catch (error) {
    console.error("Error fetching student:", error)
    return NextResponse.json({ error: "Failed to fetch student" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { dateOfBirth, gender, status, phone, fullName } = body

    // Update student
    const result = await sql(
      `UPDATE students 
       SET date_of_birth = COALESCE($1, date_of_birth), 
           gender = COALESCE($2, gender), 
           status = COALESCE($3, status),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $4 RETURNING *`,
      [dateOfBirth, gender, status, (await params).id],
    )

    // Update user info
    if (phone || fullName) {
      await sql(
        `UPDATE users 
         SET phone = COALESCE($1, phone), 
             full_name = COALESCE($2, full_name),
             updated_at = CURRENT_TIMESTAMP
         WHERE id = (SELECT user_id FROM students WHERE id = $3)`,
        [phone, fullName, (await params).id],
      )
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("Error updating student:", error)
    return NextResponse.json({ error: "Failed to update student" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Soft delete - mark as inactive instead of hard delete
    const result = await sql(`UPDATE students SET status = 'inactive' WHERE id = $1 RETURNING id`, [(await params).id])

    if (!result.length) {
      return NextResponse.json({ error: "Student not found" }, { status: 404 })
    }

    return NextResponse.json({ message: "Student deleted" })
  } catch (error) {
    console.error("Error deleting student:", error)
    return NextResponse.json({ error: "Failed to delete student" }, { status: 500 })
  }
}
