"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  Search,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

export default function FinancePage() {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPeriod, setFilterPeriod] = useState("all")
  const [filterType, setFilterType] = useState("all")

  const [financialData, setFinancialData] = useState({
    totalRevenue: 2850000,
    totalExpenses: 1250000,
    netProfit: 1600000,
    pendingPayments: 125000,
    collectionRate: 95.6,
  })

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "income",
      description: "Tuition Fee - MBA Program",
      amount: 15000,
      date: "2025-01-15",
      status: "completed",
      student: "John Doe",
    },
    {
      id: 2,
      type: "expense",
      description: "Facility Maintenance",
      amount: 5000,
      date: "2025-01-14",
      status: "completed",
      category: "Operations",
    },
    {
      id: 3,
      type: "income",
      description: "Application Fee",
      amount: 500,
      date: "2025-01-14",
      status: "completed",
      student: "Jane Smith",
    },
    {
      id: 4,
      type: "expense",
      description: "Staff Salaries",
      amount: 85000,
      date: "2025-01-10",
      status: "completed",
      category: "Payroll",
    },
    {
      id: 5,
      type: "income",
      description: "Library Fee",
      amount: 200,
      date: "2025-01-13",
      status: "pending",
      student: "Mike Johnson",
    },
  ])

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Financial report is being generated...",
    })
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Financial Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Monitor revenue, expenses, and financial health</p>
        </div>
        <Button onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <div className="p-2 bg-green-100 rounded-full">
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              ${(financialData.totalRevenue / 1000000).toFixed(2)}M
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </Badge>
            </div>
            <Progress value={85} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Expenses</CardTitle>
            <div className="p-2 bg-red-100 rounded-full">
              <ArrowDownRight className="h-5 w-5 text-red-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              ${(financialData.totalExpenses / 1000000).toFixed(2)}M
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                <TrendingDown className="h-3 w-3 mr-1" />
                -3.2% from last month
              </Badge>
            </div>
            <Progress value={65} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Net Profit</CardTitle>
            <div className="p-2 bg-blue-100 rounded-full">
              <ArrowUpRight className="h-5 w-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">${(financialData.netProfit / 1000000).toFixed(2)}M</div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18.3% margin
              </Badge>
            </div>
            <Progress value={75} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Payments</CardTitle>
            <div className="p-2 bg-orange-100 rounded-full">
              <Wallet className="h-5 w-5 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              ${(financialData.pendingPayments / 1000).toFixed(0)}K
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                {financialData.collectionRate}% collected
              </Badge>
            </div>
            <Progress value={financialData.collectionRate} className="mt-3 h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-[200px]">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[200px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={transaction.type === "income" ? "default" : "secondary"}
                      className={
                        transaction.type === "income" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 mr-1" />
                      )}
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {transaction.student || transaction.category || "-"}
                  </TableCell>
                  <TableCell
                    className={`font-bold ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                  >
                    {transaction.type === "income" ? "+" : "-"}${transaction.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={transaction.status === "completed" ? "default" : "secondary"}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
