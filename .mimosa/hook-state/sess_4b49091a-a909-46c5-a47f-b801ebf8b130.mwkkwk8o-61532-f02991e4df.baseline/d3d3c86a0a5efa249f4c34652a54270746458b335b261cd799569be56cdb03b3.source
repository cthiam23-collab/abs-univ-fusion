"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Search, Plus, CreditCard, CheckCircle, Clock, Loader } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Payment {
  id: string
  student_name: string
  amount: number
  payment_method: string
  transaction_id?: string
  status: string
  payment_date: string
  fee_type: string
}

export default function PaymentsPage() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [filterMethod, setFilterMethod] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchPayments()
  }, [filterStatus, filterMethod])

  const fetchPayments = async () => {
    try {
      setLoading(true)
      setError(null)
      const params = new URLSearchParams()
      if (filterStatus !== "all") params.append("status", filterStatus)
      if (filterMethod !== "all") params.append("method", filterMethod)

      const response = await fetch(`/api/payments?${params}`)
      if (!response.ok) throw new Error("Failed to fetch payments")
      const data = await response.json()
      setPayments(data.data || [])
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch payments"
      setError(message)
      toast({ title: "Error", description: message, variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  const filteredPayments = payments.filter(
    (p) =>
      p.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.transaction_id?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const stats = {
    totalAmount: payments.reduce((sum, p) => sum + p.amount, 0),
    completedCount: payments.filter((p) => p.status === "completed").length,
    pendingCount: payments.filter((p) => p.status === "pending").length,
    failedCount: payments.filter((p) => p.status === "failed").length,
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <CreditCard className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Payment Management</h1>
          <p className="text-gray-600">Track and process student payments</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Record Payment
        </Button>
      </div>

      {error && <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">${(stats.totalAmount / 1000).toFixed(0)}K</div>
            <div className="text-sm text-gray-500">Total Received</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">{stats.completedCount}</div>
            <div className="text-sm text-gray-500">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">{stats.pendingCount}</div>
            <div className="text-sm text-gray-500">Pending</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-red-600">{stats.failedCount}</div>
            <div className="text-sm text-gray-500">Failed</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by student or transaction ID..."
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
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterMethod} onValueChange={setFilterMethod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Methods</SelectItem>
                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                <SelectItem value="credit-card">Credit Card</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="cheque">Cheque</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payments ({filteredPayments.length})</CardTitle>
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
                    <TableHead>Date</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Fee Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{new Date(payment.payment_date).toLocaleDateString()}</TableCell>
                      <TableCell className="font-medium">{payment.student_name}</TableCell>
                      <TableCell>{payment.fee_type}</TableCell>
                      <TableCell className="font-bold">${payment.amount.toLocaleString()}</TableCell>
                      <TableCell>{payment.payment_method}</TableCell>
                      <TableCell className="text-sm text-gray-500">{payment.transaction_id || "-"}</TableCell>
                      <TableCell>
                        <Badge className={getStatusBadge(payment.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(payment.status)}
                            {payment.status}
                          </span>
                        </Badge>
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
