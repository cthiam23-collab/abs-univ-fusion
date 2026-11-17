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
    const status = searchParams.get("status") || "issued"

    let query = `
      SELECT t.*, b.title as book_title, b.author,
             s.admission_number, u.full_name as student_name
      FROM library_transactions t
      JOIN library_books b ON t.book_id = b.id
      JOIN students s ON t.student_id = s.id
      JOIN users u ON s.user_id = u.id
      WHERE t.status = $1
    `
    const params: any[] = [status]

    if (studentId) {
      query += ` AND t.student_id = $${params.length + 1}`
      params.push(studentId)
    }

    query += ` ORDER BY t.issue_date DESC`

    const transactions = await sql(query, params)
    return NextResponse.json({ data: transactions })
  } catch (error) {
    console.error("Error fetching transactions:", error)
    return NextResponse.json({ error: "Failed to fetch transactions" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user.role !== "admin" && session.user.role !== "staff")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { studentId, bookId, dueDate } = body

    if (!studentId || !bookId || !dueDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Calculate due date (default 14 days if not provided)
    const issueDateObj = new Date()
    const dueDateObj = new Date(dueDate)

    const result = await sql(
      `INSERT INTO library_transactions (student_id, book_id, issue_date, due_date, status)
       VALUES ($1, $2, $3, $4, 'issued')
       RETURNING *`,
      [studentId, bookId, issueDateObj.toISOString().split("T")[0], dueDateObj.toISOString().split("T")[0]],
    )

    // Decrease available copies
    await sql(`UPDATE library_books SET available_copies = available_copies - 1 WHERE id = $1`, [bookId])

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating transaction:", error)
    return NextResponse.json({ error: "Failed to create transaction" }, { status: 500 })
  }
}
