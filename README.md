# Kolektiv themes

Colour-only design tokens for all public Kolektiv projects, rendered out to several
targets from one source:

| entry | output |
| --- | --- |
| `@kolektiv/themes` | `themes`, `getTheme`, `shikiThemeFor`, `themeCss`, `allThemeCss` |
| `@kolektiv/themes/theme.css` | daisyUI-compatible `[data-theme]` colour variables |
| `@kolektiv/themes/shiki` | Shiki theme registrations (Kolektiv light/dark) |
| `@kolektiv/themes/tokens.json` | raw tokens for Compose / other platforms |
| `dev.kolektiv.themes:themes` | Compose Multiplatform `DaisyColors` + `KolektivTheme` |

**Colour-only by design.** A theme declares `color-scheme` and the twenty daisyUI colour
variables; each app owns its radii, sizes, borders and density. Palettes: `nord`,
`catppuccin-latte/frappe/macchiato/mocha` (extracted from Keel), and
`kolektiv-light` / `kolektiv-dark` (CSS aliases `kolektivcomputer-lig` / `kolektivcomputer-dark`). Each also maps to a Shiki analog via `shikiThemeFor`
(`light`/`dark` → GitHub light/dark, `nord` → `nord`, catppuccin → catppuccin,
kolektiv → kolektiv).

## Using it

```bash
# .npmrc — fetch from the aggregated group repository
@kolektiv:registry=https://repo.yuri.capital/repository/npm-public/

pnpm add @kolektiv/themes
```

```ts
import { themes, shikiThemeFor } from '@kolektiv/themes';
import '@kolektiv/themes/theme.css';
import { kolektivDark } from '@kolektiv/themes/shiki';
```

```css
/* In a Tailwind v4 entry, before/after your own theme overrides */
@import '@kolektiv/themes/theme.css';
```

Set `<html data-theme="catppuccin-mocha">` (etc.) and every daisyUI component follows.


## Compose

Colour-only palettes as `dev.kolektiv.themes:themes` (version `0.0.1-SNAPSHOT.3`):

```kotlin
implementation("dev.kolektiv.themes:themes:0.0.1-SNAPSHOT.3")

KolektivTheme(KolektivThemes.kolektivDark) {
    val colors = KolektivTheme.colors
}
```

Until Maven is published to `repo.yuri.capital`, consume via `includeBuild`:

```kotlin
// settings.gradle.kts
includeBuild("../themes") {
    dependencySubstitution {
        substitute(module("dev.kolektiv.themes:themes"))
            .using(project(":themes"))
    }
}
```

Radii and density stay in the consuming app (Blawk's `BlawkMetrics`, Kalendee's
pack CSS, etc.). Regenerate `Palettes.kt` after a token change:

```bash
python3 compose/scripts/generate_palettes.py packages/themes/dist/tokens.json
```

`tokens.json` must include sRGB `hex` per colour key (the preview dump / SNAPSHOT.3
shape). The twenty oklch tokens in `packages/themes/src/tokens.mjs` remain the
source of truth for CSS and Shiki.

## Adding a palette

1. Add it to `packages/themes/src/tokens.mjs` (id, label, scheme, `shiki`, and the twenty
   colour keys).
2. `pnpm --filter @kolektiv/themes build`.
3. Regenerate Compose palettes (`python3 compose/scripts/generate_palettes.py`).
4. Bump the version, add a `CHANGELOG.md` entry, and push a `v*` tag.

## Development

```bash
pnpm install
pnpm typecheck
pnpm test
pnpm build
./gradlew :themes:jvmTest
```

## Releases

Tag-driven, mirroring Keel: `git tag vX.Y.Z && git push origin vX.Y.Z` runs the Release
workflow (GitHub Release from the changelog) and the Publish workflow (publishes to
`brand-npm`, then verifies resolution from `npm-public`).
Secrets: `YURI_CAPITAL_REPO_USERNAME`, `YURI_CAPITAL_REPO_PASSWORD`.
