#!/usr/bin/env bash
# Verify anonymously that @kolektiv/themes resolves from the advertised npm
# registry — the `npm-public` group aggregating all public Kolektiv repos.
set -uo pipefail

REGISTRY="https://repo.yuri.capital/repository/npm-public/"
PACKAGES=(@kolektiv/themes)

VERSION="${1:-}"
if [ -z "${VERSION}" ]; then
  VERSION="$(node -p "require('./packages/themes/package.json').version" 2>/dev/null)"
fi
if [ -z "${VERSION}" ]; then
  echo "::error::usage: $0 <version> (or run from the repository root with node available)"
  exit 2
fi

echo "verifying @kolektiv/themes:${VERSION} from ${REGISTRY}"

failed=0
for package in "${PACKAGES[@]}"; do
  if npm view "${package}@${VERSION}" version --registry "${REGISTRY}" \
    --fetch-retries=3 >/dev/null 2>&1; then
    echo "ok   ${package}@${VERSION}"
  else
    echo "::error::missing: ${package}@${VERSION}"
    failed=1
  fi
done

if [ "${failed}" -ne 0 ]; then
  echo "::error::@kolektiv/themes:${VERSION} does not resolve from ${REGISTRY}"
  exit 1
fi

echo "all packages resolve from advertised registry ${REGISTRY}"
