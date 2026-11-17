"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "@/components/ui/use-toast"

interface AttendanceRecord {
  courseCode: string
  courseName: string
  date: string
  status: "Present" | "Absent" | "Late"
}

export function Attendance() {
  const { t } = useLanguage()
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([])
  const [selectedCourse, setSelectedCourse] = useState<string>("all")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch("/api/attendance")
        if (!response.ok) throw new Error("Failed to fetch attendance records")
        const data = await response.json()
        setAttendanceRecords(data)
      } catch (error) {
        console.error("Error fetching attendance records:", error)
        toast({
          title: t("error"),
          description: t("attendanceFetchError"),
          variant: "destructive",
        })
      }
    }

    fetchAttendance()
  }, [t])

  const courses = ["all", ...new Set(attendanceRecords.map((record) => record.courseCode))]

  const filteredRecords = attendanceRecords.filter(
    (record) =>
      (selectedCourse === "all" || record.courseCode === selectedCourse) &&
      (!selectedDate || new Date(record.date).toDateString() === selectedDate.toDateString()),
  )

  const calculateAttendanceRate = (records: AttendanceRecord[]) => {
    const totalClasses = records.length
    const attendedClasses = records.filter((record) => record.status === "Present" || record.status === "Late").length
    return totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 0
  }

  const attendanceRate = calculateAttendanceRate(filteredRecords)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("attendanceReport")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t("selectCourse")} />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course === "all" ? t("allCourses") : course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-right">
              <p className="text-2xl font-bold">{attendanceRate.toFixed(1)}%</p>
              <p className="text-sm text-muted-foreground">{t("attendanceRate")}</p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("courseCode")}</TableHead>
                <TableHead>{t("courseName")}</TableHead>
                <TableHead>{t("date")}</TableHead>
                <TableHead>{t("status")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.courseCode}</TableCell>
                  <TableCell>{record.courseName}</TableCell>
                  <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        record.status === "Present"
                          ? "bg-green-100 text-green-800"
                          : record.status === "Absent"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {t(record.status)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("attendanceCalendar")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
        </CardContent>
      </Card>
    </div>
  )
}
