"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { TeacherForm } from "@/components/admin-portal/forms/teacher-form"
import { Search, UserPlus, Edit, Trash2, Loader } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Teacher {
  id: string
  employee_id: string
  full_name: string
  email: string
  phone: string
  specialization: string
  status: string
  hire_date: string
}

export default function ManageTeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showForm, setShowForm] = useState(false)
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { toast } = useToast()

  useEffect(() => {
    fetchTeachers()
  }, [page, searchTerm, filterStatus])

  const fetchTeachers = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        search: searchTerm,
        status: filterStatus === "all" ? "" : filterStatus,
      })

      const response = await fetch(`/api/teachers?${params}`)
      if (!response.ok) throw new Error("Failed to fetch teachers")

      const data = await response.json()
      setTeachers(data.data || [])
      setTotalPages(data.pagination?.pages || 1)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch teachers"
      setError(message)
      toast({ title: "Error", description: message, variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const handleAddTeacher = () => {
    setSelectedTeacher(null)
    setShowForm(true)
  }

  const handleEditTeacher = (teacher: Teacher) => {
    setSelectedTeacher(teacher)
    setShowForm(true)
  }

  const handleDeleteTeacher = async (teacherId: string) => {
    if (!confirm("Are you sure you want to remove this teacher?")) return

    try {
      const response = await fetch(`/api/teachers/${teacherId}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete teacher")

      toast({ title: "Success", description: "Teacher deleted successfully" })
      fetchTeachers()
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete teacher"
      toast({ title: "Error", description: message, variant: "destructive" })
    }
  }

  const handleSubmitForm = async (data: any) => {
    try {
      const method = selectedTeacher ? "PUT" : "POST"
      const url = selectedTeacher ? `/api/teachers/${selectedTeacher.id}` : "/api/teachers"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to save teacher")

      toast({
        title: "Success",
        description: selectedTeacher ? "Teacher updated" : "Teacher added",
      })
      setShowForm(false)
      setSelectedTeacher(null)
      fetchTeachers()
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save teacher"
      toast({ title: "Error", description: message, variant: "destructive" })
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Teacher Management</h1>
          <p className="text-gray-600">Manage faculty and teaching staff</p>
        </div>
        <Button onClick={handleAddTeacher}>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Teacher
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search teachers..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setPage(1)
                }}
                className="pl-10"
              />
            </div>

            <Select
              value={filterStatus}
              onValueChange={(val) => {
                setFilterStatus(val)
                setPage(1)
              }}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-500 flex items-center">Total: {teachers.length} teachers</div>
          </div>
        </CardContent>
      </Card>

      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{teachers.length}</div>
            <div className="text-sm text-gray-500">Total Teachers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{teachers.filter((t) => t.status === "active").length}</div>
            <div className="text-sm text-gray-500">Active Teachers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{new Set(teachers.map((t) => t.specialization)).size}</div>
            <div className="text-sm text-gray-500">Specializations</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Teachers List ({teachers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Specialization</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                      <TableCell className="font-medium">{teacher.employee_id}</TableCell>
                      <TableCell>{teacher.full_name}</TableCell>
                      <TableCell>{teacher.email}</TableCell>
                      <TableCell>{teacher.specialization}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            teacher.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }
                        >
                          {teacher.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEditTeacher(teacher)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteTeacher(teacher.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              <Button variant="outline" disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </Button>
              <span className="flex items-center px-4">
                Page {page} of {totalPages}
              </span>
              <Button variant="outline" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {showForm && (
        <TeacherForm teacher={selectedTeacher} onSubmit={handleSubmitForm} onClose={() => setShowForm(false)} />
      )}
    </div>
  )
}
