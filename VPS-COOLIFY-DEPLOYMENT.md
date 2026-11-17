# VPS + Coolify Deployment Guide — ABS University

This guide covers deploying the complete ABS University stack on a VPS using Coolify.

---

## 1. Server Requirements

| Resource | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 2 cores | 4+ cores |
| RAM | 4 GB | 8+ GB |
| Disk | 40 GB SSD | 80+ GB NVMe |
| OS | Ubuntu 22.04 LTS | Ubuntu 24.04 LTS |
| Network | 100 Mbps | 1 Gbps |

---

## 2. Coolify Installation

### 2.1 Install Docker & Coolify

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Install Docker
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER

# Install Coolify
docker run -d \
  --name coolify \
  --restart=unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -p 2375:2375 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v coolify:/var/www/html/storage \
  --network=host \
  ghcr.io/coollabsio/coolify/main:latest
```

### 2.2 Access Coolify Dashboard

```
http://your-vps-ip
```

Default credentials:
- Email: admin@your-domain.com
- Password: auto-generated (check `docker logs coolify`)

---

## 3. PostgreSQL Setup

### 3.1 Via Coolify Dashboard

1. Go to **Databases → New Database**
2. Choose **PostgreSQL**
3. Set:
   - Name: `abs-university-db`
   - Version: `17`
   - Root Password: `CHANGE_ME_STRONG_PASSWORD`
   - Initial Database: `absuniv`
4. Click **Deploy**

### 3.2 Copy Connection String

After deployment, copy the `DATABASE_URL` from the Coolify dashboard environment variables.

---

## 4. Next.js App Deployment

### 4.1 Add Repository

1. Go to **Applications → New Application**
2. Choose **Git** deployment
3. Connect your GitHub repository: `H:/abs-universite-2-1026`
4. Select repository: `abs-university`

### 4.2 Configure Build

Set the following in Coolify:

| Setting | Value |
|---------|-------|
| Build Pack | `Node.js` |
| Install Command | `pnpm install` |
| Build Command | `pnpm build` |
| Start Command | `pnpm start` |
| Port | `3000` |
| Health Check Path | `/health` |

### 4.3 Set Environment Variables

Copy values from `H:/abs-universite-2-1026/.env.production.template` and set in Coolify:

```env
abs_DATABASE_URL=postgresql://postgres:YOUR_DB_PASSWORD@db.abs-university-db.internal:5432/absuniv
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_KEY=YOUR-SERVICE-ROLE-KEY
NEXT_GOOGLE_CLIENT_ID=1076538006643-80duqh6v20flm9pjk5ptgtqtaovs903e.apps.googleusercontent.com
NEXT_GOOGLE_CLIENT_SECRET=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
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
NEXTAUTH_URL=https://abs-univ.com
ADMIN_API_KEY=YOUR_ADMIN_API_KEY
```

### 4.4 Set Domain

1. Go to **Settings → Domains**
2. Add domain: `abs-univ.com` (and `www.abs-univ.com`)
3. Coolify will automatically provision SSL certificates via Let's Encrypt

---

## 5. Platform Backend Deployment

### 5.1 Add Repository

1. Go to **Applications → New Application**
2. Choose **Git** deployment
3. Connect your GitHub repository: `H:/WWW.ABS-UNIV.com`
4. Select repository: `abs-platform`

### 5.2 Configure Build

| Setting | Value |
|---------|-------|
| Build Pack | `Python` |
| Install Command | `pip install -r requirements.txt` |
| Start Command | `uvicorn src.deployment.api.main:app --host 0.0.0.0 --port 8000` |
| Port | `8000` |
| Health Check Path | `/health` |

### 5.3 Set Environment Variables

Copy values from `H:/WWW.ABS-UNIV.com/.env.production.template`:

```env
DATABASE_URL=postgresql://postgres:YOUR_DB_PASSWORD@db.abs-university-db.internal:5432/absuniv
SUPABASE_URL=https://YOUR-PROJECT.supabase.co
SUPABASE_ANON_KEY=YOUR-ANON-KEY
SUPABASE_JWT_SECRET=YOUR-JWT-SECRET
CORS_ORIGINS=https://abs-univ.com,https://www.abs-univ.com
TRUSTED_HOSTS=abs-univ.com,www.abs-univ.com,localhost,127.0.0.1
GOOGLE_CLIENT_ID=1076538006643-80duqh6v20flm9pjk5ptgtqtaovs903e.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
```

### 5.4 Set Domain

Add subdomain: `platform.abs-univ.com`

---

## 6. Database Initialization

### 6.1 Run Migrations

Connect to the PostgreSQL database via Coolify:

```bash
# Get psql access
docker exec -it <postgres-container-name> psql -U postgres -d absuniv

