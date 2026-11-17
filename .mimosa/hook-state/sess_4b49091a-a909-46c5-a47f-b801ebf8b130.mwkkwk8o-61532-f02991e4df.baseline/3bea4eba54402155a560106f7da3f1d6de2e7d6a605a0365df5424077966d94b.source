// @ts-nocheck
import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, assetIds, data } = body

    if (!action || !assetIds || assetIds.length === 0) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const placeholders = assetIds.map((_, i) => `$${i + 1}`).join(",")

    switch (action) {
      case "update-status":
        await sql(
          `UPDATE assets SET status = $${assetIds.length + 1}, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`,
          [...assetIds, data.status],
        )
        break

      case "update-condition":
        await sql(
          `UPDATE assets SET condition = $${assetIds.length + 1}, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`,
          [...assetIds, data.condition],
        )
        break

      case "update-location":
        await sql(
          `UPDATE assets SET location = $${assetIds.length + 1}, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`,
          [...assetIds, data.location],
        )
        break

      case "update-department":
        await sql(
          `UPDATE assets SET assigned_department = $${assetIds.length + 1}, updated_at = CURRENT_TIMESTAMP WHERE id IN (${placeholders})`,
          [...assetIds, data.department],
        )
        break

      default:
        return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 })
    }

    return NextResponse.json({ success: true, message: `${assetIds.length} assets updated` })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to perform bulk operation" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json()
    const { assetIds } = body

    if (!assetIds || assetIds.length === 0) {
      return NextResponse.json({ success: false, error: "No assets selected" }, { status: 400 })
    }

    const placeholders = assetIds.map((_, i) => `$${i + 1}`).join(",")
    await sql(`DELETE FROM assets WHERE id IN (${placeholders})`, assetIds)

    return NextResponse.json({ success: true, message: `${assetIds.length} assets deleted` })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to delete assets" }, { status: 500 })
  }
}
