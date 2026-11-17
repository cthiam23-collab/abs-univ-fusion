"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function StudentHealthServices() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedService, setSelectedService] = useState("")

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the appointment data to the server
    console.log("Appointment submitted:", { selectedDate, selectedService })
    // Reset form
    setSelectedDate(undefined)
    setSelectedService("")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Student Health Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our Student Health Services provides comprehensive medical care to all enrolled students. Services include
            general health care, mental health counseling, and health education programs.
          </p>
          <h3 className="text-lg font-semibold mb-2">Available Services:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>General Medical Care</li>
            <li>Mental Health Counseling</li>
            <li>Immunizations</li>
            <li>Laboratory Services</li>
            <li>Health Education Programs</li>
          </ul>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Schedule an Appointment</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Schedule an Appointment</DialogTitle>
                <DialogDescription>Choose a date and service for your appointment.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="service">Select Service</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Medical Care</SelectItem>
                      <SelectItem value="mental">Mental Health Counseling</SelectItem>
                      <SelectItem value="immunization">Immunizations</SelectItem>
                      <SelectItem value="lab">Laboratory Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </div>
                <Button type="submit">Schedule Appointment</Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="/financial-aid#health-insurance" className="text-blue-500 hover:underline">
                Student Health Insurance Information
              </a>
            </li>
            <li>
              <a href="/student-resources/support-services#mental-health" className="text-blue-500 hover:underline">
                Mental Health and Wellness Resources
              </a>
            </li>
            <li>
              <a href="/announcements" className="text-blue-500 hover:underline">
                COVID-19 Information and Updates
              </a>
            </li>
            <li>
              <a href="/student-resources/support-services#health-education" className="text-blue-500 hover:underline">
                Health Education Programs
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
