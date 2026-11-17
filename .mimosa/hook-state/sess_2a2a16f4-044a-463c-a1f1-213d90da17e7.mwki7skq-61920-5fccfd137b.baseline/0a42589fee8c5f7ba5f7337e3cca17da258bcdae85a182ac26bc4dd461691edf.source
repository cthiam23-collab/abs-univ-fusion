"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"

export function Timetable() {
  const [selectedDay, setSelectedDay] = useState<keyof typeof timetable>("Monday")

  const timetable = {
    Monday: [
      { time: "09:00 - 10:30", course: "BUS101: Introduction to Business", location: "Room A101" },
      { time: "11:00 - 12:30", course: "ECO201: Microeconomics", location: "Room B205" },
      { time: "14:00 - 15:30", course: "MAT110: Calculus I", location: "Room C303" },
    ],
    Tuesday: [
      { time: "09:00 - 10:30", course: "ENG105: Academic Writing", location: "Room D104" },
      { time: "11:00 - 12:30", course: "CSC150: Introduction to Programming", location: "Lab 1" },
    ],
    Wednesday: [
      { time: "10:00 - 11:30", course: "BUS101: Introduction to Business", location: "Room A101" },
      { time: "13:00 - 14:30", course: "ECO201: Microeconomics", location: "Room B205" },
    ],
    Thursday: [
      { time: "09:00 - 10:30", course: "MAT110: Calculus I", location: "Room C303" },
      { time: "11:00 - 12:30", course: "ENG105: Academic Writing", location: "Room D104" },
    ],
    Friday: [
      { time: "10:00 - 11:30", course: "CSC150: Introduction to Programming", location: "Lab 1" },
      { time: "14:00 - 15:30", course: "BUS101: Introduction to Business", location: "Room A101" },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calendar className="mr-2 h-6 w-6" />
          Weekly Timetable
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={selectedDay} onValueChange={(value) => setSelectedDay(value as keyof typeof timetable)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a day" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(timetable).map((day) => (
                <SelectItem key={day} value={day}>
                  {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {timetable[selectedDay].map((session, index) => (
              <TableRow key={index}>
                <TableCell>{session.time}</TableCell>
                <TableCell>{session.course}</TableCell>
                <TableCell>{session.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
