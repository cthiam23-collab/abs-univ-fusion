import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

const ALLOWED_STATUSES = ["new", "read", "answered", "archived"]

async function requireAdmin(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get("session_token")?.value
  if (!token) return false

  const rows = await sql`
    SELECT u.id
    FROM sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.token = ${token}
      AND s.expires_at > now()
      AND u.role = 'admin'
    LIMIT 1
  `
  return rows.length > 0
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!(await requireAdmin(request))) {
      return NextResponse.json({ success: false, error: "Non autorisé" }, { status: 401 })
    }

    const { id } = await params
    const body = await request.json().catch(() => null)

    if (!body || typeof body.status !== "string" || !ALLOWED_STATUSES.includes(body.status)) {
      return NextResponse.json({ success: false, error: "Statut invalide" }, { status: 400 })
    }

    const result = await sql(`UPDATE contact_messages SET status = $1 WHERE id = $2 RETURNING id, status`, [
      body.status,
      id,
    ])

    if (result.length === 0) {
      return NextResponse.json({ success: false, error: "Message introuvable" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: result[0] })
  } catch (error) {
    console.error("[contact PATCH]", error)
    return NextResponse.json({ success: false, error: "Failed to update message" }, { status: 500 })
  }
}
