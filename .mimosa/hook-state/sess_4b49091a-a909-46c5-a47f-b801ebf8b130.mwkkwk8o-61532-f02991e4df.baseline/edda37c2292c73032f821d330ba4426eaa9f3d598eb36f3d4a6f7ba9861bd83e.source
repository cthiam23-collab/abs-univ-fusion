import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

const ALLOWED_STATUSES = ["submitted", "in_review", "interview", "accepted", "rejected", "waitlist"]

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
    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, error: "Corps de requête invalide" }, { status: 400 })
    }

    const hasStatus = typeof body.status === "string"
    const hasNotes = "admin_notes" in body

    if (!hasStatus && !hasNotes) {
      return NextResponse.json(
        { success: false, error: "Fournir au moins un champ : status ou admin_notes" },
        { status: 400 },
      )
    }

    if (hasStatus && !ALLOWED_STATUSES.includes(body.status)) {
      return NextResponse.json(
        { success: false, error: "Statut invalide" },
        { status: 400 },
      )
    }

    const updates: string[] = []
    const values: unknown[] = []

    if (hasStatus) {
      updates.push(`status = $${updates.length + 1}`)
      values.push(body.status)
    }
    if (hasNotes) {
      updates.push(`admin_notes = $${updates.length + 1}`)
      values.push(typeof body.admin_notes === "string" && body.admin_notes.trim() !== "" ? body.admin_notes.trim() : null)
    }
    updates.push(`updated_at = now()`)

    values.push(id)
    const result = await sql(
      `UPDATE applications SET ${updates.join(", ")} WHERE id = $${values.length} RETURNING id, status, admin_notes`,
      values,
    )

    if (result.length === 0) {
      return NextResponse.json({ success: false, error: "Candidature introuvable" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: result[0] })
  } catch (error) {
    console.error("[applications PATCH]", error)
    return NextResponse.json({ success: false, error: "Failed to update application" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    if (!(await requireAdmin(request))) {
      return NextResponse.json({ success: false, error: "Non autorisé" }, { status: 401 })
    }

    const { id } = await params
    const result = await sql(`DELETE FROM applications WHERE id = $1 RETURNING id`, [id])

    if (result.length === 0) {
      return NextResponse.json({ success: false, error: "Candidature introuvable" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: { id: result[0].id } })
  } catch (error) {
    console.error("[applications DELETE]", error)
    return NextResponse.json({ success: false, error: "Failed to delete application" }, { status: 500 })
  }
}
