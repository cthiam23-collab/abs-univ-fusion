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
    const feeId = searchParams.get("feeId")
    const status = searchParams.get("status")
    const startDate = searchParams.get("startDate")
    const endDate = searchParams.get("endDate")

    let query = `
      SELECT p.*, f.student_id, s.admission_number, u.full_name as student_name, f.amount as fee_amount, f.fee_type
      FROM payments p
      JOIN fees f ON p.fee_id = f.id
      JOIN students s ON f.student_id = s.id
      JOIN users u ON s.user_id = u.id
      WHERE 1=1
    `
    const params: any[] = []

    if (feeId) {
      query += ` AND p.fee_id = $${params.length + 1}`
      params.push(feeId)
    }

    if (status) {
      query += ` AND p.status = $${params.length + 1}`
      params.push(status)
    }

    if (startDate) {
      query += ` AND p.payment_date >= $${params.length + 1}`
      params.push(startDate)
    }

    if (endDate) {
      query += ` AND p.payment_date <= $${params.length + 1}`
      params.push(endDate)
    }

    query += ` ORDER BY p.payment_date DESC`

    const payments = await sql(query, params)
    return NextResponse.json({ data: payments })
  } catch (error) {
    console.error("Error fetching payments:", error)
    return NextResponse.json({ error: "Failed to fetch payments" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { feeId, amount, paymentMethod, transactionId } = body

    if (!feeId || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Start transaction
    const result = await sql(
      `INSERT INTO payments (fee_id, amount, payment_method, transaction_id, status, payment_date)
       VALUES ($1, $2, $3, $4, 'completed', CURRENT_TIMESTAMP) RETURNING *`,
      [feeId, amount, paymentMethod, transactionId],
    )

    // Update fee status if fully paid
    await sql(
      `UPDATE fees SET status = 'completed' 
       WHERE id = $1 AND (SELECT COALESCE(SUM(amount), 0) FROM payments WHERE fee_id = $1) >= (SELECT amount FROM fees WHERE id = $1)`,
      [feeId],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating payment:", error)
    return NextResponse.json({ error: "Failed to create payment" }, { status: 500 })
  }
}
