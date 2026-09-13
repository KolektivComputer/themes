#!/usr/bin/env node
// Generate the published artifacts for @kolektiv/themes from the colour-only
// source in src/tokens.mjs. Deterministic and idempotent.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

import { allThemeCss, colorKeys, themes } from '../src/tokens.mjs';

const packageRoot = new URL('../', import.meta.url);
const outDir = new URL('dist/', packageRoot);
mkdirSync(outDir, { recursive: true });

const jsHeader = `// AUTO-GENERATED FILE - DO NOT EDIT.\n// Source: src/tokens.mjs — regenerate with \`pnpm --filter @kolektiv/themes build\`.\n\n`;
const cssHeader = `/* AUTO-GENERATED FILE - DO NOT EDIT.\n * Source: src/tokens.mjs — regenerate with \`pnpm --filter @kolektiv/themes build\`.\n */\n\n`;

const version = JSON.parse(
  readFileSync(new URL('package.json', packageRoot), 'utf8'),
).version;

writeFileSync(new URL('theme.css', outDir), `${cssHeader}${allThemeCss()}\n`);
writeFileSync(
  new URL('tokens.json', outDir),
  `${JSON.stringify({ version, colorKeys, themes }, null, 2)}\n`,
);

writeFileSync(
  new URL('index.mjs', outDir),
  jsHeader + readFileSync(new URL('src/tokens.mjs', packageRoot), 'utf8'),
);
writeFileSync(
  new URL('index.d.mts', outDir),
  readFileSync(new URL('src/tokens.d.mts', packageRoot), 'utf8'),
);

writeFileSync(
  new URL('shiki.mjs', outDir),
  jsHeader + readFileSync(new URL('src/shiki.mjs', packageRoot), 'utf8'),
);
writeFileSync(
  new URL('shiki.d.mts', outDir),
  readFileSync(new URL('src/shiki.d.mts', packageRoot), 'utf8'),
);

console.log(
  `Generated @kolektiv/themes: ${themes.length} themes × ${colorKeys.length} colour tokens.`,
);
