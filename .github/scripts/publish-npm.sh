#!/usr/bin/env bash
# Dual-publish @kolektiv/themes to Yuri Capital brand-npm and GitHub Packages (when token present).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
VERSION="$(node -p "require('${ROOT}/packages/themes/package.json').version")"
PACKAGES=(@kolektiv/themes)

publish_one_registry() {
  local name="$1"
  local registry="$2"
  local auth_line="$3"

  local NPMRC_PATH="${ROOT}/.npmrc"
  local backup
  backup="$(mktemp)"
  cp "${NPMRC_PATH}" "${backup}"
  restore() { cp "${backup}" "${NPMRC_PATH}"; rm -f "${backup}"; }
  trap restore EXIT

  local path="${registry#https://}"
  path="${path#http://}"
  path="${path%/}/"

  {
    printf '\n@kolektiv:registry=%s\n' "${registry}"
    printf '%s\n' "${auth_line}"
    printf '//%salways-auth=true\n' "${path}"
  } >>"${NPMRC_PATH}"

  already_published() {
    npm view "$1@${VERSION}" --registry "${registry}" >/dev/null 2>&1
  }

  echo "publishing @kolektiv/themes@${VERSION} to ${name} (${registry})"
  for pkg in "${PACKAGES[@]}"; do
    if already_published "${pkg}"; then
      echo "already published ${pkg}@${VERSION} on ${name}, skipping"
      continue
    fi
    pnpm --filter "${pkg}" publish --no-git-checks --access public --registry "${registry}"
  done

  restore
  trap - EXIT
}

# 1) Yuri Capital (required secrets)
: "${YURI_CAPITAL_REPO_USERNAME:?set YURI_CAPITAL_REPO_USERNAME}"
: "${YURI_CAPITAL_REPO_PASSWORD:?set YURI_CAPITAL_REPO_PASSWORD}"
YURI_REGISTRY="https://repo.yuri.capital/repository/brand-npm/"
YURI_AUTH="$(printf '%s:%s' "${YURI_CAPITAL_REPO_USERNAME}" "${YURI_CAPITAL_REPO_PASSWORD}" | openssl base64 -A)"
YURI_PATH="${YURI_REGISTRY#https://}"
publish_one_registry "yuri-capital" "${YURI_REGISTRY}" "//${YURI_PATH}:_auth=${YURI_AUTH}"

# 2) GitHub Packages (when GITHUB_TOKEN present)
if [ -n "${GITHUB_TOKEN:-}" ] || [ -n "${NODE_AUTH_TOKEN:-}" ]; then
  TOKEN="${NODE_AUTH_TOKEN:-${GITHUB_TOKEN}}"
  GH_REGISTRY="https://npm.pkg.github.com/"
  publish_one_registry "github-packages" "${GH_REGISTRY}" "//npm.pkg.github.com/:_authToken=${TOKEN}"
else
  echo "::warning::GITHUB_TOKEN/NODE_AUTH_TOKEN unset; skipping npm GitHub Packages publish"
fi
