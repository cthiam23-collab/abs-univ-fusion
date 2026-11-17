// @ts-nocheck
import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category")
    const status = searchParams.get("status")
    const search = searchParams.get("search")

    let query =
      "SELECT a.*, ac.name as category_name FROM assets a LEFT JOIN asset_categories ac ON a.category_id = ac.id WHERE 1=1"
    const params: any[] = []

    if (category) {
      query += " AND a.category_id = $" + (params.length + 1)
      params.push(category)
    }

    if (status) {
      query += " AND a.status = $" + (params.length + 1)
      params.push(status)
    }

    if (search) {
      query += " AND (a.name ILIKE $" + (params.length + 1) + " OR a.asset_code ILIKE $" + (params.length + 1) + ")"
      params.push(`%${search}%`)
    }

    query += " ORDER BY a.created_at DESC LIMIT $" + (params.length + 1) + " OFFSET $" + (params.length + 2)
    params.push(limit, (page - 1) * limit)

    const assets = await sql(query, params)

    return NextResponse.json({
      success: true,
      data: assets,
      pagination: { page, limit, total: assets.length },
    })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch assets" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      asset_code,
      name,
      description,
      category_id,
      location,
      purchase_date,
      purchase_price,
      depreciation_rate,
      condition,
      serial_number,
      manufacturer,
      model,
      quantity,
      useful_life_years,
      assigned_department,
    } = body

    if (!asset_code || !name || !category_id || !purchase_date || !purchase_price) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO assets (asset_code, name, description, category_id, location, purchase_date, purchase_price, 
       depreciation_rate, condition, serial_number, manufacturer, model, quantity, useful_life_years, assigned_department)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
      [
        asset_code,
        name,
        description,
        category_id,
        location,
        purchase_date,
        purchase_price,
        depreciation_rate || 10,
        condition || "excellent",
        serial_number,
        manufacturer,
        model,
        quantity || 1,
        useful_life_years || 5,
        assigned_department,
      ],
    )

    return NextResponse.json({ success: true, data: result[0] }, { status: 201 })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to create asset" }, { status: 500 })
  }
}
