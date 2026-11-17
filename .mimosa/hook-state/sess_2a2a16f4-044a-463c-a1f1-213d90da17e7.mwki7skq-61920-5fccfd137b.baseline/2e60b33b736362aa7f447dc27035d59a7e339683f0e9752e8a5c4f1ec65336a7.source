"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface Facility {
  id: string
  name: string
  type: string
  capacity: number
  location: string
  status: string
}

export default function FacilitiesPage() {
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [newFacility, setNewFacility] = useState({ name: "", type: "", capacity: 0, location: "", status: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchFacilities()
  }, [])

  const fetchFacilities = async () => {
    try {
      const response = await fetch("/api/admin/facilities")
      if (!response.ok) throw new Error("Failed to fetch facilities")
      const data = await response.json()
      setFacilities(data)
    } catch (error) {
      console.error("Error fetching facilities:", error)
      toast({
        title: "Error",
        description: "Failed to fetch facilities. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewFacility((prev) => ({ ...prev, [name]: name === "capacity" ? Number.parseInt(value) : value }))
  }

  const handleAddFacility = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/facilities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFacility),
      })
      if (!response.ok) throw new Error("Failed to add facility")
      await fetchFacilities()
      setNewFacility({ name: "", type: "", capacity: 0, location: "", status: "" })
      toast({
        title: "Facility Added",
        description: "The new facility has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding facility:", error)
      toast({
        title: "Error",
        description: "Failed to add facility. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Facilities Management</h1>
      <form onSubmit={handleAddFacility} className="mb-4 space-y-2">
        <Input
          type="text"
          name="name"
          placeholder="Facility Name"
          value={newFacility.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="type"
          placeholder="Facility Type"
          value={newFacility.type}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={newFacility.capacity}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="location"
          placeholder="Location"
          value={newFacility.location}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="status"
          placeholder="Status"
          value={newFacility.status}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Facility</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facilities.map((facility) => (
            <TableRow key={facility.id}>
              <TableCell>{facility.name}</TableCell>
              <TableCell>{facility.type}</TableCell>
              <TableCell>{facility.capacity}</TableCell>
              <TableCell>{facility.location}</TableCell>
              <TableCell>{facility.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
