"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Search, Plus, Edit, Trash2, Download, Loader } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Fee {
  id: string
  student_name: string
  amount: number
  fee_type: string
  due_date: string
  status: string
  academic_year: string
}

export default function ManageFeesPage() {
  const [fees, setFees] = useState<Fee[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchFees()
  }, [filterStatus])

  const fetchFees = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = filterStatus !== "all" ? `?status=${filterStatus}` : ""
      const response = await fetch(`/api/fees${params}`)
      if (!response.ok) throw new Error("Failed to fetch fees")
      const data = await response.json()
      setFees(data.data || [])
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch fees"
      setError(message)
      toast({ title: "Error", description: message, variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const filteredFees = fees.filter(
    (f) =>
      f.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.fee_type.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      case "partial":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const stats = {
    totalFees: fees.reduce((sum, f) => sum + f.amount, 0),
    collectedFees: fees.filter((f) => f.status === "completed").reduce((sum, f) => sum + f.amount, 0),
    pendingFees: fees
      .filter((f) => f.status === "pending" || f.status === "partial")
      .reduce((sum, f) => sum + f.amount, 0),
    overdueFees: fees.filter((f) => f.status === "overdue").reduce((sum, f) => sum + f.amount, 0),
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Fee Management</h1>
          <p className="text-gray-600">Track and manage student fees</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Fee
          </Button>
        </div>
      </div>

      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">${(stats.totalFees / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-500">Total Fees</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">${(stats.collectedFees / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-500">Collected</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">${(stats.pendingFees / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-500">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">${(stats.overdueFees / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-500">Overdue</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by student or fee type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="partial">Partial</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fees ({filteredFees.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader className="h-6 w-6 animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Fee Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFees.map((fee) => (
                    <TableRow key={fee.id}>
                      <TableCell className="font-medium">{fee.student_name}</TableCell>
                      <TableCell>{fee.fee_type}</TableCell>
                      <TableCell className="font-bold">${fee.amount.toLocaleString()}</TableCell>
                      <TableCell>{new Date(fee.due_date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(fee.status)}>{fee.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
