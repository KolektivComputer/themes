#!/usr/bin/env bash
# Publish @kolektiv/themes to JSR via GitHub Actions OIDC (trusted publishing).
# Link the package to this repo on jsr.io — no JSR_TOKEN required in CI.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "${ROOT}/packages/themes"

if [ ! -f jsr.json ]; then
  echo "::error::packages/themes/jsr.json missing"
  exit 1
fi

# Sync version from package.json
node -e 'const fs=require("fs");const p=JSON.parse(fs.readFileSync("package.json","utf8"));const j=JSON.parse(fs.readFileSync("jsr.json","utf8"));j.version=p.version;fs.writeFileSync("jsr.json",JSON.stringify(j,null,2)+"\n");'

if [ -z "${ACTIONS_ID_TOKEN_REQUEST_URL:-}" ]; then
  echo "::warning::Not running under Actions OIDC; skipping JSR publish (link package on jsr.io for trusted publishing)"
  exit 0
fi

echo "publishing to JSR via OIDC (npx jsr publish)"
npx --yes jsr publish --allow-slow-types
