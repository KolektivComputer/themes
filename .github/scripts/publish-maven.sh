#!/usr/bin/env bash
# Publish themes Maven artifacts to GitHub Packages (when token present) and Yuri Capital.
set -uo pipefail

VERSION="$(grep -E '^[[:space:]]*version[[:space:]]*=' build.gradle.kts | head -n1 | sed -E 's/.*version[[:space:]]*=[[:space:]]*"([^"]+)".*/\1/' | tr -d '[:space:]')"
if [ -z "${VERSION}" ]; then
  # allprojects version in root build.gradle.kts
  VERSION="$(rg -oN 'version = "([^"]+)"' build.gradle.kts | head -1 | sed -E 's/version = "([^"]+)"/\1/')"
fi
if [ -z "${VERSION}" ]; then
  echo "::error::could not read version from build.gradle.kts"
  exit 1
fi

echo "publishing dev.kolektiv.themes:themes:${VERSION}"

GRADLE_ARGS=(:themes:publish --continue)
export GRADLE_ARGS

LOG="$(mktemp)"
trap 'rm -f "${LOG}"' EXIT

./gradlew "${GRADLE_ARGS[@]}" 2>&1 | tee "${LOG}"
status="${PIPESTATUS[0]}"

if [ "${status}" -eq 0 ]; then
  echo "Maven publish succeeded"
  exit 0
fi

# Tolerate 409 conflicts (already published)
if grep -qE "Received status code 409" "${LOG}"; then
  echo "::warning::Maven publish hit 409 conflict(s); treating as already published"
  exit 0
fi

echo "::error::Maven publish failed"
exit 1
