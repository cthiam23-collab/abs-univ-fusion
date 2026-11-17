import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // This is where you would typically query your database
        // to find the user and verify the password
        if (credentials?.username === "admin" && credentials?.password === "password") {
          return { id: "1", name: "Admin User", email: "admin@example.com", role: "admin" }
        } else if (credentials?.username === "student" && credentials?.password === "password") {
          return { id: "2", name: "Student User", email: "student@example.com", role: "student" }
        } else if (credentials?.username === "teacher" && credentials?.password === "password") {
          return { id: "3", name: "Teacher User", email: "teacher@example.com", role: "teacher" }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
}
