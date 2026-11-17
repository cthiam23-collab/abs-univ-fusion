"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface ResearchProject {
  id: string
  title: string
  description: string
  principalInvestigator: string
  fundingAmount: number
  startDate: string
  endDate: string
}

export default function ResearchPage() {
  const [researchProjects, setResearchProjects] = useState<ResearchProject[]>([])
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    principalInvestigator: "",
    fundingAmount: 0,
    startDate: "",
    endDate: "",
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchResearchProjects()
  }, [])

  const fetchResearchProjects = async () => {
    try {
      const response = await fetch("/api/admin/research")
      if (!response.ok) throw new Error("Failed to fetch research projects")
      const data = await response.json()
      setResearchProjects(data)
    } catch (error) {
      console.error("Error fetching research projects:", error)
      toast({
        title: "Error",
        description: "Failed to fetch research projects. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewProject((prev) => ({ ...prev, [name]: name === "fundingAmount" ? Number.parseFloat(value) : value }))
  }

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/admin/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })
      if (!response.ok) throw new Error("Failed to add research project")
      await fetchResearchProjects()
      setNewProject({
        title: "",
        description: "",
        principalInvestigator: "",
        fundingAmount: 0,
        startDate: "",
        endDate: "",
      })
      toast({
        title: "Research Project Added",
        description: "The new research project has been successfully added.",
      })
    } catch (error) {
      console.error("Error adding research project:", error)
      toast({
        title: "Error",
        description: "Failed to add research project. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Research Management</h1>
      <form onSubmit={handleAddProject} className="mb-4 space-y-2">
        <Input
          type="text"
          name="title"
          placeholder="Project Title"
          value={newProject.title}
          onChange={handleInputChange}
          required
        />
        <Textarea
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="principalInvestigator"
          placeholder="Principal Investigator"
          value={newProject.principalInvestigator}
          onChange={handleInputChange}
          required
        />
        <Input
          type="number"
          name="fundingAmount"
          placeholder="Funding Amount"
          value={newProject.fundingAmount}
          onChange={handleInputChange}
          required
        />
        <Input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={newProject.startDate}
          onChange={handleInputChange}
          required
        />
        <Input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={newProject.endDate}
          onChange={handleInputChange}
          required
        />
        <Button type="submit">Add Research Project</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Principal Investigator</TableHead>
            <TableHead>Funding Amount</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {researchProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.principalInvestigator}</TableCell>
              <TableCell>${project.fundingAmount.toLocaleString()}</TableCell>
              <TableCell>{project.startDate}</TableCell>
              <TableCell>{project.endDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
