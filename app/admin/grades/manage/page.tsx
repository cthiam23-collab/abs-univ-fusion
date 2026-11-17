"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { GradeForm } from "@/components/admin-portal/forms/grade-form"
import { mockGrades, mockClasses } from "@/lib/mock-data"
import { searchFilter, formatDate, exportToCSV } from "@/lib/helpers"
import { Search, Plus, Edit, Trash2, Download, Award, TrendingUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ManageGradesPage() {
  const [grades, setGrades] = useState(mockGrades)
  const [filteredGrades, setFilteredGrades] = useState(mockGrades)
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [selectedGrade, setSelectedGrade] = useState<any>(null)
  const [filterSubject, setFilterSubject] = useState("all")
  const [filterExamType, setFilterExamType] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const { toast } = useToast()

  useEffect(() => {
    applyFilters()
  }, [searchTerm, filterSubject, filterExamType, filterStatus, grades])

  const applyFilters = () => {
    let filtered = grades

    if (searchTerm) {
      filtered = searchFilter(filtered, searchTerm, ["studentId", "studentName", "subject", "subjectCode"])
    }

    if (filterSubject !== "all") {
      filtered = filtered.filter((g) => g.subjectCode === filterSubject)
    }

    if (filterExamType !== "all") {
      filtered = filtered.filter((g) => g.examType === filterExamType)
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((g) => g.status === filterStatus)
    }

    setFilteredGrades(filtered)
  }

  const handleAddGrade = () => {
    setSelectedGrade(null)
    setShowForm(true)
  }

  const handleEditGrade = (grade: any) => {
    setSelectedGrade(grade)
    setShowForm(true)
  }

  const handleDeleteGrade = (gradeId: string) => {
    if (confirm("Are you sure you want to delete this grade record?")) {
      setGrades(grades.filter((g) => g.id !== gradeId))
      toast({
        title: "Grade Deleted",
        description: "The grade record has been successfully removed.",
      })
    }
  }

  const handleSubmitForm = (data: any) => {
    if (selectedGrade) {
      setGrades(grades.map((g) => (g.id === selectedGrade.id ? { ...g, ...data } : g)))
      toast({
        title: "Grade Updated",
        description: "Grade has been successfully updated.",
      })
    } else {
      const newGrade = {
        id: `GRD-2025-${String(grades.length + 1).padStart(3, "0")}`,
        enteredDate: new Date().toISOString().split("T")[0],
        ...data,
      }
      setGrades([...grades, newGrade])
      toast({
        title: "Grade Added",
        description: "New grade has been successfully recorded.",
      })
    }
    setShowForm(false)
    setSelectedGrade(null)
  }

  const handleExportCSV = () => {
    exportToCSV(filteredGrades, "grades_export")
    toast({
      title: "Export Successful",
      description: "Grades data has been exported to CSV.",
    })
  }

  const getAverageGrade = () => {
    if (filteredGrades.length === 0) return 0
    const sum = filteredGrades.reduce((acc, g) => acc + Number.parseFloat(g.percentage), 0)
    return (sum / filteredGrades.length).toFixed(2)
  }

  const getPassRate = () => {
    if (filteredGrades.length === 0) return 0
    const passed = filteredGrades.filter((g) => g.status === "pass").length
    return Math.round((passed / filteredGrades.length) * 100)
  }

  const getAverageGPA = () => {
    if (filteredGrades.length === 0) return 0
    const sum = filteredGrades.reduce((acc, g) => acc + Number.parseFloat(g.gradePoint), 0)
    return (sum / filteredGrades.length).toFixed(2)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Grade Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage student grades and academic performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={handleAddGrade}>
            <Plus className="h-4 w-4 mr-2" />
            Add Grade
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search grades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterSubject} onValueChange={setFilterSubject}>
              <SelectTrigger>
                <SelectValue placeholder="All Subjects" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {mockClasses.map((c) => (
                  <SelectItem key={c.id} value={c.classCode}>
                    {c.classCode} - {c.className}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filterExamType} onValueChange={setFilterExamType}>
              <SelectTrigger>
                <SelectValue placeholder="All Exam Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="midterm">Midterm</SelectItem>
                <SelectItem value="final">Final</SelectItem>
                <SelectItem value="quiz">Quiz</SelectItem>
                <SelectItem value="assignment">Assignment</SelectItem>
                <SelectItem value="project">Project</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pass">Pass</SelectItem>
                <SelectItem value="fail">Fail</SelectItem>
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
                <div className="text-2xl font-bold">{filteredGrades.length}</div>
                <div className="text-sm text-gray-500">Total Records</div>
              </div>
              <Award className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{getAverageGrade()}%</div>
                <div className="text-sm text-gray-500">Average Grade</div>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{getPassRate()}%</div>
                <div className="text-sm text-gray-500">Pass Rate</div>
              </div>
              <Award className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{getAverageGPA()}</div>
                <div className="text-sm text-gray-500">Average GPA</div>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Grade Records ({filteredGrades.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Exam Type</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>GPA</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGrades.map((grade) => (
                  <TableRow key={grade.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{grade.studentName}</div>
                        <div className="text-xs text-gray-500">{grade.studentId}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{grade.subjectCode}</div>
                        <div className="text-xs text-gray-500">{grade.subject}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {grade.examType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {grade.obtainedMarks}/{grade.totalMarks}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{grade.percentage}%</span>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500"
                            style={{ width: `${Number.parseFloat(grade.percentage)}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          grade.letterGrade === "A+" || grade.letterGrade === "A"
                            ? "bg-green-100 text-green-800"
                            : grade.letterGrade === "B+" || grade.letterGrade === "B"
                              ? "bg-blue-100 text-blue-800"
                              : grade.letterGrade === "C+" || grade.letterGrade === "C"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                        }
                      >
                        {grade.letterGrade}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{grade.gradePoint}</TableCell>
                    <TableCell>
                      <Badge
                        className={grade.status === "pass" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                      >
                        {grade.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{formatDate(grade.examDate)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditGrade(grade)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteGrade(grade.id)}>
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

      {/* Grade Form Modal */}
      {showForm && <GradeForm grade={selectedGrade} onSubmit={handleSubmitForm} onClose={() => setShowForm(false)} />}
    </div>
  )
}
