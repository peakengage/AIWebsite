#!/usr/bin/env bash
set -euo pipefail

APP_DIR="$HOME/AIWebsite"
BRANCH="${1:-deploy}"
HEALTH_URL="http://localhost:3000/site"
HEALTH_RETRIES=10
HEALTH_DELAY=3

echo "==> Deploying PeakEngage (branch: $BRANCH)..."

cd "$APP_DIR"

# Pull latest code (skip if already done by CI)
if [ "${SKIP_GIT_PULL:-}" != "true" ]; then
  echo "==> Fetching latest from origin/$BRANCH..."
  git fetch origin "$BRANCH"
  git checkout "$BRANCH" 2>/dev/null || true
  git reset --hard "origin/$BRANCH"
fi

# Install dependencies
echo "==> Installing dependencies..."
npm install

# Build
echo "==> Building Next.js (standalone)..."
npm run build

# Copy static assets into standalone output
# (standalone build does not include public/ or .next/static/)
echo "==> Copying static assets into standalone..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Copy next-intl translation files
echo "==> Copying messages/ into standalone..."
cp -r messages .next/standalone/

# Restart or start PM2 process
echo "==> Restarting PM2 process..."
if pm2 describe peakengage > /dev/null 2>&1; then
  pm2 restart ecosystem.config.js
else
  pm2 start ecosystem.config.js
fi

pm2 save

# Health check
echo "==> Running health check..."
for i in $(seq 1 $HEALTH_RETRIES); do
  if curl -sf "$HEALTH_URL" > /dev/null 2>&1; then
    echo "==> Health check passed!"
    exit 0
  fi
  echo "    Attempt $i/$HEALTH_RETRIES — waiting ${HEALTH_DELAY}s..."
  sleep "$HEALTH_DELAY"
done

echo "==> Health check FAILED after $HEALTH_RETRIES attempts"
pm2 logs peakengage --lines 30 --nostream
exit 1
