export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ValidationError"
  }
}

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "AuthenticationError"
  }
}

export class DatabaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DatabaseError"
  }
}

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "NotFoundError"
  }
}

export function handleError(error: unknown): string {
  if (error instanceof ValidationError) {
    return error.message
  }
  if (error instanceof AuthenticationError) {
    return "Authentication failed. Please login again."
  }
  if (error instanceof DatabaseError) {
    return "Database operation failed. Please try again."
  }
  if (error instanceof NotFoundError) {
    return error.message
  }
  if (error instanceof Error) {
    return error.message
  }
  return "An unknown error occurred"
}

export function validateRequired(value: any, fieldName: string): void {
  if (!value || (typeof value === "string" && value.trim() === "")) {
    throw new ValidationError(`${fieldName} is required`)
  }
}

export function validateEmail(email: string): void {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new ValidationError("Invalid email format")
  }
}

export function validatePhone(phone: string): void {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
  if (!phoneRegex.test(phone)) {
    throw new ValidationError("Invalid phone number format")
  }
}

export function validateDateRange(startDate: string, endDate: string): void {
  const start = new Date(startDate)
  const end = new Date(endDate)
  if (start > end) {
    throw new ValidationError("Start date must be before end date")
  }
}

export function validateRange(value: number, min: number, max: number, fieldName: string): void {
  if (value < min || value > max) {
    throw new ValidationError(`${fieldName} must be between ${min} and ${max}`)
  }
}

export function validateLength(value: string, min: number, max: number, fieldName: string): void {
  if (value.length < min || value.length > max) {
    throw new ValidationError(`${fieldName} must be between ${min} and ${max} characters`)
  }
}

export function logError(error: Error, context?: Record<string, any>): void {
  console.error("Error:", {
    name: error.name,
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
  })
}

export async function handleAsyncError<T>(
  promise: Promise<T>,
  errorMessage?: string,
): Promise<[T | null, Error | null]> {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    const err = error instanceof Error ? error : new Error(errorMessage || "Unknown error")
    logError(err)
    return [null, err]
  }
}

export function reportError(error: Error, severity: "low" | "medium" | "high" = "medium"): void {
  logError(error, { severity })
  // In production, this would send to an error tracking service
}
