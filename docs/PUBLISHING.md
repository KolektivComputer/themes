# Publishing (themes)

## Targets

| Ecosystem | Yuri Capital | GitHub Packages | JSR |
| --- | --- | --- | --- |
| Maven (`dev.kolektiv.themes:themes`) | `maven-releases` / `maven-snapshots` | `maven.pkg.github.com/KolektivComputer/themes` | — |
| TypeScript / npm (`` `@kolektiv/themes` ``) | `brand-npm` | `npm.pkg.github.com` | `` `@kolektiv/themes` `` via OIDC |

GroupId note: Compose module uses `dev.kolektiv.themes` to match current PR coordinates; org epic prefers `computer.kolektiv.*` — migrate in a follow-up.

## Workflows

- `publish.yml` on `v*` tags / `workflow_dispatch`: Maven + dual npm + JSR OIDC
- `release.yml`: GitHub Release notes only (same tag)

## Secrets

| Name | Purpose |
| --- | --- |
| `YURI_CAPITAL_REPO_USERNAME` / `YURI_CAPITAL_REPO_PASSWORD` | Maven + npm → Yuri Capital |
| `GITHUB_TOKEN` | automatic; needs `packages: write` + `id-token: write` |

## JSR (org setup)

**OIDC only in CI** — do not set `JSR_TOKEN` at org level for Actions.

1. Claim scope `` `@kolektiv` `` on jsr.io (Mey owns it).
2. Create/open package `` `@kolektiv/themes` `` and enable **GitHub Actions trusted publishing** for `KolektivComputer/themes`.
3. Workflow already sets `permissions.id-token: write`.

PAT/`JSR_TOKEN` is only for local CLI publishes, not org Actions.

## TypeScript package

```bash
pnpm install --frozen-lockfile
pnpm typecheck && pnpm test && pnpm build:packages
```

Publish scripts: `.github/scripts/publish-npm.sh`, `publish-jsr.sh`.
