import { describe, expect, it } from 'vitest';
import {
  allThemeCss,
  colorKeys,
  getTheme,
  shikiThemeFor,
  themeCss,
  themeIds,
  themes,
} from '../src/tokens.mjs';
import { kolektivDark, kolektivLight } from '../src/shiki.mjs';

describe('@kolektiv/themes tokens', () => {
  it('exposes the expected theme ids', () => {
    expect([...themeIds]).toEqual([
      'nord',
      'catppuccin-latte',
      'catppuccin-frappe',
      'catppuccin-macchiato',
      'catppuccin-mocha',
      'kolektiv-light',
      'kolektiv-dark',
    ]);
  });

  it('has every colour token for every theme', () => {
    for (const theme of themes) {
      for (const key of colorKeys) {
        expect(theme.colors[key], `${theme.id} → ${key}`).toBeTruthy();
      }
      expect(['light', 'dark']).toContain(theme.scheme);
    }
  });

  it('contains no size or radius tokens (apps own those)', () => {
    for (const theme of themes) {
      for (const key of Object.keys(theme.colors)) {
        expect(key.startsWith('radius') || key.startsWith('size')).toBe(false);
      }
    }
  });

  it('maps each theme to its Shiki analog', () => {
    expect(shikiThemeFor('nord')).toBe('nord');
    expect(shikiThemeFor('catppuccin-mocha')).toBe('catppuccin-mocha');
    expect(shikiThemeFor('kolektiv-dark')).toBe('kolektiv-dark');
    expect(shikiThemeFor('kolektiv-light')).toBe('kolektiv-light');
    expect(shikiThemeFor('nope', 'light')).toBe('github-light');
    expect(shikiThemeFor('nope', 'dark')).toBe('github-dark');
  });

  it('keeps legacy Kolektiv ids working via aliases', () => {
    const dark = getTheme('kolektiv-dark');
    expect(dark?.aliases).toContain('kolektivcomputer-dark');
    const css = allThemeCss();
    expect(css).toContain("[data-theme='kolektiv-dark']");
    expect(css).toContain("[data-theme='kolektivcomputer-dark']");
    expect(css).toContain("[data-theme='kolektivcomputer-lig']");
  });

  it('renders daisyUI-compatible colour variables', () => {
    const theme = getTheme('nord');
    expect(theme).toBeDefined();
    const css = themeCss(theme!);
    expect(css).toContain("[data-theme='nord']");
    expect(css).toContain('color-scheme: light');
    expect(css).toContain('--color-base-100: oklch(95.127% 0.007 260.731)');
    expect(css).not.toContain('--radius');
    expect(allThemeCss()).toContain("[data-theme='kolektiv-dark']");
  });

  it('ships Kolektiv Shiki themes', () => {
    expect(kolektivDark.name).toBe('kolektiv-dark');
    expect(kolektivDark.type).toBe('dark');
    expect(kolektivLight.type).toBe('light');
    expect(kolektivDark.tokenColors.length).toBeGreaterThan(0);
  });
});
