import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { rateLimit, tooManyRequests } from "@/lib/rate-limit"
import bcrypt from "bcryptjs"

const ALLOWED_ROLES = ["student", "teacher", "parent", "staff"]

export async function POST(request: NextRequest) {
  try {
    const limit = rateLimit(request, { key: "register", limit: 5, windowMs: 60 * 60 * 1000 })
    if (!limit.allowed) return tooManyRequests(limit)

    const body = await request.json()
    const { email, password, name, role = "student" } = body

    if (!email || !password || !name) {
      return NextResponse.json({ error: "Email, password, and name are required" }, { status: 400 })
    }

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide" }, { status: 400 })
    }

    if (typeof password !== "string" || password.length < 8) {
      return NextResponse.json({ error: "Le mot de passe doit contenir au moins 8 caractères" }, { status: 400 })
    }

    // Éviter l'auto-attribution d'un rôle privilégié via l'API publique.
    const safeRole = ALLOWED_ROLES.includes(role) ? role : "student"

    const existingUsers = await sql`
      SELECT id FROM users WHERE email = ${email}
    `

    if (existingUsers.length > 0) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Schéma réel : users(email, password_hash, full_name, role)
    const newUsers = await sql`
      INSERT INTO users (email, password_hash, full_name, role)
      VALUES (${email}, ${hashedPassword}, ${name}, ${safeRole}::user_role)
      RETURNING id, email, full_name, role
    `

    const user = newUsers[0]

    return NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.full_name,
          role: user.role,
        },
      },
      { status: 201 },
    )
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
