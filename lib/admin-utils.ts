export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XOF", maximumFractionDigits: 0 }).format(amount)
}

export const calculatePercentage = (value: number, total: number): number => {
  return (value / total) * 100
}

export const generateRandomId = (): string => {
  return Math.random().toString(36).substr(2, 9)
}

export const validateEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return re.test(email)
}
