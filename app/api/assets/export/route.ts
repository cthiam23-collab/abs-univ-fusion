import { sql } from "@/lib/db"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const format = new URL(request.url).searchParams.get("format") || "csv"
    const category = new URL(request.url).searchParams.get("category")

    let query = `SELECT a.*, ac.name as category_name FROM assets a 
                 LEFT JOIN asset_categories ac ON a.category_id = ac.id WHERE 1=1`
    const params: any[] = []

    if (category) {
      query += " AND a.category_id = $" + (params.length + 1)
      params.push(category)
    }

    const assets = await sql(query, params)

    if (format === "csv") {
      const headers = [
        "Asset Code",
        "Name",
        "Category",
        "Location",
        "Purchase Date",
        "Purchase Price",
        "Condition",
        "Status",
        "Serial Number",
        "Manufacturer",
        "Model",
      ]

      const rows = assets.map((a: any) => [
        a.asset_code,
        a.name,
        a.category_name,
        a.location || "",
        a.purchase_date,
        a.purchase_price,
        a.condition,
        a.status,
        a.serial_number || "",
        a.manufacturer || "",
        a.model || "",
      ])

      const csv = [headers, ...rows].map((row) => row.map((cell: unknown) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n")

      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="assets-${new Date().getTime()}.csv"`,
        },
      })
    }

    if (format === "json") {
      return NextResponse.json(assets, {
        headers: {
          "Content-Disposition": `attachment; filename="assets-${new Date().getTime()}.json"`,
        },
      })
    }

    return NextResponse.json({ success: false, error: "Invalid format" }, { status: 400 })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to export assets" }, { status: 500 })
  }
}
