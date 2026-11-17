"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, GraduationCap, BookOpen } from "lucide-react"
import Image from "next/image"

export function AcademicAdvising() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)

  const studentInfo = {
    name: "John Doe",
    major: "Business Administration",
    advisor: "Dr. Jane Smith",
    creditsCompleted: 60,
    creditsRequired: 120,
    gpa: 3.7,
  }

  const degreeProgress = [
    { category: "General Education", completed: 30, required: 40 },
    { category: "Major Requirements", completed: 24, required: 60 },
    { category: "Electives", completed: 6, required: 20 },
  ]

  const recommendedCourses = [
    { code: "BUS301", name: "Corporate Finance", credits: 3 },
    { code: "MKT250", name: "Principles of Marketing", credits: 3 },
    { code: "MGT320", name: "Organizational Behavior", credits: 3 },
  ]

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the appointment data to the server
    alert("Appointment request submitted successfully!")
    setShowAppointmentForm(false)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Academic Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p>
                <strong>Name:</strong> {studentInfo.name}
              </p>
              <p>
                <strong>Major:</strong> {studentInfo.major}
              </p>
              <p>
                <strong>Academic Advisor:</strong> {studentInfo.advisor}
              </p>
            </div>
            <div>
              <p>
                <strong>Credits Completed:</strong> {studentInfo.creditsCompleted}/{studentInfo.creditsRequired}
              </p>
              <p>
                <strong>Overall GPA:</strong> {studentInfo.gpa.toFixed(2)}
              </p>
              <Progress value={(studentInfo.creditsCompleted / studentInfo.creditsRequired) * 100} className="mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Degree Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Completed</TableHead>
                <TableHead>Required</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {degreeProgress.map((category, index) => (
                <TableRow key={index}>
                  <TableCell>{category.category}</TableCell>
                  <TableCell>{category.completed}</TableCell>
                  <TableCell>{category.required}</TableCell>
                  <TableCell>
                    <Progress value={(category.completed / category.required) * 100} className="w-[60px]" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Code</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Credits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recommendedCourses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course.code}</TableCell>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.credits}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Dialog open={showAppointmentForm} onOpenChange={setShowAppointmentForm}>
          <DialogTrigger asChild>
            <Button className="flex-1">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Advising Appointment
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule Advising Appointment</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" required />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Input id="time" type="time" required />
              </div>
              <div>
                <Label htmlFor="reason">Reason for Appointment</Label>
                <Textarea id="reason" required />
              </div>
              <Button type="submit">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
        <Button className="flex-1">
          <GraduationCap className="mr-2 h-4 w-4" />
          View Graduation Plan
        </Button>
        <Button className="flex-1">
          <BookOpen className="mr-2 h-4 w-4" />
          Explore Majors and Minors
        </Button>
      </div>

      <Image
        src="/images/academic-advising.jpg"
        alt="Academic Advising"
        width={800}
        height={400}
        className="rounded-lg mt-4"
      />
    </div>
  )
}

export default AcademicAdvising
