// @ts-nocheck
import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const assetId = new URL(request.url).searchParams.get("asset_id")

    let query = "SELECT * FROM asset_allocation_history WHERE 1=1"
    const params: any[] = []

    if (assetId) {
      query += " AND asset_id = $" + (params.length + 1)
      params.push(assetId)
    }

    query += " ORDER BY allocation_date DESC"

    const records = await sql(query, params)
    return NextResponse.json({ success: true, data: records })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch allocation history" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { asset_id, allocated_to_id, allocated_department, allocation_date, notes } = body

    if (!asset_id || !allocation_date) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Close previous allocations for this asset
    await sql(
      "UPDATE asset_allocation_history SET status = 'returned', return_date = $1 WHERE asset_id = $2 AND status = 'active'",
      [new Date().toISOString().split("T")[0], asset_id],
    )

    const result = await sql(
      `INSERT INTO asset_allocation_history (asset_id, allocated_to_id, allocated_department, allocation_date, status, notes)
       VALUES ($1, $2, $3, $4, 'active', $5) RETURNING *`,
      [asset_id, allocated_to_id, allocated_department, allocation_date, notes],
    )

    // Update asset assignment
    await sql("UPDATE assets SET assigned_to_id = $1, assigned_department = $2 WHERE id = $3", [
      allocated_to_id,
      allocated_department,
      asset_id,
    ])

    return NextResponse.json({ success: true, data: result[0] }, { status: 201 })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to allocate asset" }, { status: 500 })
  }
}
