// @ts-nocheck
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { UserRole } from "@/lib/types/user"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination } from "@/components/ui/pagination"
import { useToast } from "@/components/ui/use-toast"
import { Trash, Pencil, Plus } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
  department?: string
  specialization?: string
  profilePicture?: string
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [filteredUsers, setFilteredUsers] = useState<User[]>([])
  const [newUser, setNewUser] = useState<Partial<User>>({ name: "", email: "", role: "student" })
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<UserRole | "all">("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)
  const [totalUsers, setTotalUsers] = useState(0)
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchUsers()
  }, [currentPage, selectedRoleFilter, searchTerm]) //Fixed useEffect dependency

  const fetchUsers = async () => {
    try {
      const url = new URL("/api/admin/users", window.location.origin)
      url.searchParams.set("page", currentPage.toString())
      url.searchParams.set("role", selectedRoleFilter)
      url.searchParams.set("search", searchTerm)

      const response = await fetch(url.toString())
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      setUsers(data.users)
      setFilteredUsers(data.users)
      setTotalUsers(data.total)
    } catch (error) {
      console.error("Error fetching users:", error)
      toast({
        title: "Error",
        description: "Failed to fetch users. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset to first page when searching
    filterUsers()
  }

  const filterUsers = () => {
    const term = searchTerm.toLowerCase()
    const filtered = users.filter((user) => {
      if (selectedRoleFilter !== "all" && user.role !== selectedRoleFilter) return false
      return (
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        (user.department && user.department.toLowerCase().includes(term)) ||
        (user.specialization && user.specialization.toLowerCase().includes(term))
      )
    })
    setFilteredUsers(filtered)
  }

  const handleRoleFilterChange = (role: UserRole | "all") => {
    setSelectedRoleFilter(role)
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingUser) {
      setEditingUser({ ...editingUser, [e.target.name]: e.target.value })
    }
  }

  const handleRoleChange = (role: UserRole) => {
    setNewUser({ ...newUser, role })
  }

  const handleEditRoleChange = (role: UserRole) => {
    if (editingUser) {
      setEditingUser({ ...editingUser, role })
    }
  }

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      setUsers([...users, data])
      setNewUser({ name: "", email: "", role: "student" })
      toast({
        title: "User Added",
        description: "The new user has been successfully added.",
      })
      setIsAdding(false)
    } catch (error) {
      console.error("Error adding user:", error)
      toast({
        title: "Error",
        description: "Failed to add user. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateUser = async () => {
    try {
      if (!editingUser) return

      const response = await fetch(`/api/admin/users/${editingUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingUser),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const updatedUsers = users.map((user) => (user.id === editingUser.id ? editingUser : user))
      setUsers(updatedUsers)
      setEditingUser(null)
      toast({
        title: "User Updated",
        description: "The user has been successfully updated.",
      })
    } catch (error) {
      console.error("Error updating user:", error)
      toast({
        title: "Error",
        description: "Failed to update user. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteUser = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/users/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setUsers(users.filter((user) => user.id !== id))
      toast({
        title: "User Deleted",
        description: "The user has been successfully deleted.",
      })
    } catch (error) {
      console.error("Error deleting user:", error)
      toast({
        title: "Error",
        description: "Failed to delete user. Please try again.",
        variant: "destructive",
      })
    }
  }

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-auto"
          />
          <Select value={selectedRoleFilter} onValueChange={handleRoleFilterChange}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
              <SelectItem value="staff">Staff</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              {/* Add other roles as needed */}
            </SelectContent>
          </Select>
        </div>
        <Dialog open={isAdding} onOpenChange={setIsAdding}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsAdding(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add New User
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
              <DialogDescription>Add a new user to the system.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddUser} className="grid gap-4 py-4">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={newUser.name || ""}
                onChange={handleInputChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={newUser.email || ""}
                onChange={handleInputChange}
                required
              />
              <Input
                type="text"
                name="department"
                placeholder="Department (Optional)"
                value={newUser.department || ""}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="specialization"
                placeholder="Specialization (Optional)"
                value={newUser.specialization || ""}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="profilePicture"
                placeholder="Profile Picture URL (Optional)"
                value={newUser.profilePicture || ""}
                onChange={handleInputChange}
              />
              <Select value={newUser.role || "student"} onValueChange={handleRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  {/* Add other roles as needed */}
                </SelectContent>
              </Select>
              <DialogFooter>
                <Button type="submit">Add User</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Edit User Dialog */}
      <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>Edit user details.</DialogDescription>
          </DialogHeader>
          {editingUser && (
            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 py-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={editingUser.name}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={editingUser.email}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  type="text"
                  name="department"
                  value={editingUser.department || ""}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <Label htmlFor="specialization">Specialization</Label>
                <Input
                  id="specialization"
                  type="text"
                  name="specialization"
                  value={editingUser.specialization || ""}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <Label htmlFor="profilePicture">Profile Picture URL</Label>
                <Input
                  id="profilePicture"
                  type="text"
                  name="profilePicture"
                  value={editingUser.profilePicture || ""}
                  onChange={handleEditChange}
                />
              </div>
              <Select value={editingUser.role} onValueChange={handleEditRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="staff">Staff</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  {/* Add other roles as needed */}
                </SelectContent>
              </Select>
              <DialogFooter>
                <Button type="submit" onClick={handleUpdateUser}>
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Profile Picture</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.department || "-"}</TableCell>
              <TableCell>{user.specialization || "-"}</TableCell>
              <TableCell>
                {user.profilePicture && (
                  <img
                    src={user.profilePicture || "/placeholder.svg"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2" onClick={() => setEditingUser(user)}>
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(user.id)}>
                  <Trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalItems={totalUsers}
        itemsPerPage={usersPerPage}
      />
    </div>
  )
}
