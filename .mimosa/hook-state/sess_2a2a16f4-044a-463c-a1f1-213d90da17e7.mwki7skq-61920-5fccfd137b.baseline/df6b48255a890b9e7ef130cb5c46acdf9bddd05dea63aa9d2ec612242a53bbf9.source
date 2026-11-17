"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { ClassForm } from "@/components/admin-portal/forms/class-form"
import { mockClasses } from "@/lib/mock-data"
import { searchFilter, getStatusBadgeColor, exportToCSV } from "@/lib/helpers"
import { Search, Plus, Edit, Trash2, Download, Users, BookOpen } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ManageClassesPage() {
  const [classes, setClasses] = useState(mockClasses)
  const [filteredClasses, setFilteredClasses] = useState(mockClasses)
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [selectedClass, setSelectedClass] = useState<any>(null)
  const [filterProgram, setFilterProgram] = useState("all")
  const [filterYear, setFilterYear] = useState("all")
  const [filterSemester, setFilterSemester] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const { toast } = useToast()

  useEffect(() => {
    applyFilters()
  }, [searchTerm, filterProgram, filterYear, filterSemester, filterStatus, classes])

  const applyFilters = () => {
    let filtered = classes

    if (searchTerm) {
      filtered = searchFilter(filtered, searchTerm, ["classCode", "className", "instructor", "program"])
    }

    if (filterProgram !== "all") {
      filtered = filtered.filter((c) => c.program.toLowerCase().includes(filterProgram.toLowerCase()))
    }

    if (filterYear !== "all") {
      filtered = filtered.filter((c) => c.year === filterYear)
    }

    if (filterSemester !== "all") {
      filtered = filtered.filter((c) => c.semester === filterSemester)
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((c) => c.status === filterStatus)
    }

    setFilteredClasses(filtered)
  }

  const handleAddClass = () => {
    setSelectedClass(null)
    setShowForm(true)
  }

  const handleEditClass = (classData: any) => {
    setSelectedClass(classData)
    setShowForm(true)
  }

  const handleDeleteClass = (classId: string) => {
    if (confirm("Are you sure you want to delete this class? This action cannot be undone.")) {
      setClasses(classes.filter((c) => c.id !== classId))
      toast({
        title: "Class Deleted",
        description: "The class has been successfully removed.",
      })
    }
  }

  const handleSubmitForm = (data: any) => {
    if (selectedClass) {
      setClasses(classes.map((c) => (c.id === selectedClass.id ? { ...c, ...data } : c)))
      toast({
        title: "Class Updated",
        description: "Class information has been successfully updated.",
      })
    } else {
      const newClass = {
        id: `CLS-2025-${String(classes.length + 1).padStart(3, "0")}`,
        enrolled: 0,
        status: "active",
        ...data,
      }
      setClasses([...classes, newClass])
      toast({
        title: "Class Created",
        description: "New class has been successfully created.",
      })
    }
    setShowForm(false)
    setSelectedClass(null)
  }

  const handleExportCSV = () => {
    exportToCSV(filteredClasses, "classes_export")
    toast({
      title: "Export Successful",
      description: "Classes data has been exported to CSV.",
    })
  }

  const getTotalEnrollment = () => {
    return classes.reduce((sum, c) => sum + c.enrolled, 0)
  }

  const getAverageEnrollment = () => {
    if (classes.length === 0) return 0
    return Math.round(getTotalEnrollment() / classes.length)
  }

  const getCapacityUtilization = () => {
    const totalCapacity = classes.reduce((sum, c) => sum + c.capacity, 0)
    const totalEnrolled = getTotalEnrollment()
    if (totalCapacity === 0) return 0
    return Math.round((totalEnrolled / totalCapacity) * 100)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Class Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage courses, sections, and class schedules</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={handleAddClass}>
            <Plus className="h-4 w-4 mr-2" />
            Add Class
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterProgram} onValueChange={setFilterProgram}>
              <SelectTrigger>
                <SelectValue placeholder="All Programs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                <SelectItem value="mba">MBA</SelectItem>
                <SelectItem value="business">Business Administration</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterYear} onValueChange={setFilterYear}>
              <SelectTrigger>
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                <SelectItem value="1">Year 1</SelectItem>
                <SelectItem value="2">Year 2</SelectItem>
                <SelectItem value="3">Year 3</SelectItem>
                <SelectItem value="4">Year 4</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterSemester} onValueChange={setFilterSemester}>
              <SelectTrigger>
                <SelectValue placeholder="All Semesters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Semesters</SelectItem>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{classes.length}</div>
                <div className="text-sm text-gray-500">Total Classes</div>
              </div>
              <BookOpen className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{getTotalEnrollment()}</div>
                <div className="text-sm text-gray-500">Total Enrollment</div>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{getAverageEnrollment()}</div>
                <div className="text-sm text-gray-500">Avg. Enrollment</div>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{getCapacityUtilization()}%</div>
                <div className="text-sm text-gray-500">Capacity Utilization</div>
              </div>
              <BookOpen className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Classes Table */}
      <Card>
        <CardHeader>
          <CardTitle>Classes List ({filteredClasses.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class Code</TableHead>
                  <TableHead>Class Name</TableHead>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Year/Sem</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Enrollment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClasses.map((classData) => (
                  <TableRow key={classData.id}>
                    <TableCell className="font-medium">{classData.classCode}</TableCell>
                    <TableCell>{classData.className}</TableCell>
                    <TableCell>{classData.instructor}</TableCell>
                    <TableCell>{classData.program}</TableCell>
                    <TableCell>
                      Y{classData.year}/S{classData.semester}
                    </TableCell>
                    <TableCell className="text-xs">{classData.schedule}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>
                          {classData.enrolled}/{classData.capacity}
                        </span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500"
                            style={{ width: `${(classData.enrolled / classData.capacity) * 100}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(classData.status)}>{classData.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditClass(classData)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteClass(classData.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Class Form Modal */}
      {showForm && (
        <ClassForm classData={selectedClass} onSubmit={handleSubmitForm} onClose={() => setShowForm(false)} />
      )}
    </div>
  )
}
