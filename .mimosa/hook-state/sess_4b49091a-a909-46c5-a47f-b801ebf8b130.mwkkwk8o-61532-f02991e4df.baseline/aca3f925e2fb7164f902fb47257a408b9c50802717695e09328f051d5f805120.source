import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const assetId = new URL(request.url).searchParams.get("asset_id")

    let query = "SELECT * FROM asset_maintenance WHERE 1=1"
    const params: any[] = []

    if (assetId) {
      query += " AND asset_id = $" + (params.length + 1)
      params.push(assetId)
    }

    query += " ORDER BY maintenance_date DESC"

    const records = await sql(query, params)
    return NextResponse.json({ success: true, data: records })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch maintenance records" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { asset_id, maintenance_type, description, maintenance_date, cost, performed_by, next_maintenance_date } =
      body

    if (!asset_id || !maintenance_type || !maintenance_date) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO asset_maintenance (asset_id, maintenance_type, description, maintenance_date, cost, performed_by, next_maintenance_date, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'completed') RETURNING *`,
      [asset_id, maintenance_type, description, maintenance_date, cost, performed_by, next_maintenance_date],
    )

    return NextResponse.json({ success: true, data: result[0] }, { status: 201 })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to create maintenance record" }, { status: 500 })
  }
}
