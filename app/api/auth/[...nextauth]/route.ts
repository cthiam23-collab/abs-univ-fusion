import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
)

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          })

          if (error || !data.user) {
            return null
          }

          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.user_metadata?.full_name,
          }
        } catch (error) {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
})

// The secret is a runtime value. Reading it at module scope made `next build`
// require it, so Coolify had to hand it to the image as a build argument, which
// writes it into the image history. The guard still fails fast - just on the
// first request instead of while the image is built.
const requireSecret = (fn: typeof handler): typeof handler =>
  (async (...args: Parameters<typeof handler>) => {
    if (!process.env.NEXTAUTH_SECRET) {
      throw new Error("NEXTAUTH_SECRET is not set")
    }
    return fn(...args)
  }) as typeof handler

export const GET = requireSecret(handler)
export const POST = requireSecret(handler)
