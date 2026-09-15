#!/usr/bin/env bash
# Publish @kolektiv/themes to JSR when OIDC or JSR_TOKEN is configured.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "${ROOT}/packages/themes"

if [ ! -f jsr.json ]; then
  echo "::error::packages/themes/jsr.json missing"
  exit 1
fi

# Prefer OIDC (id-token: write + package linked on jsr.io). Fallback: JSR_TOKEN / JSR_AUTH_TOKEN.
if [ -n "${JSR_TOKEN:-}" ]; then
  export JSR_AUTH_TOKEN="${JSR_TOKEN}"
fi

if [ -z "${JSR_AUTH_TOKEN:-}" ] && [ -z "${ACTIONS_ID_TOKEN_REQUEST_URL:-}" ]; then
  echo "::warning::No JSR_TOKEN/JSR_AUTH_TOKEN and no Actions OIDC; skipping JSR publish"
  exit 0
fi

echo "publishing to JSR (npx jsr publish)"
npx --yes jsr publish --allow-slow-types || {
  echo "::warning::jsr publish failed (package may need linking / version bump); not failing the whole release"
  exit 0
}
