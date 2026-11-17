# Google OAuth 2.0 Setup Guide — ABS University

This guide walks you through enabling Google Sign-In for both the **Next.js app** (main website + admin portal) and the **FastAPI platform backend**. Both use Supabase Auth as the identity provider, so Google OAuth flows through Supabase.

---

## Prerequisites

- A [Google Cloud Console](https://console.cloud.google.com/) project
- Domain: `abs-univ.com` (and `www.abs-univ.com`)
- Supabase project already configured with Google provider enabled

---

## Step 1: Google Cloud Console Setup

### 1.1 Create/Select a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown → **New Project**
3. Name it `ABS University` and click **Create**
4. Select the new project from the dropdown

### 1.2 Enable Google Identity Services API

1. Navigate to **APIs & Services → Library**
2. Search for "Google Identity Services" or "Google+ API"
3. Click **Enable**

### 1.3 Configure OAuth 2.0 Consent Screen

1. Go to **APIs & Services → OAuth consent screen**
2. Choose **External** (or **Internal** if all users are in your organization)
3. Fill in:
   - **App name**: `ABS University`
   - **User support email**: `abs.mail1290@gmail.com`
   - **Developer contact email**: `abs.mail1290@gmail.com`
   - **Scopes**: Click "Add or Remove Scopes" → select `email` and `profile` → Update
4. Click **Save and Continue** through the remaining steps
5. Add test users under **Users** tab (your email + admin emails)
6. Click **Back to Dashboard**

### 1.4 Create OAuth 2.0 Credentials

1. Go to **APIs & Services → Credentials**
2. Click **+ CREATE CREDENTIALS → OAuth client ID**
3. Application type: **Web application**
4. Name: `ABS University Web`
5. Authorized JavaScript origins:
   ```
   https://abs-univ.com
   https://www.abs-univ.com
   http://localhost:3000
   http://localhost:4174
   ```
6. Authorized redirect URIs:
   ```
   https://abs-univ.com/api/auth/callback/google
   https://www.abs-univ.com/api/auth/callback/google
   http://localhost:3000/api/auth/callback/google
   ```
7. Click **Create**
8. **Copy the Client ID and Client Secret** — you'll need these for Supabase

---

## Step 2: Supabase Google Provider Configuration

### 2.1 Add Google to Supabase Auth

1. Go to your Supabase Dashboard → **Authentication → Providers**
2. Find **Google** and toggle it **ON**
3. Paste:
   - **Client ID**: (from Step 1.4)
   - **Client Secret**: (from Step 1.4)
4. Toggle **"Enable email provider"** if you want email/password login too
5. Click **Save**

### 2.2 Configure Google Auth Redirect URLs in Supabase

1. Go to **Authentication → URL Configuration**
2. Under **Site URL**, set:
   ```
   https://abs-univ.com
   ```
3. Under **Redirect URLs**, add:
   ```
   https://abs-univ.com/api/auth/callback/google
   https://abs-univ.com/api/auth/callback/supabase
   ```
4. Under **Allowed refresh token rotation**, ensure it's enabled

---

## Step 3: Next.js App Configuration

### 3.1 Update `.env.production`

Add these variables to `H:/abs-universite-2-1026/.env.production`:

```env
# ── Google OAuth (NextAuth) ────────────────────────────────────────────
NEXT_GOOGLE_CLIENT_ID=your-google-client-id-here
NEXT_GOOGLE_CLIENT_SECRET=your-google-client-secret-here

# ── Existing Supabase vars (keep as-is) ──────────────────────────────
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_KEY=YOUR-SERVICE-ROLE-KEY

# ── Existing Auth vars (keep as-is) ──────────────────────────────────
NEXTAUTH_SECRET=YOUR-NEXTAUTH-SECRET
NEXTAUTH_URL=https://abs-univ.com
ADMIN_API_KEY=YOUR-ADMIN-API-KEY
```

### 3.2 Update NextAuth Configuration

Edit `H:/abs-universite-2-1026/lib/auth.ts` to include Google provider:

```typescript
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    // ── Google OAuth ──────────────────────────────────────────────────
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET ?? "",
      // Map Google profile to our user model
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          role: "user", // Default role; admin set in Supabase
        }
      },
    }),

    // ── Credentials (existing) ────────────────────────────────────────
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.username === "admin" && credentials?.password === "password") {
          return { id: "1", name: "Admin User", email: "admin@example.com", role: "admin" }
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
```

### 3.3 Add Google Sign-In Button to Login Page

Add to your login page component:

```tsx
import { signIn } from "next-auth/react"

export function GoogleSignInButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/admin/dashboard" })}
      className="w-full flex items-center justify-center gap-2 px-4 py-2 border rounded-lg"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        {/* Google logo SVG */}
      </svg>
      Continue with Google
    </button>
  )
}
```

---

## Step 4: Platform Backend (FastAPI) Configuration

### 4.1 Update `.env.production.template`

Add Google-specific variables:

```env
# ── Google OAuth (platform dashboard) ────────────────────────────────
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
GOOGLE_REDIRECT_URI=https://abs-univ.com/platform/api/auth/google/callback
```

### 4.2 Update Supabase Admin Panel

In Supabase Dashboard → **Authentication → Users**:
1. Select the admin user(s)
2. Set `app_metadata.role = "admin"` in the JSON editor
3. This grants access to `POST /api/templates` and other admin endpoints

---

## Step 5: Mobile App Integration

Your mobile app should use **Supabase Auth with Google provider**:

```dart
// Flutter / Dart example
import 'package:supabase_flutter/supabase_flutter.dart';

final user = await Supabase.instance.client.auth.signInWithOAuth(
  OAuthProviders.google,
  redirectTo: 'your-app://callback',
);
```

The mobile app redirects to Google, Google returns to Supabase, Supabase creates the session, and your backend validates the JWT with `SUPABASE_JWT_SECRET`.

---

## Step 6: Verification Checklist

After setup, verify:

- [ ] Google OAuth consent screen shows correct app name
- [ ] Client ID and Client Secret are in `.env.production`
- [ ] Supabase Google provider is enabled with correct credentials
- [ ] Redirect URLs match exactly in Google Cloud + Supabase + Next.js
- [ ] `https://abs-univ.com/api/auth/callback/google` returns a valid session
- [ ] Login page shows Google button
- [ ] Admin user has `app_metadata.role = "admin"` in Supabase
- [ ] Mobile app can sign in with Google via Supabase

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "redirect_uri_mismatch" | Ensure redirect URI exactly matches Google Cloud + Supabase settings |
| "invalid_client" | Check Client ID and Client Secret in `.env.production` |
| "provider not enabled" | Enable Google in Supabase Dashboard → Authentication → Providers |
| "admin not authorized" | Set `app_metadata.role = "admin"` for the user in Supabase Dashboard |
| CORS error on `/api/auth/callback/google` | Verify `CORS_ORIGINS` includes `https://abs-univ.com` |
