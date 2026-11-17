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
    const folder = searchParams.get("folder") || "inbox"
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const offset = (page - 1) * limit

    let query = ``
    const params: any[] = [session.user.id]

    if (folder === "inbox") {
      query = `
        SELECT m.*, 
               sender.full_name as sender_name, sender.email as sender_email
        FROM messages m
        JOIN users sender ON m.sender_id = sender.id
        WHERE m.recipient_id = $1
        ORDER BY m.created_at DESC
      `
    } else if (folder === "sent") {
      query = `
        SELECT m.*, 
               recipient.full_name as recipient_name, recipient.email as recipient_email
        FROM messages m
        JOIN users recipient ON m.recipient_id = recipient.id
        WHERE m.sender_id = $1
        ORDER BY m.created_at DESC
      `
    }

    const countResult = await sql(`SELECT COUNT(*) as count FROM (${query}) as t`)
    const total = countResult[0]?.count || 0

    query += ` LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    const messages = await sql(query, params)
    return NextResponse.json({
      data: messages,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error("Error fetching messages:", error)
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { recipientId, subject, body: messageBody } = body

    if (!recipientId || !messageBody) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO messages (sender_id, recipient_id, subject, body, is_read)
       VALUES ($1, $2, $3, $4, false) RETURNING *`,
      [session.user.id, recipientId, subject, messageBody],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating message:", error)
    return NextResponse.json({ error: "Failed to create message" }, { status: 500 })
  }
}
