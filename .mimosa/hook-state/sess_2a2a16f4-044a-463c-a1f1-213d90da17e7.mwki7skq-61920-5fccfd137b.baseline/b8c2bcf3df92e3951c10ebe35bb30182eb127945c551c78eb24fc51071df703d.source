"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { mockAttendance, mockClasses } from "@/lib/mock-data"
import { searchFilter, formatDate, exportToCSV } from "@/lib/helpers"
import { Search, Download, Calendar, CheckCircle, XCircle, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AttendancePage() {
  const [attendance, setAttendance] = useState(mockAttendance)
  const [filteredAttendance, setFilteredAttendance] = useState(mockAttendance)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterClass, setFilterClass] = useState("all")
  const [filterDate, setFilterDate] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const { toast } = useToast()

  useEffect(() => {
    applyFilters()
  }, [searchTerm, filterClass, filterDate, filterStatus, attendance])

  const applyFilters = () => {
    let filtered = attendance

    if (searchTerm) {
      filtered = searchFilter(filtered, searchTerm, ["studentId", "studentName", "classCode", "className"])
    }

    if (filterClass !== "all") {
      filtered = filtered.filter((a) => a.classCode === filterClass)
    }

    if (filterDate) {
      filtered = filtered.filter((a) => a.date === filterDate)
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((a) => a.status === filterStatus)
    }

    setFilteredAttendance(filtered)
  }

  const handleMarkAttendance = (attendanceId: string, status: string) => {
    setAttendance(attendance.map((a) => (a.id === attendanceId ? { ...a, status, remarks: "" } : a)))
    toast({
      title: "Attendance Updated",
      description: `Attendance marked as ${status}.`,
    })
  }

  const handleBulkMarkPresent = () => {
    const today = new Date().toISOString().split("T")[0]
    setAttendance(
      attendance.map((a) => (a.date === today && a.status === "absent" ? { ...a, status: "present", remarks: "" } : a)),
    )
    toast({
      title: "Bulk Update Complete",
      description: "All absent students for today marked as present.",
    })
  }

  const handleExportCSV = () => {
    exportToCSV(filteredAttendance, "attendance_export")
    toast({
      title: "Export Successful",
      description: "Attendance data has been exported to CSV.",
    })
  }

  const getTotalPresent = () => {
    return filteredAttendance.filter((a) => a.status === "present").length
  }

  const getTotalAbsent = () => {
    return filteredAttendance.filter((a) => a.status === "absent").length
  }

  const getTotalLate = () => {
    return filteredAttendance.filter((a) => a.status === "late").length
  }

  const getAttendanceRate = () => {
    const total = filteredAttendance.length
    if (total === 0) return 0
    return Math.round((getTotalPresent() / total) * 100)
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Attendance Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and manage student attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleBulkMarkPresent}>
            <CheckCircle className="h-4 w-4 mr-2" />
            Mark All Present
          </Button>
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export
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
                placeholder="Search attendance..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterClass} onValueChange={setFilterClass}>
              <SelectTrigger>
                <SelectValue placeholder="All Classes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {mockClasses.map((c) => (
                  <SelectItem key={c.id} value={c.classCode}>
                    {c.classCode} - {c.className}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="present">Present</SelectItem>
                <SelectItem value="absent">Absent</SelectItem>
                <SelectItem value="late">Late</SelectItem>
                <SelectItem value="excused">Excused</SelectItem>
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
                <div className="text-2xl font-bold text-green-600">{getTotalPresent()}</div>
                <div className="text-sm text-gray-500">Present</div>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">{getTotalAbsent()}</div>
                <div className="text-sm text-gray-500">Absent</div>
              </div>
              <XCircle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-yellow-600">{getTotalLate()}</div>
                <div className="text-sm text-gray-500">Late</div>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{getAttendanceRate()}%</div>
                <div className="text-sm text-gray-500">Attendance Rate</div>
              </div>
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance Records ({filteredAttendance.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Remarks</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAttendance.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell className="font-medium">{record.studentId}</TableCell>
                    <TableCell>{record.studentName}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{record.classCode}</div>
                        <div className="text-xs text-gray-500">{record.className}</div>
                      </div>
                    </TableCell>
                    <TableCell>{formatDate(record.date)}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          record.status === "present"
                            ? "bg-green-100 text-green-800"
                            : record.status === "absent"
                              ? "bg-red-100 text-red-800"
                              : record.status === "late"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                        }
                      >
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">{record.remarks || "-"}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMarkAttendance(record.id, "present")}
                          disabled={record.status === "present"}
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMarkAttendance(record.id, "absent")}
                          disabled={record.status === "absent"}
                        >
                          <XCircle className="h-4 w-4 text-red-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMarkAttendance(record.id, "late")}
                          disabled={record.status === "late"}
                        >
                          <Clock className="h-4 w-4 text-yellow-600" />
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
    </div>
  )
}
