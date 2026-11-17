import { cookies } from "next/headers"
import { sql } from "@/lib/db"

export type AdminSession = {
  id: string
  email: string
  full_name: string
  role: string
}

/**
 * Vérifie le cookie de session et retourne l'utilisateur si celui-ci
 * est un admin actif. Retourne null sinon.
 */
export async function getAdminSession(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("session_token")?.value
    if (!token) return null

    const rows = await sql`
      SELECT u.id, u.email, u.full_name, u.role
      FROM sessions s
      JOIN users u ON u.id = s.user_id
      WHERE s.token = ${token}
        AND s.expires_at > now()
        AND u.role = 'admin'
      LIMIT 1
    `

    return rows.length > 0 ? (rows[0] as AdminSession) : null
  } catch (error) {
    console.error("[getAdminSession]", error)
    return null
  }
}
