# Publishing (themes)

## Targets

| Ecosystem | Yuri Capital | GitHub Packages | JSR |
| --- | --- | --- | --- |
| Maven (`dev.kolektiv.themes:themes`) | `maven-releases` / `maven-snapshots` | `maven.pkg.github.com/KolektivComputer/themes` | — |
| npm (`` `@kolektiv/themes` ``) | `brand-npm` | `npm.pkg.github.com` | `` `@kolektiv/themes` `` |

GroupId note: this module still uses `dev.kolektiv.themes` to match Compose PR coordinates; org epic prefers `computer.kolektiv.*` — migrate in a follow-up.

## Workflows

- `publish.yml` on `v*` tags / `workflow_dispatch`: Maven + npm dual + JSR (skips targets without credentials)
- `release.yml`: GitHub Release notes only (same tag)

## Secrets / vars (org or repo)

Already used:

- `YURI_CAPITAL_REPO_USERNAME`
- `YURI_CAPITAL_REPO_PASSWORD`
- `GITHUB_TOKEN` (automatic; needs `packages: write` + `id-token: write` on the job)

### JSR (org-level)

Prefer **OIDC trusted publishing** (no long-lived token):

1. On [jsr.io](https://jsr.io): claim scope `` `@kolektiv` `` (Mey owns it).
2. Create / open package `` `@kolektiv/themes` `` and link GitHub repo `KolektivComputer/themes` for **GitHub Actions OIDC**.
3. No org secret required for OIDC. Workflow already sets `permissions.id-token: write`.

Optional fallback token (only if not using OIDC):

| Name | Where | Notes |
| --- | --- | --- |
| `JSR_TOKEN` or `JSR_AUTH_TOKEN` | Org Actions secret (or repo) | Personal access token from jsr.io; either name is read by `publish-jsr.sh` |

No other JSR-specific org **variables** are required for publish. Linking the package to the repo is the main setup.

## Apply workflow (token may lack `workflows` scope)

Copy [workflow-publish.yml.example](./workflow-publish.yml.example) over `.github/workflows/publish.yml` (or paste in the GitHub UI) so tag publishes run Maven + dual npm + JSR. Until then, scripts can be run manually from Actions `workflow_dispatch` only after the workflow file exists on `main`.
