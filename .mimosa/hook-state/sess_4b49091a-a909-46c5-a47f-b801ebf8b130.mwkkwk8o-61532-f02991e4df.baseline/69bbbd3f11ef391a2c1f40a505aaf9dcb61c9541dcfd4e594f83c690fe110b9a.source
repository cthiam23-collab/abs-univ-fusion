"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { formatCurrency } from "@/lib/admin-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FinancialRecord {
  id: string
  type: string
  amount: number
  date: string
  status: "Paid" | "Pending" | "Overdue"
}

export function FinancialInformation() {
  const { t } = useLanguage()
  const [financialRecords, setFinancialRecords] = useState<FinancialRecord[]>([])
  const [totalBalance, setTotalBalance] = useState(0)
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const [paymentAmount, setPaymentAmount] = useState("")

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        const response = await fetch("/api/financial-records")
        if (!response.ok) throw new Error("Failed to fetch financial records")
        const data = await response.json()
        setFinancialRecords(data)
        calculateTotalBalance(data)
      } catch (error) {
        console.error("Error fetching financial records:", error)
        toast({
          title: t("error"),
          description: t("financialRecordsFetchError"),
          variant: "destructive",
        })
      }
    }

    fetchFinancialData()
  }, [t])

  const calculateTotalBalance = (records: FinancialRecord[]) => {
    const total = records.reduce((sum, record) => {
      return record.type === "Charge" ? sum + record.amount : sum - record.amount
    }, 0)
    setTotalBalance(total)
  }

  const handlePayment = async () => {
    try {
      const amount = Number.parseFloat(paymentAmount)
      if (isNaN(amount) || amount <= 0) {
        throw new Error("Invalid payment amount")
      }

      const response = await fetch("/api/make-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      })

      if (!response.ok) throw new Error("Failed to process payment")

      const newPayment: FinancialRecord = {
        id: Date.now().toString(),
        type: "Payment",
        amount,
        date: new Date().toISOString(),
        status: "Paid",
      }

      setFinancialRecords([...financialRecords, newPayment])
      calculateTotalBalance([...financialRecords, newPayment])
      setShowPaymentDialog(false)
      setPaymentAmount("")

      toast({
        title: t("success"),
        description: `${t("paymentProcessed")}: ${amount.toFixed(2)}`,
      })
    } catch (error) {
      console.error("Error processing payment:", error)
      toast({
        title: t("error"),
        description: t("paymentProcessError"),
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("financialSummary")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-2xl font-bold">{formatCurrency(totalBalance)}</p>
              <p className="text-sm text-muted-foreground">{t("currentBalance")}</p>
            </div>
            <Button onClick={() => setShowPaymentDialog(true)}>{t("makePayment")}</Button>
          </div>
          <Progress value={(totalBalance / 10000) * 100} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2">
            {`${t("balanceOutOfTotal")}: ${formatCurrency(totalBalance)} / ${formatCurrency(10000)}`}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("financialRecords")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("date")}</TableHead>
                <TableHead>{t("description")}</TableHead>
                <TableHead>{t("amount")}</TableHead>
                <TableHead>{t("status")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financialRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                  <TableCell>{t(record.type)}</TableCell>
                  <TableCell className={record.type === "Charge" ? "text-red-500" : "text-green-500"}>
                    {formatCurrency(record.amount)}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        record.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : record.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {t(record.status)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("makePayment")}</DialogTitle>
            <DialogDescription>{t("enterPaymentAmount")}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                {t("amount")}
              </Label>
              <Input
                id="amount"
                type="number"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handlePayment}>{t("processPayment")}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
