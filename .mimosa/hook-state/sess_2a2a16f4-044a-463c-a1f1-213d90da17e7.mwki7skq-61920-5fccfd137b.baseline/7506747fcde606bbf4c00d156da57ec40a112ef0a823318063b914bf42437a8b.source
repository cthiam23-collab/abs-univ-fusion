import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Simulated financial data (replace with actual database operations in a real application)
  const financialData = {
    totalRevenue: 1000000,
    totalExpenses: 750000,
    netProfit: 250000,
    recentTransactions: [
      { id: "1", date: "2023-05-01", description: "Tuition Fee", amount: 50000, type: "income" },
      { id: "2", date: "2023-05-02", description: "Staff Salary", amount: 30000, type: "expense" },
      { id: "3", date: "2023-05-03", description: "Book Store Sales", amount: 5000, type: "income" },
      { id: "4", date: "2023-05-04", description: "Utility Bills", amount: 2000, type: "expense" },
      { id: "5", date: "2023-05-05", description: "Donation", amount: 10000, type: "income" },
    ],
  }

  return NextResponse.json(financialData)
}
