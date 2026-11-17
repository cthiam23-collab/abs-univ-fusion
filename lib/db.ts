import postgres from "postgres"

if (!process.env.abs_DATABASE_URL) {
  throw new Error("abs_DATABASE_URL environment variable is not set")
}

const connectionString = process.env.abs_DATABASE_URL

// Local Supabase Postgres speaks plain TCP; hosted Neon requires TLS.
const needsSsl = !/localhost|127\.0\.0\.1/.test(connectionString)

const client = postgres(connectionString, {
  ssl: needsSsl,
  max: 10,
  idle_timeout: 20,
  connect_timeout: 10,
})

// Supports both call styles used across the API routes:
// - tagged template: sql`SELECT * FROM users WHERE email = ${email}` (values parameter-bound)
// - function call:   sql("SELECT * FROM users WHERE email = $1", [email]) ($N parameters bound)
export const sql: any = (stringsOrQuery: any, ...values: any[]) => {
  if (typeof stringsOrQuery === "string") {
    const params = values.length === 1 && Array.isArray(values[0]) ? values[0] : values
    return client.unsafe(stringsOrQuery, params)
  }
  return client(stringsOrQuery, ...values)
}
