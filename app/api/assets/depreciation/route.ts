import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const assetId = new URL(request.url).searchParams.get("asset_id")

    let query = "SELECT * FROM asset_depreciation WHERE 1=1"
    const params: any[] = []

    if (assetId) {
      query += " AND asset_id = $" + (params.length + 1)
      params.push(assetId)
    }

    query += " ORDER BY depreciation_year DESC"

    const records = await sql(query, params)
    return NextResponse.json({ success: true, data: records })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch depreciation records" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { asset_id } = body

    if (!asset_id) {
      return NextResponse.json({ success: false, error: "Asset ID is required" }, { status: 400 })
    }

    // Get asset details
    const assetResult = await sql(
      `SELECT purchase_price, useful_life_years, salvage_value, depreciation_method 
       FROM assets WHERE id = $1`,
      [asset_id],
    )

    if (!assetResult.length) {
      return NextResponse.json({ success: false, error: "Asset not found" }, { status: 404 })
    }

    const asset = assetResult[0]

    // Calculate depreciation using straight-line method
    const depreciableAmount = asset.purchase_price - (asset.salvage_value || 0)
    const annualDepreciation = depreciableAmount / asset.useful_life_years

    const currentYear = new Date().getFullYear()

    const result = await sql(
      `INSERT INTO asset_depreciation (asset_id, depreciation_year, depreciation_amount, accumulated_depreciation, book_value)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [asset_id, currentYear, annualDepreciation, annualDepreciation, asset.purchase_price - annualDepreciation],
    )

    return NextResponse.json({ success: true, data: result[0] }, { status: 201 })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to calculate depreciation" }, { status: 500 })
  }
}
