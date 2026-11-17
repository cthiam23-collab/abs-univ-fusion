/**
 * Health check endpoint for container orchestration (Coolify / Docker).
 *
 * GET /health      → returns 200 if the server is reachable (liveness).
 * GET /health/ready → returns 200 only if the database is reachable (readiness).
 *
 * Used by Docker HEALTHCHECK, load balancers, and Coolify probes.
 */
import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(request: Request) {
  const url = new URL(request.url)

  // ── Readiness probe (database check) ─────────────────────────────────────
  if (url.pathname === "/health/ready") {
    try {
      await sql`SELECT 1`
      return NextResponse.json({ status: "ready" }, { status: 200 })
    } catch {
      return NextResponse.json(
        { status: "not_ready", detail: "Database unreachable" },
        { status: 503 },
      )
    }
  }

  // ── Liveness probe (process alive) ────────────────────────────────────────
  return NextResponse.json({ status: "ok" }, { status: 200 })
}
