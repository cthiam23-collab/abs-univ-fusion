import type { UserRole } from "@/lib/types/user"

export const users = [
  { id: "1", name: "John Doe", email: "john.doe@example.com", role: "student" as UserRole },
  { id: "2", name: "Jane Smith", email: "jane.smith@example.com", role: "teacher" as UserRole },
  { id: "3", name: "David Lee", email: "david.lee@example.com", role: "staff" as UserRole },
  { id: "4", name: "Admin User", email: "admin@example.com", role: "admin" as UserRole },
]
