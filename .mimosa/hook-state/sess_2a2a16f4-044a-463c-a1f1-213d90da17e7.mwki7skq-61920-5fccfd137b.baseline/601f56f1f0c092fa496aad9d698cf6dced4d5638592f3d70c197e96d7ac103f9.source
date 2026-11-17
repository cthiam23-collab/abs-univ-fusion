"use client"

import { useState } from "react"
import { formatCurrency } from "@/lib/admin-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DollarSign, CreditCard } from "lucide-react"

export function FeesAndPayments() {
  const [fees, setFees] = useState([
    { id: 1, description: "Tuition Fee", amount: 5000, dueDate: "2023-09-01", status: "Unpaid" },
    { id: 2, description: "Library Fee", amount: 100, dueDate: "2023-09-01", status: "Paid" },
    { id: 3, description: "Technology Fee", amount: 200, dueDate: "2023-09-01", status: "Unpaid" },
  ])

  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const handlePayment = (id: number) => {
    setFees(fees.map((fee) => (fee.id === id ? { ...fee, status: "Paid" } : fee)))
  }

  const totalUnpaid = fees.reduce((sum, fee) => (fee.status === "Unpaid" ? sum + fee.amount : sum), 0)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="mr-2 h-6 w-6" />
            Fees and Payments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fees.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.description}</TableCell>
                  <TableCell>{formatCurrency(fee.amount)}</TableCell>
                  <TableCell>{fee.dueDate}</TableCell>
                  <TableCell>{fee.status}</TableCell>
                  <TableCell>
                    {fee.status === "Unpaid" && (
                      <Button variant="outline" size="sm" onClick={() => handlePayment(fee.id)}>
                        Pay Now
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Total Unpaid Fees</p>
            <p className="text-2xl font-bold">{formatCurrency(totalUnpaid)}</p>
          </div>
          <Dialog open={showPaymentForm} onOpenChange={setShowPaymentForm}>
            <DialogTrigger asChild>
              <Button>Make Payment</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Make a Payment</DialogTitle>
                <DialogDescription>Enter your payment details below.</DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" placeholder="Enter amount" />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="Enter card number" />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="CVV" />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Process Payment
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}
