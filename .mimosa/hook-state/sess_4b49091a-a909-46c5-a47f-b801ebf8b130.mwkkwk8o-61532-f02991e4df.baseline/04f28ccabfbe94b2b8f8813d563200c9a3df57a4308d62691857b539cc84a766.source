import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { users } from "@/data/users" // Import simulated user data
import type { UserRole } from "@/lib/types/user"

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const page = Number(searchParams.get("page")) || 1
    const roleFilter = searchParams.get("role") as UserRole | "all" | null
    const searchTerm = searchParams.get("search") || ""

    const usersPerPage = 10
    const filteredUsers = users.filter((user) => {
      if (roleFilter && roleFilter !== "all" && user.role !== roleFilter) {
        return false
      }
      if (searchTerm) {
        const term = searchTerm.toLowerCase()
        return (
          user.name.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term) ||
          ("department" in user && typeof user.department === "string" && user.department.toLowerCase().includes(term)) ||
          ("specialization" in user && typeof user.specialization === "string" && user.specialization.toLowerCase().includes(term))
        )
      }
      return true
    })

    const totalUsers = filteredUsers.length
    const startIndex = (page - 1) * usersPerPage
    const endIndex = Math.min(startIndex + usersPerPage, totalUsers)
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex)

    return NextResponse.json({
      users: paginatedUsers,
      total: totalUsers,
      page,
      usersPerPage,
    })
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const newUser = await request.json()
    const id = (users.length + 1).toString()
    const createdUser = { id, ...newUser }
    users.push(createdUser)

    return NextResponse.json(createdUser, { status: 201 })
  } catch (error) {
    console.error("Error adding user:", error)
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 })
  }
}
