#!/usr/bin/env bash
# =============================================================================
# PostgreSQL Backup Script
# =============================================================================
# Scheduled via systemd timer or cron on the VPS.
#
# Usage (manual):
#   ./scripts/backup-postgres.sh
#
# Usage (systemd timer — see backup.timer / backup.service):
#   sudo systemctl enable --now backup.timer
#
# Environment variables (override defaults):
#   BACKUP_DIR        — where backups are stored (default: /var/backups/abs-univ/postgres)
#   BACKUP_RETENTION  — number of days to keep backups (default: 14)
#   PG_HOST           — PostgreSQL host (default: from DATABASE_URL or localhost)
#   PG_PORT           — PostgreSQL port (default: 5432)
#   PG_USER           — PostgreSQL user (default: from DATABASE_URL or abs_univ)
#   PG_DB             — PostgreSQL database name (default: from DATABASE_URL or absuniv)
#   PG_PASSWORD       — PostgreSQL password (default: from DATABASE_URL or env var)
# =============================================================================
set -euo pipefail

# ── Configuration ─────────────────────────────────────────────────────────────
BACKUP_DIR="${BACKUP_DIR:-/var/backups/abs-univ/postgres}"
BACKUP_RETENTION="${BACKUP_RETENTION_DAYS:-14}"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
BACKUP_FILE="absuniv-backup-${TIMESTAMP}.sql.gz"

# Parse DATABASE_URL if available, otherwise use env vars
if [ -n "${abs_DATABASE_URL:-}" ] || [ -n "${DATABASE_URL:-}" ]; then
    DB_URL="${abs_DATABASE_URL:-$DATABASE_URL}"
    # Extract host, port, user, password, db from connection string
    PG_HOST=$(echo "$DB_URL" | sed -n 's|.*://[^:]*:\([^@]*\)@\([^:]*\):.*|\2|p')
    PG_PORT=$(echo "$DB_URL" | sed -n 's|.*:\([0-9]*\)/.*|\1|p')
    PG_USER=$(echo "$DB_URL" | sed -n 's|.*://[^:]*:\([^@]*\)@.*|\1|p')
    PG_DB=$(echo "$DB_URL" | sed -n 's|.*:///||; s|.*://[^@]*@[^/]*/\([^?]*\).*|\1|p')
    PG_PASSWORD=$(echo "$DB_URL" | sed -n 's|.*://[^:]*:\([^@]*\)@.*|\1|p')
else
    PG_HOST="${PG_HOST:-localhost}"
    PG_PORT="${PG_PORT:-5432}"
    PG_USER="${PG_USER:-abs_univ}"
    PG_DB="${PG_DB:-absuniv}"
    PG_PASSWORD="${PG_PASSWORD:-}"
fi

# ── Pre-flight checks ───────────────────────────────────────────────────────
if [ -z "$PG_PASSWORD" ]; then
    echo "ERROR: PostgreSQL password not configured." >&2
    echo "Set PG_PASSWORD or abs_DATABASE_URL/DATABASE_URL." >&2
    exit 1
fi

mkdir -p "$BACKUP_DIR"

# ── Perform backup ──────────────────────────────────────────────────────────
# Use a temp file for password to avoid exposing it in `ps aux`
PGPASSFILE=$(mktemp)
chmod 600 "$PGPASSFILE"
printf '%s:%s:%s:%s:%s\n' "$PG_HOST" "$PG_PORT" "$PG_DB" "$PG_USER" "$PG_PASSWORD" > "$PGPASSFILE"

echo "Starting PostgreSQL backup..."
echo "  Host:     $PG_HOST:$PG_PORT"
echo "  Database: $PG_DB"
echo "  User:     $PG_USER"
echo "  Output:   $BACKUP_DIR/$BACKUP_FILE"

if pg_dump -h "$PG_HOST" -p "$PG_PORT" -U "$PG_USER" -d "$PG_DB" --format=custom --file="$BACKUP_DIR/$BACKUP_FILE" --no-password 2>/dev/null; then
    echo "Backup completed successfully."
else
    # Fallback: SQL format
    echo "Custom format backup failed, trying SQL format..."
    pg_dump -h "$PG_HOST" -p "$PG_PORT" -U "$PG_USER" -d "$PG_DB" | gzip > "$BACKUP_DIR/$BACKUP_FILE"
    echo "Backup completed (SQL format)."
fi

# ── Cleanup temp PGPASSFILE ─────────────────────────────────────────────────
rm -f "$PGPASSFILE" 2>/dev/null || true

# ── Cleanup old backups ─────────────────────────────────────────────────────
echo "Removing backups older than ${BACKUP_RETENTION} days..."
find "$BACKUP_DIR" -name "absuniv-backup-*.sql.gz" -mtime +"$BACKUP_RETENTION" -delete 2>/dev/null || true
find "$BACKUP_DIR" -name "absuniv-backup-*.dump" -mtime +"$BACKUP_RETENTION" -delete 2>/dev/null || true

# ── List current backups ────────────────────────────────────────────────────
echo ""
echo "Current backups:"
ls -lh "$BACKUP_DIR"/absuniv-backup-* 2>/dev/null || echo "  (none found)"
echo ""
echo "Done."
