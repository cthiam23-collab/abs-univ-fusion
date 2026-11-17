/*
 * Limiteur de débit en mémoire (par IP + route).
 * Suffisant en mono-instance ; pour un déploiement multi-instances,
 * remplacer par un store partagé (Redis/Upstash).
 */

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

const CLEANUP_INTERVAL_MS = 60_000
let lastCleanup = Date.now()

function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return
  lastCleanup = now
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key)
  }
}

export type RateLimitResult = {
  allowed: boolean
  remaining: number
  retryAfterSeconds: number
}

export function rateLimit(
  request: Request,
  options: { key: string; limit: number; windowMs: number },
): RateLimitResult {
  cleanup()
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  const bucketKey = `${options.key}:${ip}`
  const now = Date.now()

  let bucket = buckets.get(bucketKey)
  if (!bucket || bucket.resetAt <= now) {
    bucket = { count: 0, resetAt: now + options.windowMs }
    buckets.set(bucketKey, bucket)
  }

  bucket.count += 1
  if (bucket.count > options.limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    }
  }

  return { allowed: true, remaining: options.limit - bucket.count, retryAfterSeconds: 0 }
}

/** Réponse 429 standard avec en-tête Retry-After. */
export function tooManyRequests(result: RateLimitResult) {
  return new Response(
    JSON.stringify({ success: false, error: "Trop de requêtes. Réessayez plus tard." }),
    {
      status: 429,
      headers: { "Content-Type": "application/json", "Retry-After": String(result.retryAfterSeconds) },
    },
  )
}
