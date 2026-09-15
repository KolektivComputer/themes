# Changelog

All notable changes to Kolektiv themes are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1-SNAPSHOT.3] - 2026-09-15

### Added

- Compose Multiplatform module (`dev.kolektiv.themes:themes`) with `DaisyColors`,
  `KolektivTheme`, and the seven palettes generated from `tokens.json`.
- Gradle wrapper so Kalendee / Blawk can `includeBuild` this repo.

## [0.0.1-SNAPSHOT.2] - 2026-09-13

### Changed

- Renamed the Kolektiv daisyUI theme ids to `kolektiv-light` and `kolektiv-dark` so they
  match their Shiki themes. The previous ids (`kolektivcomputer-lig`,
  `kolektivcomputer-dark`) are still emitted as CSS aliases, so existing `data-theme`
  values keep working.

### Added

- The `kolektiv-dark` and `kolektiv-light` Shiki theme registrations are built into the
  package (`@kolektiv/themes/shiki`) alongside the palette tokens.

## [0.0.1-SNAPSHOT.1] - 2026-09-13

### Added

- `@kolektiv/themes` — colour-only design tokens for all public Kolektiv projects.
- daisyUI-compatible CSS variables (`theme.css`), Shiki theme registrations
  (`shiki`), and raw `tokens.json` for Compose / other platforms.
- Initial palettes: `nord`, `catppuccin-latte/frappe/macchiato/mocha`
  (extracted from Keel), and `kolektivcomputer-lig/dark`.
- Tag-driven release and publish workflows (publishes to `brand-npm`, verifies
  from the aggregated `npm-public` group).
