// @ts-nocheck
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Download,
  RefreshCw,
  FileText,
  Calendar,
  Clock,
  Users,
  CheckCircle,
} from "lucide-react"
import { getMockExamData } from "@/lib/mock-data"
import { exportToCSV, formatDate, formatTime, getStatusBadgeColor } from "@/lib/helpers"

interface Exam {
  id: string
  title: string
  subject: string
  classId: string
  className: string
  examType: string
  date: string
  startTime: string
  endTime: string
  duration: number
  totalMarks: number
  passingMarks: number
  room: string
  examiner: string
  instructions: string
  status: "scheduled" | "ongoing" | "completed" | "cancelled"
  academicYear: string
  semester: string
}

interface ExamResult {
  id: string
  examId: string
  studentId: string
  studentName: string
  marksObtained: number
  totalMarks: number
  percentage: number
  grade: string
  status: "pass" | "fail"
  remarks: string
}

export default function ExamsManagePage() {
  const [exams, setExams] = useState<Exam[]>([])
  const [examResults, setExamResults] = useState<ExamResult[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterClass, setFilterClass] = useState("all")
  const [filterType, setFilterType] = useState("all")
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"exams" | "results">("exams")
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    classId: "",
    className: "",
    examType: "",
    date: "",
    startTime: "",
    endTime: "",
    duration: 60,
    totalMarks: 100,
    passingMarks: 40,
    room: "",
    examiner: "",
    instructions: "",
    status: "scheduled" as const,
    academicYear: "2024-2025",
    semester: "Fall 2024",
  })

  useEffect(() => {
    loadExamData()
  }, [])

  const loadExamData = async () => {
    setLoading(true)
    try {
      const data = getMockExamData()
      setExams(data.exams)
      setExamResults(data.examResults)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load exam data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredExams = exams.filter((exam) => {
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.examiner.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || exam.status === filterStatus
    const matchesClass = filterClass === "all" || exam.className === filterClass
    const matchesType = filterType === "all" || exam.examType === filterType
    return matchesSearch && matchesStatus && matchesClass && matchesType
  })

  const filteredResults = examResults.filter((result) => {
    const matchesSearch =
      result.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  const uniqueClasses = Array.from(new Set(exams.map((e) => e.className)))
  const examTypes = ["Midterm", "Final", "Quiz", "Assignment", "Practical", "Oral"]

  const stats = {
    totalExams: exams.length,
    scheduledExams: exams.filter((e) => e.status === "scheduled").length,
    completedExams: exams.filter((e) => e.status === "completed").length,
    ongoingExams: exams.filter((e) => e.status === "ongoing").length,
    averagePassRate:
      examResults.length > 0
        ? ((examResults.filter((r) => r.status === "pass").length / examResults.length) * 100).toFixed(1)
        : "0.0",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (selectedExam) {
        setExams(exams.map((ex) => (ex.id === selectedExam.id ? { ...formData, id: ex.id } : ex)))
        toast({
          title: "Success",
          description: "Exam updated successfully",
        })
      } else {
        const newExam: Exam = {
          ...formData,
          id: `EX${Date.now()}`,
        }
        setExams([...exams, newExam])
        toast({
          title: "Success",
          description: "Exam created successfully",
        })
      }
      resetForm()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save exam",
        variant: "destructive",
      })
    }
  }

  const handleEdit = (exam: Exam) => {
    setSelectedExam(exam)
    setFormData(exam)
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this exam?")) return
    try {
      setExams(exams.filter((ex) => ex.id !== id))
      toast({
        title: "Success",
        description: "Exam deleted successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete exam",
        variant: "destructive",
      })
    }
  }

  const handleStatusChange = async (id: string, newStatus: Exam["status"]) => {
    try {
      setExams(exams.map((ex) => (ex.id === id ? { ...ex, status: newStatus } : ex)))
      toast({
        title: "Success",
        description: `Exam status updated to ${newStatus}`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update exam status",
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setFormData({
      title: "",
      subject: "",
      classId: "",
      className: "",
      examType: "",
      date: "",
      startTime: "",
      endTime: "",
      duration: 60,
      totalMarks: 100,
      passingMarks: 40,
      room: "",
      examiner: "",
      instructions: "",
      status: "scheduled",
      academicYear: "2024-2025",
      semester: "Fall 2024",
    })
    setSelectedExam(null)
    setIsFormOpen(false)
  }

  const handleExportCSV = () => {
    const data = activeTab === "exams" ? filteredExams : filteredResults
    exportToCSV(data, `${activeTab}_${new Date().toISOString().split("T")[0]}`)
    toast({
      title: "Success",
      description: `${activeTab === "exams" ? "Exams" : "Results"} exported to CSV`,
    })
  }

  const getExamsByStatus = (status: string) => {
    return exams.filter((e) => e.status === status)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Exam Management</h1>
          <p className="text-muted-foreground">Manage exams and view results</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Exam
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Total Exams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalExams}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              Scheduled
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{stats.scheduledExams}</div>
            <p className="text-xs text-muted-foreground">Upcoming</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-500" />
              Ongoing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.ongoingExams}</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.completedExams}</div>
            <p className="text-xs text-muted-foreground">Finished</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-purple-500" />
              Pass Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{stats.averagePassRate}%</div>
            <p className="text-xs text-muted-foreground">Average</p>
          </CardContent>
        </Card>
      </div>

      {isFormOpen && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedExam ? "Edit" : "Schedule"} Exam</CardTitle>
            <CardDescription>{selectedExam ? "Update" : "Enter"} exam information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Exam Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Midterm Exam - Financial Management"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Financial Management"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="className">Class *</Label>
                  <Input
                    id="className"
                    value={formData.className}
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                    placeholder="MBA Finance - Year 1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="examType">Exam Type *</Label>
                  <Select
                    value={formData.examType}
                    onValueChange={(value) => setFormData({ ...formData, examType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {examTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Exam Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time *</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime">End Time *</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes) *</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: Number.parseInt(e.target.value) })}
                    min="15"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="totalMarks">Total Marks *</Label>
                  <Input
                    id="totalMarks"
                    type="number"
                    value={formData.totalMarks}
                    onChange={(e) => setFormData({ ...formData, totalMarks: Number.parseInt(e.target.value) })}
                    min="1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="passingMarks">Passing Marks *</Label>
                  <Input
                    id="passingMarks"
                    type="number"
                    value={formData.passingMarks}
                    onChange={(e) => setFormData({ ...formData, passingMarks: Number.parseInt(e.target.value) })}
                    min="1"
                    max={formData.totalMarks}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="room">Room/Hall *</Label>
                  <Input
                    id="room"
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    placeholder="Exam Hall A"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="examiner">Examiner *</Label>
                  <Input
                    id="examiner"
                    value={formData.examiner}
                    onChange={(e) => setFormData({ ...formData, examiner: e.target.value })}
                    placeholder="Dr. John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Input
                    id="semester"
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                    placeholder="Fall 2024"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="academicYear">Academic Year</Label>
                  <Input
                    id="academicYear"
                    value={formData.academicYear}
                    onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                    placeholder="2024-2025"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="instructions">Instructions</Label>
                  <Textarea
                    id="instructions"
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    placeholder="Enter exam instructions and rules..."
                    rows={4}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit">{selectedExam ? "Update" : "Schedule"} Exam</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <Button variant={activeTab === "exams" ? "default" : "outline"} onClick={() => setActiveTab("exams")}>
              <FileText className="h-4 w-4 mr-2" />
              Exams
            </Button>
            <Button variant={activeTab === "results" ? "default" : "outline"} onClick={() => setActiveTab("results")}>
              <Users className="h-4 w-4 mr-2" />
              Results
            </Button>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1 flex gap-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              {activeTab === "exams" && (
                <>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={filterClass} onValueChange={setFilterClass}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      {uniqueClasses.map((className) => (
                        <SelectItem key={className} value={className}>
                          {className}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {examTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </>
              )}
            </div>
            <Button variant="outline" onClick={handleExportCSV}>
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === "exams" ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Exam Title</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExams.map((exam) => (
                  <TableRow key={exam.id}>
                    <TableCell className="font-medium">{exam.title}</TableCell>
                    <TableCell>{exam.subject}</TableCell>
                    <TableCell>{exam.className}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{exam.examType}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{formatDate(exam.date)}</div>
                        <div className="text-muted-foreground">
                          {formatTime(exam.startTime)} - {formatTime(exam.endTime)}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{exam.duration} min</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{exam.totalMarks}</div>
                        <div className="text-muted-foreground">Pass: {exam.passingMarks}</div>
                      </div>
                    </TableCell>
                    <TableCell>{exam.room}</TableCell>
                    <TableCell>
                      <Select
                        value={exam.status}
                        onValueChange={(value) => handleStatusChange(exam.id, value as Exam["status"])}
                      >
                        <SelectTrigger className={`w-[130px] ${getStatusBadgeColor(exam.status)}`}>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                          <SelectItem value="ongoing">Ongoing</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(exam)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(exam.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Exam</TableHead>
                  <TableHead>Marks Obtained</TableHead>
                  <TableHead>Total Marks</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Remarks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResults.map((result) => (
                  <TableRow key={result.id}>
                    <TableCell className="font-mono">{result.studentId}</TableCell>
                    <TableCell className="font-medium">{result.studentName}</TableCell>
                    <TableCell>{exams.find((e) => e.id === result.examId)?.title}</TableCell>
                    <TableCell>{result.marksObtained}</TableCell>
                    <TableCell>{result.totalMarks}</TableCell>
                    <TableCell>
                      <span className="font-medium">{result.percentage.toFixed(2)}%</span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={result.grade === "A+" || result.grade === "A" ? "default" : "secondary"}
                        className={
                          result.grade === "F"
                            ? "bg-red-100 text-red-800"
                            : result.grade.startsWith("A")
                              ? "bg-green-100 text-green-800"
                              : ""
                        }
                      >
                        {result.grade}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={result.status === "pass" ? "default" : "destructive"}>
                        {result.status.toUpperCase()}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">{result.remarks}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
