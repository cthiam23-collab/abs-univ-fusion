import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const offset = (page - 1) * limit

    let query = `
      SELECT * FROM library_books
      WHERE 1=1
    `
    const params: any[] = []

    if (search) {
      query += ` AND (title ILIKE $${params.length + 1} OR author ILIKE $${params.length + 2} OR isbn ILIKE $${params.length + 3})`
      params.push(`%${search}%`, `%${search}%`, `%${search}%`)
    }

    if (category) {
      query += ` AND category = $${params.length + 1}`
      params.push(category)
    }

    const countResult = await sql(`SELECT COUNT(*) as count FROM (${query}) as t`)
    const total = countResult[0]?.count || 0

    query += ` ORDER BY title ASC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit, offset)

    const books = await sql(query, params)
    return NextResponse.json({
      data: books,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error("Error fetching books:", error)
    return NextResponse.json({ error: "Failed to fetch books" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || (session.user.role !== "admin" && session.user.role !== "staff")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    const body = await request.json()
    const { title, author, isbn, totalCopies, category, publisher, publicationYear } = body

    if (!title || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sql(
      `INSERT INTO library_books (title, author, isbn, total_copies, available_copies, category, publisher, publication_year)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [title, author, isbn, totalCopies || 1, totalCopies || 1, category, publisher, publicationYear],
    )

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("Error creating book:", error)
    return NextResponse.json({ error: "Failed to create book" }, { status: 500 })
  }
}
