import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export async function requireAuth() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login?error=Please sign in to access this page")
  }

  return session
}

export async function requireNoAuth() {
  const session = await getServerSession()

  if (session) {
    redirect("/")
  }
}
