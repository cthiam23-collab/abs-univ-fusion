import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { rateLimit, tooManyRequests } from "@/lib/rate-limit"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const limit = rateLimit(request, { key: "login", limit: 10, windowMs: 15 * 60 * 1000 })
    if (!limit.allowed) return tooManyRequests(limit)

    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Schéma réel : users(password_hash, full_name, role, is_active)
    const users = await sql`
      SELECT id, email, password_hash, full_name, role
      FROM users
      WHERE email = ${email} AND is_active = true
    `

    if (users.length === 0) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const user = users[0]
    const passwordMatch = await bcrypt.compare(password, user.password_hash)

    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const token = Math.random().toString(36).substring(2) + Date.now().toString(36)
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    // La table sessions peut ne pas exister selon l'environnement : ne pas bloquer la connexion.
    try {
      await sql`
        INSERT INTO sessions (user_id, token, expires_at)
        VALUES (${user.id}, ${token}, ${expiresAt})
      `
    } catch (sessionError) {
      console.warn("Sessions table unavailable, skipping session persistence:", sessionError)
    }

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.full_name,
        role: user.role,
      },
    })

    response.cookies.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch (error: any) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
