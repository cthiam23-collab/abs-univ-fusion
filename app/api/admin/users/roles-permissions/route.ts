import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import type { UserRole, Permission, RolePermission } from "@/lib/types/user"

// Simulated data (replace with actual database operations)
const roles: UserRole[] = ["admin", "staff", "teacher", "student", "parent", "external_partner"]
const permissions: Permission[] = [
  { id: "1", name: "Manage Users", description: "Can create, update, and delete users" },
  { id: "2", name: "Manage Courses", description: "Can create, update, and delete courses" },
  { id: "3", name: "View Reports", description: "Can access and view reports" },
]
let rolePermissions: RolePermission[] = [
  { roleId: "admin", permissionId: "1" },
  { roleId: "admin", permissionId: "2" },
  { roleId: "admin", permissionId: "3" },
  { roleId: "staff", permissionId: "2" },
  { roleId: "teacher", permissionId: "3" },
]

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({ roles, permissions, rolePermissions })
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { roleId, permissionId } = await request.json()
  if (!rolePermissions.some((rp) => rp.roleId === roleId && rp.permissionId === permissionId)) {
    rolePermissions.push({ roleId, permissionId })
  }

  return NextResponse.json({ success: true })
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { roleId, permissionId } = await request.json()
  rolePermissions = rolePermissions.filter((rp) => rp.roleId !== roleId || rp.permissionId !== permissionId)

  return NextResponse.json({ success: true })
}
