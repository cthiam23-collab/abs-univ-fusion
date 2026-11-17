"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import {
  Plus,
  Pencil,
  Trash2,
  Shield,
  Users,
  GraduationCap,
  UserCog,
  Settings,
  Eye,
  FileText,
  DollarSign,
  BookOpen,
} from "lucide-react"

// Define permission categories
const permissionCategories = [
  {
    name: "Students",
    icon: Users,
    permissions: [
      { id: "students.view", label: "View Students", description: "View student records" },
      { id: "students.create", label: "Create Students", description: "Add new students" },
      { id: "students.edit", label: "Edit Students", description: "Modify student data" },
      { id: "students.delete", label: "Delete Students", description: "Remove student records" },
    ],
  },
  {
    name: "Teachers",
    icon: GraduationCap,
    permissions: [
      { id: "teachers.view", label: "View Teachers", description: "View teacher profiles" },
      { id: "teachers.create", label: "Create Teachers", description: "Add new teachers" },
      { id: "teachers.edit", label: "Edit Teachers", description: "Modify teacher data" },
      { id: "teachers.delete", label: "Delete Teachers", description: "Remove teacher records" },
    ],
  },
  {
    name: "Classes",
    icon: BookOpen,
    permissions: [
      { id: "classes.view", label: "View Classes", description: "View class information" },
      { id: "classes.create", label: "Create Classes", description: "Create new classes" },
      { id: "classes.edit", label: "Edit Classes", description: "Modify class data" },
      { id: "classes.delete", label: "Delete Classes", description: "Remove classes" },
    ],
  },
  {
    name: "Grades",
    icon: FileText,
    permissions: [
      { id: "grades.view", label: "View Grades", description: "View grade records" },
      { id: "grades.create", label: "Enter Grades", description: "Enter new grades" },
      { id: "grades.edit", label: "Edit Grades", description: "Modify grade records" },
      { id: "grades.delete", label: "Delete Grades", description: "Remove grade records" },
    ],
  },
  {
    name: "Finance",
    icon: DollarSign,
    permissions: [
      { id: "finance.view", label: "View Finance", description: "View financial records" },
      { id: "finance.create", label: "Create Payments", description: "Record payments" },
      { id: "finance.edit", label: "Edit Finance", description: "Modify financial data" },
      { id: "finance.reports", label: "Financial Reports", description: "Generate reports" },
    ],
  },
  {
    name: "System",
    icon: Settings,
    permissions: [
      { id: "system.settings", label: "System Settings", description: "Access system settings" },
      { id: "system.users", label: "Manage Users", description: "Manage user accounts" },
      { id: "system.roles", label: "Manage Roles", description: "Manage roles and permissions" },
      { id: "system.backup", label: "Backup/Restore", description: "Backup and restore data" },
    ],
  },
]

// Default roles with their permissions
const defaultRoles = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full system access with all permissions",
    color: "bg-red-100 text-red-800",
    userCount: 3,
    permissions: permissionCategories.flatMap((cat) => cat.permissions.map((p) => p.id)),
  },
  {
    id: "principal",
    name: "Principal",
    description: "School-wide management access",
    color: "bg-purple-100 text-purple-800",
    userCount: 1,
    permissions: [
      "students.view", "students.edit",
      "teachers.view", "teachers.edit",
      "classes.view", "classes.edit",
      "grades.view",
      "finance.view", "finance.reports",
      "system.settings",
    ],
  },
  {
    id: "teacher",
    name: "Teacher",
    description: "Class and grade management for assigned classes",
    color: "bg-blue-100 text-blue-800",
    userCount: 45,
    permissions: [
      "students.view",
      "classes.view",
      "grades.view", "grades.create", "grades.edit",
    ],
  },
  {
    id: "accountant",
    name: "Accountant",
    description: "Financial management and reporting",
    color: "bg-green-100 text-green-800",
    userCount: 5,
    permissions: [
      "students.view",
      "finance.view", "finance.create", "finance.edit", "finance.reports",
    ],
  },
  {
    id: "librarian",
    name: "Librarian",
    description: "Library management access",
    color: "bg-yellow-100 text-yellow-800",
    userCount: 3,
    permissions: [
      "students.view",
      "teachers.view",
    ],
  },
  {
    id: "staff",
    name: "Staff",
    description: "Basic staff access",
    color: "bg-gray-100 text-gray-800",
    userCount: 12,
    permissions: [
      "students.view",
      "teachers.view",
      "classes.view",
    ],
  },
]

