"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { formatCurrency } from "@/lib/admin-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { toast } from "@/components/ui/use-toast"

interface FinancialAidRecord {
  id: string
  type: string
  amount: number
  status: "Approved" | "Pending" | "Rejected"
  date: string
}

interface Scholarship {
  id: string
  name: string
  amount: number
  deadline: string
}

export function FinancialAid() {
  const { t } = useLanguage()
  const [financialAidRecords, setFinancialAidRecords] = useState<FinancialAidRecord[]>([])
  const [scholarships, setScholarships] = useState<Scholarship[]>([])
  const [totalAid, setTotalAid] = useState(0)
  const [tuitionCost, setTuitionCost] = useState(0)

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        const [aidResponse, scholarshipResponse, tuitionResponse] = await Promise.all([
          fetch("/api/financial-aid"),
          fetch("/api/scholarships"),
          fetch("/api/tuition"),
        ])

        if (!aidResponse.ok || !scholarshipResponse.ok || !tuitionResponse.ok) {
          throw new Error("Failed to fetch financial data")
        }

        const [aidData, scholarshipData, tuitionData] = await Promise.all([
          aidResponse.json(),
          scholarshipResponse.json(),
          tuitionResponse.json(),
        ])

        setFinancialAidRecords(aidData)
        setScholarships(scholarshipData)
        setTuitionCost(tuitionData.cost)

        const totalApprovedAid = aidData
          .filter((record: FinancialAidRecord) => record.status === "Approved")
          .reduce((sum: number, record: FinancialAidRecord) => sum + record.amount, 0)
        setTotalAid(totalApprovedAid)
      } catch (error) {
        console.error("Error fetching financial data:", error)
        toast({
          title: t("error"),
          description: t("financialDataFetchError"),
          variant: "destructive",
        })
      }
    }

    fetchFinancialData()
  }, [t])

  const remainingBalance = Math.max(0, tuitionCost - totalAid)
  const coveragePercentage = (totalAid / tuitionCost) * 100

  const handleApplyScholarship = async (scholarshipId: string) => {
    try {
      const response = await fetch("/api/apply-scholarship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scholarshipId }),
      })
      if (!response.ok) throw new Error("Failed to apply for scholarship")
      toast({
        title: t("success"),
        description: t("scholarshipApplied"),
      })
    } catch (error) {
      console.error("Error applying for scholarship:", error)
      toast({
        title: t("error"),
        description: t("scholarshipApplicationError"),
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t("financialAidOverview")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-semibold">{t("totalTuitionCost")}</p>
              <p className="text-2xl font-bold">{formatCurrency(tuitionCost)}</p>
            </div>
            <div>
              <p className="font-semibold">{t("totalApprovedAid")}</p>
              <p className="text-2xl font-bold">{formatCurrency(totalAid)}</p>
            </div>
            <div>
              <p className="font-semibold">{t("remainingBalance")}</p>
              <p className="text-2xl font-bold">{formatCurrency(remainingBalance)}</p>
            </div>
            <div>
              <p className="font-semibold">{t("coverage")}</p>
              <Progress value={coveragePercentage} className="mt-2" />
              <p className="text-sm text-right">{coveragePercentage.toFixed(1)}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("financialAidRecords")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("type")}</TableHead>
                <TableHead>{t("amount")}</TableHead>
                <TableHead>{t("status")}</TableHead>
                <TableHead>{t("date")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {financialAidRecords.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{t(record.type)}</TableCell>
                  <TableCell>{formatCurrency(record.amount)}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        record.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : record.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {t(record.status)}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("availableScholarships")}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("scholarshipName")}</TableHead>
                <TableHead>{t("amount")}</TableHead>
                <TableHead>{t("deadline")}</TableHead>
                <TableHead>{t("action")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scholarships.map((scholarship) => (
                <TableRow key={scholarship.id}>
                  <TableCell>{scholarship.name}</TableCell>
                  <TableCell>{formatCurrency(scholarship.amount)}</TableCell>
                  <TableCell>{new Date(scholarship.deadline).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleApplyScholarship(scholarship.id)}>
                      {t("apply")}
                    </Button>
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
