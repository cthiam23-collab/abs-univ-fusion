# =============================================================================
# ABS University Management System — Production Dockerfile
# =============================================================================
# Multi-stage build:
#   1. builder — install deps + build Next.js (standalone output)
#   2. runner  — minimal Node image serving the standalone build
#
# Build:  docker build -t abs-university -f Dockerfile .
# Run:    docker run -p 3000:3000 --env-file .env.production abs-university
# =============================================================================

# ── Stage 1: Builder ────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

# Install pnpm (required by this project)
RUN corepack enable && corepack prepare pnpm@12.3.4 --activate

WORKDIR /app

# Copy dependency manifests and config first (Docker layer caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
# always-allow-scripts=true in .npmrc handles ignored build scripts (sharp, unrs-resolver)
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .

# Disable TypeScript errors during build (matching next.config.js)
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ── Stage 2: Runner ────────────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy standalone output + static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Next.js built-in server runs on port 3000
EXPOSE 3000

# Install wget and curl for healthcheck
RUN apk add --no-cache wget curl

# Health check (HTTP /health via 127.0.0.1)
# Using 127.0.0.1 instead of localhost to avoid Alpine DNS resolution issues
# curl -f returns 0 on HTTP 2xx/3xx, 22 on HTTP error codes
# start-period=30s gives Next.js time to initialize; interval=10s for faster detection
HEALTHCHECK --interval=10s --timeout=5s --start-period=30s --retries=3 \
  CMD curl -f http://127.0.0.1:3000/health || exit 1

USER nextjs

# Bind Next.js to 127.0.0.1 so healthcheck curl can reach it
ENV SERVER_HOSTNAME=127.0.0.1

CMD ["node", "server.js"]
