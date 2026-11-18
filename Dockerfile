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

# Allow pnpm to run ignored build scripts (sharp, etc.)
ENV PNPM_IGNORED_BUILDS=

WORKDIR /app

# Copy only dependency manifests first (Docker layer caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
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

# Health check (HTTP /health)
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

USER nextjs

CMD ["node", "server.js"]
