#!/usr/bin/env bash
# Publish @kolektiv/themes to the hosted Nexus repo (brand-npm).
# The repo `.npmrc` maps `@kolektiv` to the `npm-public` group for fetching, so
# we temporarily append the hosted `brand-npm` mapping (with auth).
set -euo pipefail

: "${YURI_CAPITAL_REPO_USERNAME:?set YURI_CAPITAL_REPO_USERNAME}"
: "${YURI_CAPITAL_REPO_PASSWORD:?set YURI_CAPITAL_REPO_PASSWORD}"

HOST="repo.yuri.capital"
REGISTRY="https://${HOST}/repository/brand-npm/"
PACKAGES=(@kolektiv/themes)
VERSION="$(node -p "require('./packages/themes/package.json').version")"

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
NPMRC="${root}/.npmrc"
backup="$(mktemp)"
cp "${NPMRC}" "${backup}"
trap 'cp "${backup}" "${NPMRC}"; rm -f "${backup}"' EXIT

AUTH="$(printf '%s:%s' "${YURI_CAPITAL_REPO_USERNAME}" "${YURI_CAPITAL_REPO_PASSWORD}" | openssl base64 -A)"
path="${REGISTRY#https://}"
path="${path#http://}"

{
  printf '\n@kolektiv:registry=%s\n' "${REGISTRY}"
  printf '//%s:_auth=%s\n' "${path}" "${AUTH}"
  printf '//%s:always-auth=true\n' "${path}"
} >>"${NPMRC}"

already_published() {
  npm view "$1@${VERSION}" --registry "${REGISTRY}" >/dev/null 2>&1
}

echo "publishing @kolektiv/themes@${VERSION} to ${REGISTRY}"
for pkg in "${PACKAGES[@]}"; do
  if already_published "${pkg}"; then
    echo "already published ${pkg}@${VERSION}, skipping"
    continue
  fi
  pnpm --filter "${pkg}" publish --no-git-checks --access public --registry "${REGISTRY}"
done
