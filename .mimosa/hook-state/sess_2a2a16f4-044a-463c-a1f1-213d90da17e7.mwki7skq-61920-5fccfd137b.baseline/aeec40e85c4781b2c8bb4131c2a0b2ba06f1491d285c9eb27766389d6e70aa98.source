"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"

export function AcademicCalendar() {
  const [selectedSemester, setSelectedSemester] = useState("Fall 2023")

  const calendarEvents = {
    "Fall 2023": [
      { date: "August 28, 2023", event: "Fall Semester Begins" },
      { date: "September 4, 2023", event: "Labor Day (No Classes)" },
      { date: "October 9-10, 2023", event: "Fall Break" },
      { date: "November 22-24, 2023", event: "Thanksgiving Break" },
      { date: "December 8, 2023", event: "Last Day of Classes" },
      { date: "December 11-15, 2023", event: "Final Exams" },
    ],
    "Spring 2024": [
      { date: "January 15, 2024", event: "Spring Semester Begins" },
      { date: "March 11-15, 2024", event: "Spring Break" },
      { date: "April 19, 2024", event: "Good Friday (No Classes)" },
      { date: "May 3, 2024", event: "Last Day of Classes" },
      { date: "May 6-10, 2024", event: "Final Exams" },
      { date: "May 18, 2024", event: "Commencement" },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Academic Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger>
              <SelectValue placeholder="Select semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Fall 2023">Fall 2023</SelectItem>
              <SelectItem value="Spring 2024">Spring 2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Event</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {calendarEvents[selectedSemester as keyof typeof calendarEvents].map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.event}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Calendar
            mode="multiple"
            selected={calendarEvents[selectedSemester as keyof typeof calendarEvents].map(
              (event) => new Date(event.date.split("-")[0]),
            )}
            className="rounded-md border"
          />
        </div>
      </CardContent>
    </Card>
  )
}
