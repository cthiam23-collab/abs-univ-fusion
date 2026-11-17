// @ts-nocheck
import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const result = await sql(
      `SELECT a.*, ac.name as category_name FROM assets a 
       LEFT JOIN asset_categories ac ON a.category_id = ac.id 
       WHERE a.id = $1`,
      [(await params).id],
    )

    if (!result.length) {
      return NextResponse.json({ success: false, error: "Asset not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: result[0] })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch asset" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json()

    const result = await sql(
      `UPDATE assets SET name = COALESCE($1, name), description = COALESCE($2, description), 
       location = COALESCE($3, location), condition = COALESCE($4, condition), 
       status = COALESCE($5, status), assigned_department = COALESCE($6, assigned_department),
       updated_at = CURRENT_TIMESTAMP WHERE id = $7 RETURNING *`,
      [body.name, body.description, body.location, body.condition, body.status, body.assigned_department, (await params).id],
    )

    if (!result.length) {
      return NextResponse.json({ success: false, error: "Asset not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, data: result[0] })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to update asset" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const result = await sql("DELETE FROM assets WHERE id = $1 RETURNING id", [(await params).id])

    if (!result.length) {
      return NextResponse.json({ success: false, error: "Asset not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Asset deleted successfully" })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to delete asset" }, { status: 500 })
  }
}