# Run migration scripts
# Copy from H:/abs-universite-2-1026/scripts/01-init-database.sql
# Copy from H:/abs-universite-2-1026/scripts/06-sessions-and-admin.sql
```

### 6.2 Create Admin User

```sql
-- Create admin user
INSERT INTO users (email, password_hash, full_name, role)
VALUES (
  'admin@abs-univ.com',
  '$2b$10$ndZLwKKdj5tRThZ0oTuu.CpJyC6bhzslbPdtpY4WYelnPQJLvNqO',
  'Administrateur ABS',
  'admin'::user_role
) ON CONFLICT (email) DO NOTHING;
```

---

## 7. Post-Deployment Verification

### 7.1 Health Checks

```bash
# Next.js app
curl https://abs-univ.com/health
curl https://abs-univ.com/health/ready

# Platform backend
curl https://platform.abs-univ.com/platform/health
```

### 7.2 Google Auth Test

1. Visit `https://abs-univ.com/login`
2. Click "Continue with Google"
3. Verify redirect to Google OAuth consent screen
4. Verify redirect back to `/api/auth/callback/google`

### 7.3 Deployment Worker Test

```bash
# Create a test project
curl -X POST https://platform.abs-univ.com/platform/api/projects \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "test-project", "description": "Test deployment"}'

# Deploy the project
curl -X POST https://platform.abs-univ.com/platform/api/deployments \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"project_id": 1, "environment": "production"}'

# Check deployment status
curl https://platform.abs-univ.com/platform/api/deployments/1 \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## 8. Monitoring & Maintenance

### 8.1 Backups

Coolify automatically backs up PostgreSQL daily. To configure:

1. Go to **Databases → abs-university-db**
2. Click **Settings**
3. Set backup retention to `14 days`
4. Enable automatic backups

### 8.2 Manual Backup

```bash
# Run backup script (see scripts/backup-postgres.sh)
./scripts/backup-postgres.sh
```

### 8.3 Log Rotation

Configure log rotation for application logs:

```bash
# Create logrotate config
sudo nano /etc/logrotate.d/abs-university
```

Add:

```
/var/log/abs-university/*.log {
    daily
    rotate 14
    compress
    delaycompress
    missingok
    notifempty
    create 0640 root root
}
```

---

## 9. Troubleshooting

| Issue | Solution |
|-------|----------|
| Health check fails | Check container logs: `docker logs <container-name>` |
| Google auth redirect mismatch | Verify redirect URLs in Google Cloud + Supabase + Coolify |
| Database connection timeout | Verify DATABASE_URL in environment variables |
| SSL certificate not issued | Check domain DNS A record points to VPS IP |
| 502 Bad Gateway | Verify application is running: `docker ps` |
| Rate limit exceeded | Check Redis is running: `docker ps | grep redis` |
| Google auth fails on mobile | Verify Supabase dashboard has redirect URI `absu:///auth/callback` and `absu://auth/callback` |

---

## 10. Google OAuth — Shared Configuration (All Apps)

The same Google OAuth credentials are used across **all three ABS apps** via Supabase GoTrue:

| App | Stack | Google OAuth Provider |
|-----|-------|----------------------|
| Next.js website | `abs-universite-2-1026` | Supabase Auth (hosted or VPS) |
| Platform dashboard | `WWW.ABS-UNIV.com` | Supabase Auth (hosted or VPS) |
| Mobile app (ABS Mobil App) | Expo/React Native | Supabase Auth (hosted or VPS) |
| Hermes agent | Internal chat service | Separate email/password (NOT Google OAuth) |

### 10.1 Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Select the project with client ID `1076538006643-80duqh6v20flm9pjk5ptgtqtaovs903e`
3. Under **OAuth 2.0 Client IDs**, configure:

| Field | Value |
|-------|-------|
| Authorized JavaScript origins | `https://abs-univ.com, https://www.abs-univ.com` |
| Authorized redirect URIs (Web) | `https://abs-univ.com/auth/v1/callback` (Supabase hosted) |
| Authorized Android apps | Package name + SHA-1 fingerprint |
| Authorized iOS apps | Bundle ID |

### 10.2 Supabase Dashboard Configuration

In your Supabase project dashboard:

1. Go to **Authentication → Providers → Google**
2. Enable Google
3. Set:
   - **Client ID**: `1076538006643-80duqh6v20flm9pjk5ptgtqtaovs903e.apps.googleusercontent.com`
   - **Client Secret**: `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`
4. Set **Redirect URI** to match your Supabase URL:
   - **Hosted Supabase**: `https://your-project.supabase.co/auth/v1/callback`
   - **Self-hosted on VPS**: `https://supabase.abs-univ.com/auth/v1/callback`
5. Under **Auth → URL Configuration**, add these to **Site URL**:
   - `https://abs-univ.com`
   - `https://www.abs-univ.com`
   - `absu:///auth/callback` (mobile deep link)
   - `absu://auth/callback` (mobile deep link)

### 10.3 Mobile App Deep Link Configuration

For the mobile app to receive OAuth callbacks, add to `android/app/src/main/AndroidManifest.xml`:

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="absu" android:path="/auth/callback" />
</intent-filter>
```

And ensure `ADDITIONAL_REDIRECT_URLS` in `.env.production` includes:
```env
ADDITIONAL_REDIRECT_URLS=absu:///auth/callback,absu://auth/callback,absu:///reset-password
```

### 10.4 Environment Variables Summary

| Variable | Next.js App | Platform Backend | Mobile App (env) | Supabase Local |
|----------|-------------|------------------|-------------------|----------------|
| `NEXT_GOOGLE_CLIENT_ID` | ✓ | — | — | — |
| `NEXT_GOOGLE_CLIENT_SECRET` | ✓ | — | — | — |
| `GOOGLE_CLIENT_ID` | — | ✓ | — | ✓ (via supabase/.env) |
| `GOOGLE_CLIENT_SECRET` | — | ✓ | — | ✓ (via supabase/.env) |
| `GOOGLE_OAUTH_ENABLED` | — | — | — | ✓ (true) |
| `GOOGLE_OAUTH_CLIENT_ID` | — | — | — | ✓ |
| `GOOGLE_OAUTH_CLIENT_SECRET` | — | — | — | ✓ |

> **Note**: The mobile app does NOT store Google credentials directly. It relies on Supabase Auth (GoTrue) to handle the OAuth flow. The credentials live in the Supabase `.env` (local) or dashboard (VPS).

### 10.5 Testing Google OAuth on VPS

1. **Website**: Visit `https://abs-univ.com/login` → Click "Continue with Google"
2. **Platform**: Visit `https://platform.abs-univ.com/login` → Click Google sign-in
3. **Mobile**: Open app → Login screen → Click "Continuer avec Google"

If redirect fails:
- Verify the redirect URI in Supabase dashboard matches your domain
- Check Google Cloud Console authorized redirect URIs
- For mobile: ensure deep link scheme `absu://` is configured in the Android manifest

---

## 11. eCampus (ILIAS) — SSO Architecture

ILIAS 11 runs on `ecampus.abs-univ.com` as the university's Learning Management System,
with the Financial Management plugin handling tuition, budgets, and accounting.

### 11.1 Authentication Flow

```
User → ILIAS eCampus (SAML SP) → Supabase IdP → Google OAuth / Email-Password
                              ↘ ILIAS native login (fallback)
```

ILIAS acts as a SAML Service Provider that trusts Supabase as the Identity Provider.
When a user logs in via Google on any ABS app, they automatically have access to
eCampus without re-authenticating (same session, same Google identity).

### 11.2 ILIAS Service Configuration (docker-compose.yml)

The `ilias` service is included in the VPS stack:

| Setting | Value |
|---------|-------|
| Image | `xfim-ilias:11.4-suite` (baked with Financial Management plugin) |
| Port | Internal 80, proxied via Nginx port 81 |
| Domain | `ecampus.abs-univ.com` |
| Database | Shared PostgreSQL (separate DB `ilias`) |
| Health Check | `curl -f http://localhost/ilias/login.php` |
| SSO IdP | Supabase OIDC/SAML endpoint |

### 11.3 Environment Variables for ILIAS

Set these in Coolify or `.env`:

| Variable | Description | Example |
|----------|-------------|---------|
| `ILIAS_ROOT_PASSWORD` | ILIAS root user password | `AbsUniv#Root2026` |
| `ILIAS_DB_PASSWORD` | Database password | auto-generated |
| `ILIAS_DB_NAME` | ILIAS database name | `ilias` |
| `ILIAS_SUPABASE_URL` | Supabase project URL | `https://your-project.supabase.co` |
| `ILIAS_SUPABASE_ANON_KEY` | Supabase anon key | `your-anon-key` |
| `ILIAS_SAML_IDP_ENTITY_ID` | Supabase IdP entity ID | `https://your-project.supabase.co` |
| `ILIAS_SAML_IDP_SSO_URL` | Supabase OIDC authorize URL | `https://your-project.supabase.co/identity/v1/oidc/authorize` |
| `ILIAS_SAML_IDP_CERT` | Supabase IdP certificate | (fetched from JWKS) |
| `ILIAS_SAML_IDP_LOGOUT_URL` | Supabase logout URL | `https://your-project.supabase.co/identity/v1/oidc/logout` |
| `ILIAS_SAML_SP_PRIVATE_KEY` | SP private key for SAML | (generated at startup) |
| `ILIAS_SAML_SP_CERTIFICATE` | SP certificate | (generated at startup) |
| `ILIAS_SAML_DEFAULT_ROLE` | Default ILIAS role | `member` |
| `ILIAS_SAML_CREATE_USER` | Auto-create ILIAS users | `1` |
| `ILIAS_REST_BRIDGE_API_KEY` | REST bridge API key | `CHANGE_ME_REST_BRIDGE_KEY` |

### 11.4 REST Bridge with JWT Auth

The REST bridge at `/university-scaffold/ilias-rest-bridge-jwt.php` accepts:
- **Bearer token**: Supabase JWT (same token used by mobile app / website)
- **API key**: `X-Api-Key` header (for server-to-server calls)

Available endpoints (same as development bridge):
`/university-scaffold/ilias-rest-bridge-jwt.php?entity=dashboard&X-Api-Key=KEY`
`/university-scaffold/ilias-rest-bridge-jwt.php?entity=students&Authorization=Bearer TOKEN`

### 11.5 Nginx Routing

The Nginx reverse proxy routes to ILIAS on port 81:

```nginx
server {
    listen 81;
    server_name ecampus.abs-univ.com www.ecampus.abs-univ.com;
    location / {
        proxy_pass http://ilias_upstream;
        ...
    }
}
```

DNS: `ecampus.abs-univ.com` → VPS IP (A record)
SSL: Coolify provisions Let's Encrypt certificate automatically.
