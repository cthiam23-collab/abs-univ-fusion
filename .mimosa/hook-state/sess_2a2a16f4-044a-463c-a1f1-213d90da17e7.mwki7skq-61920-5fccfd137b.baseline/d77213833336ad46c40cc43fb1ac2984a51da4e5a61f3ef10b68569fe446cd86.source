"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CampusHousing() {
  const [selectedDorm, setSelectedDorm] = useState("")
  const [roomType, setRoomType] = useState("")

  const dorms = [
    { id: "A", name: "Dorm A", availableRooms: 10 },
    { id: "B", name: "Dorm B", availableRooms: 5 },
    { id: "C", name: "Dorm C", availableRooms: 15 },
  ]

  const roomTypes = ["Single", "Double", "Suite"]

  const handleHousingApplication = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the application data to the server
    console.log("Housing application submitted:", { selectedDorm, roomType })
    // Reset form
    setSelectedDorm("")
    setRoomType("")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Campus Housing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Living on campus is a great way to immerse yourself in the university experience. We offer a variety of
            housing options to suit your needs and preferences.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dorm</TableHead>
                <TableHead>Available Rooms</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dorms.map((dorm) => (
                <TableRow key={dorm.id}>
                  <TableCell>{dorm.name}</TableCell>
                  <TableCell>{dorm.availableRooms}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{dorm.name} Details</DialogTitle>
                          <DialogDescription>Information about {dorm.name} and its amenities.</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <p>Available Rooms: {dorm.availableRooms}</p>
                          <p>Amenities: Wi-Fi, Laundry, Study Rooms</p>
                          <p>Location: Central Campus</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Housing Application</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleHousingApplication} className="space-y-4">
            <div>
              <Label htmlFor="dorm-select">Select Dorm</Label>
              <Select value={selectedDorm} onValueChange={setSelectedDorm}>
                <SelectTrigger id="dorm-select">
                  <SelectValue placeholder="Choose a dorm" />
                </SelectTrigger>
                <SelectContent>
                  {dorms.map((dorm) => (
                    <SelectItem key={dorm.id} value={dorm.id}>
                      {dorm.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="room-type-select">Room Type</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger id="room-type-select">
                  <SelectValue placeholder="Choose a room type" />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Submit Housing Application</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Housing Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="/campus-life/housing#policies" className="text-blue-500 hover:underline">
                Housing Policies and Guidelines
              </a>
            </li>
            <li>
              <a href="/campus-life/housing#roommates" className="text-blue-500 hover:underline">
                Roommate Matching Service
              </a>
            </li>
            <li>
              <a href="/campus-life/dining#meal-plans" className="text-blue-500 hover:underline">
                Meal Plan Information
              </a>
            </li>
            <li>
              <a href="/campus-life" className="text-blue-500 hover:underline">
                Campus Safety and Security
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
