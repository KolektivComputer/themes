# Changelog

All notable changes to Kolektiv themes are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1-SNAPSHOT.1] - 2026-09-13

### Added

- `@kolektiv/themes` — colour-only design tokens for all public Kolektiv projects.
- daisyUI-compatible CSS variables (`theme.css`), Shiki theme registrations
  (`shiki`), and raw `tokens.json` for Compose / other platforms.
- Initial palettes: `nord`, `catppuccin-latte/frappe/macchiato/mocha`
  (extracted from Keel), and `kolektivcomputer-lig/dark`.
- Tag-driven release and publish workflows (publishes to `brand-npm`, verifies
  from the aggregated `npm-public` group).
