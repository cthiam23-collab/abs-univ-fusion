"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ExamSchedule() {
  const [selectedSemester, setSelectedSemester] = useState("Spring 2023")

  const exams = [
    {
      id: 1,
      course: "BUS101",
      title: "Introduction to Business",
      date: "2023-05-15",
      time: "09:00 - 11:00",
      location: "Hall A",
      type: "Final",
    },
    {
      id: 2,
      course: "ECO201",
      title: "Microeconomics",
      date: "2023-05-18",
      time: "13:00 - 15:00",
      location: "Hall B",
      type: "Final",
    },
    {
      id: 3,
      course: "MAT110",
      title: "Calculus I",
      date: "2023-05-20",
      time: "10:00 - 12:00",
      location: "Hall C",
      type: "Final",
    },
    {
      id: 4,
      course: "CSC150",
      title: "Introduction to Programming",
      date: "2023-05-22",
      time: "14:00 - 16:00",
      location: "Computer Lab",
      type: "Final",
    },
    {
      id: 5,
      course: "ENG105",
      title: "Academic Writing",
      date: "2023-05-25",
      time: "11:00 - 13:00",
      location: "Hall A",
      type: "Final",
    },
  ]

  const filteredExams = exams.filter((exam) => exam.date.startsWith(selectedSemester.split(" ")[1]))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exam Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger>
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fall 2022">Fall 2022</SelectItem>
              <SelectItem value="Spring 2023">Spring 2023</SelectItem>
              <SelectItem value="Fall 2023">Fall 2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredExams.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell>{exam.course}</TableCell>
                <TableCell>{exam.title}</TableCell>
                <TableCell>{exam.date}</TableCell>
                <TableCell>{exam.time}</TableCell>
                <TableCell>{exam.location}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{exam.type}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
