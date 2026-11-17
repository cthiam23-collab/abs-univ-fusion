export type UserRole = "admin" | "staff" | "teacher" | "student" | "parent" | "external_partner"

export interface User {
  id: string
  username: string
  email: string
  role: UserRole
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

export interface Permission {
  id: string
  name: string
  description: string
}

export interface RolePermission {
  roleId: UserRole
  permissionId: string
}
