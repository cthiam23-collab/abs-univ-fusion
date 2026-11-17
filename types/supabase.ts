export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          password: string | null
          role: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          password?: string | null
          role?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          password?: string | null
          role?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      courses: {
        Row: {
          code: string | null
          credits: number | null
          department: string | null
          description: string | null
          id: string
          instructor: string | null
          name: string | null
        }
        Insert: {
          code?: string | null
          credits?: number | null
          department?: string | null
          description?: string | null
          id?: string
          instructor?: string | null
          name?: string | null
        }
        Update: {
          code?: string | null
          credits?: number | null
          department?: string | null
          description?: string | null
          id?: string
          instructor?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_instructor_fkey"
            columns: ["instructor"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_abs_university_tables: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
