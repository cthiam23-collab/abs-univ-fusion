"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface Program {
  id: string
  name: string
  department: string
  duration: string
  degree: string
}

export function AdminPrograms() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [newProgram, setNewProgram] = useState({ name: "", department: "", duration: "", degree: "" })
  const { toast } = useToast()

  useEffect(() => {
    fetchPrograms()
  }, [])

  const fetchPrograms = async () => {
    try {
      const response = await fetch("/api/admin/programs")
      if (!response.ok) throw new Error("Failed to fetch programs")
      const data = await response.json()
      setPrograms(data)
    } catch (error) {
      console.error("Error fetching programs:", error)
      toast({
        title: "Error",
        description: "Failed to fetch programs. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewProgram((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddProgram = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProgram),
      })
      if (!response.ok) throw new Error("Failed to add program")
      await fetchPrograms()
      setNewProgram({ name: "", department: "", duration: "", degree: "" })
      toast({
        title: "Program Added",
        description: "The new academic program has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding program:", error)
      toast({
        title: "Error",
        description: "Failed to add program. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Academic Programs Management</h1>
      <form onSubmit={handleAddProgram} className="mb-4 space-y-2">
        <Input
          type="text"
          name="name"
          placeholder="Program Name"
          value={newProgram.name}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="department"
          placeholder="Department"
          value={newProgram.department}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="duration"
          placeholder="Duration"
          value={newProgram.duration}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="degree"
          placeholder="Degree"
          value={newProgram.degree}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Program</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Degree</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {programs.map((program) => (
            <TableRow key={program.id}>
              <TableCell>{program.name}</TableCell>
              <TableCell>{program.department}</TableCell>
              <TableCell>{program.duration}</TableCell>
              <TableCell>{program.degree}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AdminPrograms