export default function RolesPermissionsPage() {
  const [roles, setRoles] = useState(defaultRoles)
  const [selectedRole, setSelectedRole] = useState(roles[0])
  const [isAddingRole, setIsAddingRole] = useState(false)
  const [isEditingRole, setIsEditingRole] = useState(false)
  const [newRole, setNewRole] = useState({ name: "", description: "" })
  const { toast } = useToast()

  const handlePermissionToggle = (permissionId: string) => {
    const updatedRoles = roles.map((role) => {
      if (role.id === selectedRole.id) {
        const hasPermission = role.permissions.includes(permissionId)
        const updatedPermissions = hasPermission
          ? role.permissions.filter((p) => p !== permissionId)
          : [...role.permissions, permissionId]
        return { ...role, permissions: updatedPermissions }
      }
      return role
    })
    setRoles(updatedRoles)
    setSelectedRole(updatedRoles.find((r) => r.id === selectedRole.id) || updatedRoles[0])
    toast({
      title: "Permission Updated",
      description: "Role permissions have been updated successfully.",
    })
  }

  const handleAddRole = () => {
    if (!newRole.name.trim()) return
    const id = newRole.name.toLowerCase().replace(/\s+/g, "-")
    const role = {
      id,
      name: newRole.name,
      description: newRole.description,
      color: "bg-slate-100 text-slate-800",
      userCount: 0,
      permissions: [],
    }
    setRoles([...roles, role])
    setNewRole({ name: "", description: "" })
    setIsAddingRole(false)
    toast({
      title: "Role Created",
      description: `The role "${newRole.name}" has been created.`,
    })
  }

  const handleDeleteRole = (roleId: string) => {
    if (["admin", "teacher", "staff"].includes(roleId)) {
      toast({
        title: "Cannot Delete",
        description: "System roles cannot be deleted.",
        variant: "destructive",
      })
      return
    }
    setRoles(roles.filter((r) => r.id !== roleId))
    if (selectedRole.id === roleId) {
      setSelectedRole(roles[0])
    }
    toast({
      title: "Role Deleted",
      description: "The role has been deleted successfully.",
    })
  }

  const handleSelectAllCategory = (categoryName: string, checked: boolean) => {
    const category = permissionCategories.find((c) => c.name === categoryName)
    if (!category) return

    const categoryPermissionIds = category.permissions.map((p) => p.id)
    const updatedRoles = roles.map((role) => {
      if (role.id === selectedRole.id) {
        let updatedPermissions: string[]
        if (checked) {
          updatedPermissions = [...new Set([...role.permissions, ...categoryPermissionIds])]
        } else {
          updatedPermissions = role.permissions.filter((p) => !categoryPermissionIds.includes(p))
        }
        return { ...role, permissions: updatedPermissions }
      }
      return role
    })
    setRoles(updatedRoles)
    setSelectedRole(updatedRoles.find((r) => r.id === selectedRole.id) || updatedRoles[0])
  }

  const isCategoryFullySelected = (categoryName: string) => {
    const category = permissionCategories.find((c) => c.name === categoryName)
    if (!category) return false
    return category.permissions.every((p) => selectedRole.permissions.includes(p.id))
  }

  const isCategoryPartiallySelected = (categoryName: string) => {
    const category = permissionCategories.find((c) => c.name === categoryName)
    if (!category) return false
    const selectedCount = category.permissions.filter((p) =>
      selectedRole.permissions.includes(p.id)
    ).length
    return selectedCount > 0 && selectedCount < category.permissions.length
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Roles & Permissions</h1>
          <p className="text-muted-foreground">
            Manage user roles and their access permissions
          </p>
        </div>
        <Dialog open={isAddingRole} onOpenChange={setIsAddingRole}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Role
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Role</DialogTitle>
              <DialogDescription>
                Add a new role with custom permissions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="roleName">Role Name</Label>
                <Input
                  id="roleName"
                  placeholder="e.g., Department Head"
                  value={newRole.name}
                  onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roleDesc">Description</Label>
                <Input
                  id="roleDesc"
                  placeholder="Brief description of the role"
                  value={newRole.description}
                  onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddingRole(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddRole}>Create Role</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Roles List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Roles</CardTitle>
            <CardDescription>Select a role to manage permissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {roles.map((role) => (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role)}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedRole.id === role.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-muted/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{role.name}</span>
                  </div>
                  <Badge variant="outline" className={role.color}>
                    {role.userCount} users
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{role.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Permissions Matrix */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Badge className={selectedRole.color}>{selectedRole.name}</Badge>
                  Permissions
                </CardTitle>
                <CardDescription>
                  {selectedRole.permissions.length} permissions assigned
                </CardDescription>
              </div>
              <div className="flex gap-2">
                {!["admin", "teacher", "staff"].includes(selectedRole.id) && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteRole(selectedRole.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {permissionCategories.map((category) => (
              <div key={category.name} className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Checkbox
                    id={`cat-${category.name}`}
                    checked={isCategoryFullySelected(category.name)}
                    // @ts-ignore
                    indeterminate={isCategoryPartiallySelected(category.name)}
                    onCheckedChange={(checked) =>
                      handleSelectAllCategory(category.name, checked as boolean)
                    }
                  />
                  <category.icon className="h-4 w-4 text-muted-foreground" />
                  <Label
                    htmlFor={`cat-${category.name}`}
                    className="font-semibold cursor-pointer"
                  >
                    {category.name}
                  </Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6">
                  {category.permissions.map((permission) => (
                    <div
                      key={permission.id}
                      className="flex items-start gap-2 p-2 rounded hover:bg-muted/50"
                    >
                      <Checkbox
                        id={permission.id}
                        checked={selectedRole.permissions.includes(permission.id)}
                        onCheckedChange={() => handlePermissionToggle(permission.id)}
                        disabled={selectedRole.id === "admin"}
                      />
                      <div className="grid gap-0.5">
                        <Label
                          htmlFor={permission.id}
                          className="text-sm font-medium cursor-pointer"
                        >
                          {permission.label}
                        </Label>
                        <span className="text-xs text-muted-foreground">
                          {permission.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Role Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>
                    <Badge className={role.color}>{role.name}</Badge>
                  </TableCell>
                  <TableCell>{role.userCount}</TableCell>
                  <TableCell>{role.permissions.length}</TableCell>
                  <TableCell className="text-muted-foreground">{role.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
