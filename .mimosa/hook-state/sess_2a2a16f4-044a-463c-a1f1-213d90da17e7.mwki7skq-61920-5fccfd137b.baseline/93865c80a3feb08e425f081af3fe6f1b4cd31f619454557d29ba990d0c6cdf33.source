import { createClient } from "@supabase/supabase-js"
import { Database } from "@/types/supabase"

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("Error: Missing Supabase URL or Key. Please set them as environment variables.")
  process.exit(1)
}

const supabase = createClient < Database > (supabaseUrl, supabaseKey)

async function createTables() {
  try {
    const { data, error } = await supabase.rpc("create_abs_university_tables")
    if (error) {
      console.error("Error creating tables:", error)
    } else {
      console.log("Tables created successfully:", data)
    }
  } catch (error) {
    console.error("Error creating tables:", error)
  }
}

createTables()

console.log("Supabase setup complete.")
