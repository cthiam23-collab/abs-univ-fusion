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
import { useToast } from "@/hooks/use-toast"
import { Calendar, Clock, Plus, Search, Edit, Trash2, Download, RefreshCw } from "lucide-react"
import { getMockScheduleData } from "@/lib/mock-data"
import { exportToCSV, exportToPDF } from "@/lib/helpers"

interface ScheduleEntry {
  id: string
  classId: string
  className: string
  teacherId: string
  teacherName: string
  subject: string
  dayOfWeek: string
  startTime: string
  endTime: string
  room: string
  section: string
  semester: string
  academicYear: string
}

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<ScheduleEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDay, setFilterDay] = useState("all")
  const [filterClass, setFilterClass] = useState("all")
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleEntry | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    classId: "",
    className: "",
    teacherId: "",
    teacherName: "",
    subject: "",
    dayOfWeek: "",
    startTime: "",
    endTime: "",
    room: "",
    section: "",
    semester: "Fall 2024",
    academicYear: "2024-2025",
  })

  useEffect(() => {
    loadSchedules()
  }, [])

  const loadSchedules = async () => {
    setLoading(true)
    try {
      const data = getMockScheduleData()
      setSchedules(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load schedule data",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const filteredSchedules = schedules.filter((schedule) => {
    const matchesSearch =
      schedule.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.teacherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.room.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDay = filterDay === "all" || schedule.dayOfWeek === filterDay
    const matchesClass = filterClass === "all" || schedule.className === filterClass
    return matchesSearch && matchesDay && matchesClass
  })

  const uniqueClasses = Array.from(new Set(schedules.map((s) => s.className)))
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (selectedSchedule) {
        setSchedules(schedules.map((s) => (s.id === selectedSchedule.id ? { ...formData, id: s.id } : s)))
        toast({
          title: "Success",
          description: "Schedule entry updated successfully",
        })
      } else {
        const newSchedule: ScheduleEntry = {
          ...formData,
          id: `SCH${Date.now()}`,
        }
        setSchedules([...schedules, newSchedule])
        toast({
          title: "Success",
          description: "Schedule entry created successfully",
        })
      }
      resetForm()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save schedule entry",
        variant: "destructive",
      })
    }
  }

  const handleEdit = (schedule: ScheduleEntry) => {
    setSelectedSchedule(schedule)
    setFormData(schedule)
    setIsFormOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this schedule entry?")) return
    try {
      setSchedules(schedules.filter((s) => s.id !== id))
      toast({
        title: "Success",
        description: "Schedule entry deleted successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete schedule entry",
        variant: "destructive",
      })
    }
  }

  const resetForm = () => {
    setFormData({
      classId: "",
      className: "",
      teacherId: "",
      teacherName: "",
      subject: "",
      dayOfWeek: "",
      startTime: "",
      endTime: "",
      room: "",
      section: "",
      semester: "Fall 2024",
      academicYear: "2024-2025",
    })
    setSelectedSchedule(null)
    setIsFormOpen(false)
  }

  const handleExportCSV = () => {
    exportToCSV(filteredSchedules, "schedule")
    toast({
      title: "Success",
      description: "Schedule exported to CSV",
    })
  }

  const handleExportPDF = () => {
    exportToPDF(filteredSchedules, "Schedule Report", "schedule")
    toast({
      title: "Success",
      description: "Schedule exported to PDF",
    })
  }

  const getScheduleByDay = (day: string) => {
    return filteredSchedules.filter((s) => s.dayOfWeek === day).sort((a, b) => a.startTime.localeCompare(b.startTime))
  }

  const hasTimeConflict = (schedule: ScheduleEntry) => {
    return schedules.some(
      (s) =>
        s.id !== schedule.id &&
        s.dayOfWeek === schedule.dayOfWeek &&
        s.room === schedule.room &&
        ((schedule.startTime >= s.startTime && schedule.startTime < s.endTime) ||
          (schedule.endTime > s.startTime && schedule.endTime <= s.endTime) ||
          (schedule.startTime <= s.startTime && schedule.endTime >= s.endTime)),
    )
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
          <h1 className="text-3xl font-bold">Schedule Management</h1>
          <p className="text-muted-foreground">Manage class schedules and timetables</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Schedule Entry
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{schedules.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(schedules.map((s) => s.dayOfWeek)).size}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Unique Rooms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(schedules.map((s) => s.room)).size}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{new Set(schedules.map((s) => s.subject)).size}</div>
          </CardContent>
        </Card>
      </div>

      {isFormOpen && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedSchedule ? "Edit" : "Add"} Schedule Entry</CardTitle>
            <CardDescription>{selectedSchedule ? "Update" : "Create"} schedule information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="className">Class Name *</Label>
                  <Input
                    id="className"
                    value={formData.className}
                    onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                    placeholder="MBA Finance - Year 1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input
                    id="section"
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                    placeholder="Section A"
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
                  <Label htmlFor="teacherName">Teacher Name *</Label>
                  <Input
                    id="teacherName"
                    value={formData.teacherName}
                    onChange={(e) => setFormData({ ...formData, teacherName: e.target.value })}
                    placeholder="Dr. John Smith"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dayOfWeek">Day of Week *</Label>
                  <Select
                    value={formData.dayOfWeek}
                    onValueChange={(value) => setFormData({ ...formData, dayOfWeek: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      {daysOfWeek.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="room">Room *</Label>
                  <Input
                    id="room"
                    value={formData.room}
                    onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                    placeholder="Room 101"
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
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
                <Button type="submit">{selectedSchedule ? "Update" : "Create"} Schedule Entry</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1 flex gap-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search schedules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={filterDay} onValueChange={setFilterDay}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Filter by day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Days</SelectItem>
                  {daysOfWeek.map((day) => (
                    <SelectItem key={day} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterClass} onValueChange={setFilterClass}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by class" />
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
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleExportCSV}>
                <Download className="h-4 w-4 mr-2" />
                CSV
              </Button>
              <Button variant="outline" onClick={handleExportPDF}>
                <Download className="h-4 w-4 mr-2" />
                PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {daysOfWeek.map((day) => {
              const daySchedules = getScheduleByDay(day)
              if (daySchedules.length === 0 && filterDay !== "all" && filterDay !== day) return null

              return (
                <div key={day} className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {day}
                    <Badge variant="secondary">{daySchedules.length} classes</Badge>
                  </h3>
                  {daySchedules.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Class</TableHead>
                          <TableHead>Teacher</TableHead>
                          <TableHead>Room</TableHead>
                          <TableHead>Section</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {daySchedules.map((schedule) => (
                          <TableRow key={schedule.id}>
                            <TableCell>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span className="font-medium">
                                  {schedule.startTime} - {schedule.endTime}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{schedule.subject}</TableCell>
                            <TableCell>{schedule.className}</TableCell>
                            <TableCell>{schedule.teacherName}</TableCell>
                            <TableCell>
                              <Badge variant={hasTimeConflict(schedule) ? "destructive" : "outline"}>
                                {schedule.room}
                              </Badge>
                            </TableCell>
                            <TableCell>{schedule.section || "-"}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="ghost" size="sm" onClick={() => handleEdit(schedule)}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" onClick={() => handleDelete(schedule.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p className="text-sm text-muted-foreground py-4">No classes scheduled for this day</p>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
