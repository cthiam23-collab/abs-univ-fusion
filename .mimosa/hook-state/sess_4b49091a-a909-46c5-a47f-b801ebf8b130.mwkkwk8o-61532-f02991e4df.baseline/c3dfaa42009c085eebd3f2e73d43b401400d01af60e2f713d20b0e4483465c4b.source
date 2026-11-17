"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { StudentForm } from "@/components/admin-portal/forms/student-form"
import { Search, UserPlus, Edit, Trash2, Loader } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Student {
  id: string
  admission_number: string
  full_name: string
  email: string
  phone: string
  status: string
  enrollment_date: string
}

export default function ManageStudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [filteredStudents, setFilteredStudents] = useState<Student[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [showForm, setShowForm] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const { toast } = useToast()

  useEffect(() => {
    fetchStudents()
  }, [page, searchTerm, filterStatus])

  const fetchStudents = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        search: searchTerm,
        status: filterStatus === "all" ? "" : filterStatus,
      })

      const response = await fetch(`/api/students?${params}`)
      if (!response.ok) throw new Error("Failed to fetch students")

      const data = await response.json()
      setStudents(data.data || [])
      setFilteredStudents(data.data || [])
      setTotalPages(data.pagination?.pages || 1)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch students"
      setError(message)
      toast({ title: "Error", description: message, variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const handleAddStudent = () => {
    setSelectedStudent(null)
    setShowForm(true)
  }

  const handleEditStudent = (student: Student) => {
    setSelectedStudent(student)
    setShowForm(true)
  }

  const handleDeleteStudent = async (studentId: string) => {
    if (!confirm("Are you sure you want to delete this student?")) return

    try {
      const response = await fetch(`/api/students/${studentId}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete student")

      toast({ title: "Success", description: "Student deleted successfully" })
      fetchStudents()
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to delete student"
      toast({ title: "Error", description: message, variant: "destructive" })
    }
  }

  const handleSubmitForm = async (data: any) => {
    try {
      const method = selectedStudent ? "PUT" : "POST"
      const url = selectedStudent ? `/api/students/${selectedStudent.id}` : "/api/students"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to save student")

      toast({
        title: "Success",
        description: selectedStudent ? "Student updated successfully" : "Student added successfully",
      })
      setShowForm(false)
      setSelectedStudent(null)
      fetchStudents()
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save student"
      toast({ title: "Error", description: message, variant: "destructive" })
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "graduated":
        return "bg-blue-100 text-blue-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Student Management</h1>
          <p className="text-gray-600">Manage student records and information</p>
        </div>
        <Button onClick={handleAddStudent}>
          <UserPlus className="h-4 w-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search students..."
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
                <SelectItem value="graduated">Graduated</SelectItem>
              </SelectContent>
            </Select>

            <div className="text-sm text-gray-500 flex items-center">Total: {students.length} students</div>
          </div>
        </CardContent>
      </Card>

      {/* Error Message */}
      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">{error}</div>}

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Students ({students.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <Loader className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.admission_number}</TableCell>
                      <TableCell>{student.full_name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.phone}</TableCell>
                      <TableCell>
                        <Badge className={getStatusBadgeColor(student.status)}>{student.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEditStudent(student)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => handleDeleteStudent(student.id)}>
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

          {/* Pagination */}
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

      {/* Student Form Modal */}
      {showForm && (
        <StudentForm student={selectedStudent} onSubmit={handleSubmitForm} onClose={() => setShowForm(false)} />
      )}
    </div>
  )
}
