// @ts-nocheck
import { sql } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const categories = await sql("SELECT * FROM asset_categories ORDER BY name ASC")
    return NextResponse.json({ success: true, data: categories })
  } catch (error) {
    console.error("[v0] API Error:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch categories" }, { status: 500 })
  }
}
