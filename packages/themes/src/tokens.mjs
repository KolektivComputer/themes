// Single source of truth for Kolektiv theme *colours*.
//
// Deliberately colour-only: each app/site owns its sizes, radii, borders and
// density. These tokens are rendered out to daisyUI-compatible CSS variables,
// Shiki themes and `tokens.json` (for future Compose / other consumers).

/**
 * @typedef {'light' | 'dark'} ColorScheme
 * @typedef {{ id: string, label: string, scheme: ColorScheme, shiki: string, colors: Record<string, string> }} Theme
 */

/** @type {readonly string[]} */
export const colorKeys = [
  'base-100',
  'base-200',
  'base-300',
  'base-content',
  'primary',
  'primary-content',
  'secondary',
  'secondary-content',
  'accent',
  'accent-content',
  'neutral',
  'neutral-content',
  'info',
  'info-content',
  'success',
  'success-content',
  'warning',
  'warning-content',
  'error',
  'error-content',
];

/** @type {readonly Theme[]} */
export const themes = [
  {
    id: 'nord',
    label: 'Nord',
    scheme: 'light',
    shiki: 'nord',
    colors: {
      'base-100': 'oklch(95.127% 0.007 260.731)',
      'base-200': 'oklch(93.299% 0.01 261.788)',
      'base-300': 'oklch(89.925% 0.016 262.749)',
      'base-content': 'oklch(32.437% 0.022 264.182)',
      primary: 'oklch(59.435% 0.077 254.027)',
      'primary-content': 'oklch(11.887% 0.015 254.027)',
      secondary: 'oklch(69.651% 0.059 248.687)',
      'secondary-content': 'oklch(13.93% 0.011 248.687)',
      accent: 'oklch(77.464% 0.062 217.469)',
      'accent-content': 'oklch(15.492% 0.012 217.469)',
      neutral: 'oklch(45.229% 0.035 264.131)',
      'neutral-content': 'oklch(89.925% 0.016 262.749)',
      info: 'oklch(69.207% 0.062 332.664)',
      'info-content': 'oklch(13.841% 0.012 332.664)',
      success: 'oklch(76.827% 0.074 131.063)',
      'success-content': 'oklch(15.365% 0.014 131.063)',
      warning: 'oklch(85.486% 0.089 84.093)',
      'warning-content': 'oklch(17.097% 0.017 84.093)',
      error: 'oklch(60.61% 0.12 15.341)',
      'error-content': 'oklch(12.122% 0.024 15.341)',
    },
  },
  {
    id: 'catppuccin-latte',
    label: 'Catppuccin Latte',
    scheme: 'light',
    shiki: 'catppuccin-latte',
    colors: {
      'base-100': 'oklch(0.958 0.006 264.532)',
      'base-200': 'oklch(0.933 0.009 264.521)',
      'base-300': 'oklch(0.857 0.014 268.476)',
      'base-content': 'oklch(0.435 0.043 279.325)',
      primary: 'oklch(0.555 0.25 297.016)',
      'primary-content': 'oklch(98% 0.25 297.016)',
      secondary: 'oklch(0.686 0.126 20.867)',
      'secondary-content': 'oklch(98% 0.126 20.867)',
      accent: 'oklch(0.602 0.098 201.105)',
      'accent-content': 'oklch(98% 0.098 201.105)',
      neutral: 'oklch(0.808 0.017 271.198)',
      'neutral-content': 'oklch(0.435 0.043 279.325)',
      info: 'oklch(0.648 0.107 212.889)',
      'info-content': 'oklch(98% 0.107 212.889)',
      success: 'oklch(0.625 0.177 140.445)',
      'success-content': 'oklch(98% 0.177 140.445)',
      warning: 'oklch(0.692 0.204 42.429)',
      'warning-content': 'oklch(98% 0.204 42.429)',
      error: 'oklch(0.55 0.216 19.809)',
      'error-content': 'oklch(98% 0.216 19.809)',
    },
  },
  {
    id: 'catppuccin-frappe',
    label: 'Catppuccin Frappé',
    scheme: 'dark',
    shiki: 'catppuccin-frappe',
    colors: {
      'base-100': 'oklch(0.272 0.026 275.115)',
      'base-200': 'oklch(0.297 0.029 276.214)',
      'base-300': 'oklch(0.329 0.032 274.758)',
      'base-content': 'oklch(0.862 0.053 273.347)',
      primary: 'oklch(0.765 0.111 311.744)',
      'primary-content': 'oklch(20% 0.111 311.744)',
      secondary: 'oklch(0.844 0.055 18.307)',
      'secondary-content': 'oklch(40% 0.055 18.307)',
      accent: 'oklch(0.783 0.073 184.645)',
      'accent-content': 'oklch(40% 0.073 184.645)',
      neutral: 'oklch(0.46 0.037 272.966)',
      'neutral-content': 'oklch(0.862 0.053 273.347)',
      info: 'oklch(0.78 0.073 227.88)',
      'info-content': 'oklch(40% 0.073 227.88)',
      success: 'oklch(0.812 0.107 133.392)',
      'success-content': 'oklch(40% 0.107 133.392)',
      warning: 'oklch(0.773 0.111 47.726)',
      'warning-content': 'oklch(40% 0.111 47.726)',
      error: 'oklch(0.717 0.124 19.386)',
      'error-content': 'oklch(40% 0.124 19.386)',
    },
  },
  {
    id: 'catppuccin-macchiato',
    label: 'Catppuccin Macchiato',
    scheme: 'dark',
    shiki: 'catppuccin-macchiato',
    colors: {
      'base-100': 'oklch(0.219 0.025 280.657)',
      'base-200': 'oklch(0.249 0.03 278.435)',
      'base-300': 'oklch(0.279 0.035 276.937)',
      'base-content': 'oklch(0.871 0.048 273.665)',
      primary: 'oklch(0.772 0.126 303.898)',
      'primary-content': 'oklch(20% 0.126 303.898)',
      secondary: 'oklch(0.863 0.048 18.12)',
      'secondary-content': 'oklch(40% 0.048 18.12)',
      accent: 'oklch(0.821 0.076 184.1)',
      'accent-content': 'oklch(40% 0.076 184.1)',
      neutral: 'oklch(0.426 0.039 276.948)',
      'neutral-content': 'oklch(0.871 0.048 273.665)',
      info: 'oklch(0.785 0.085 228.378)',
      'info-content': 'oklch(40% 0.085 228.378)',
      success: 'oklch(0.835 0.108 138.15)',
      'success-content': 'oklch(40% 0.108 138.15)',
      warning: 'oklch(0.799 0.106 49.638)',
      'warning-content': 'oklch(40% 0.106 49.638)',
      error: 'oklch(0.737 0.125 11.194)',
      'error-content': 'oklch(40% 0.125 11.194)',
    },
  },
  {
    id: 'catppuccin-mocha',
    label: 'Catppuccin Mocha',
    scheme: 'dark',
    shiki: 'catppuccin-mocha',
    colors: {
      'base-100': 'oklch(0.183 0.02 284.204)',
      'base-200': 'oklch(0.216 0.025 284.065)',
      'base-300': 'oklch(0.243 0.03 283.911)',
      'base-content': 'oklch(0.879 0.043 272.277)',
      primary: 'oklch(0.787 0.119 304.769)',
      'primary-content': 'oklch(20% 0.119 304.769)',
      secondary: 'oklch(0.88 0.042 17.975)',
      'secondary-content': 'oklch(40% 0.042 17.975)',
      accent: 'oklch(0.858 0.079 182.75)',
      'accent-content': 'oklch(40% 0.079 182.75)',
      neutral: 'oklch(0.404 0.032 280.152)',
      'neutral-content': 'oklch(0.879 0.043 272.277)',
      info: 'oklch(0.791 0.096 228.653)',
      'info-content': 'oklch(40% 0.096 228.653)',
      success: 'oklch(0.858 0.109 142.715)',
      'success-content': 'oklch(40% 0.109 142.715)',
      warning: 'oklch(0.824 0.101 52.629)',
      'warning-content': 'oklch(40% 0.101 52.629)',
      error: 'oklch(0.756 0.13 2.764)',
      'error-content': 'oklch(40% 0.13 2.764)',
    },
  },
  {
    id: 'kolektivcomputer-lig',
    label: 'Kolektiv Light',
    scheme: 'light',
    shiki: 'kolektiv-light',
    colors: {
      'base-100': 'oklch(100% 0.038 333.862)',
      'base-200': 'oklch(95% 0.038 333.862)',
      'base-300': 'oklch(91% 0.038 333.862)',
      'base-content': 'oklch(45% 0.038 333.862)',
      primary: 'oklch(73.9% 0.118 312.516)',
      'primary-content': 'oklch(20% 0.118 312.516)',
      secondary: 'oklch(87.9% 0.099 116.387)',
      'secondary-content': 'oklch(20% 0.099 116.387)',
      accent: 'oklch(85.3% 0.073 198.026)',
      'accent-content': 'oklch(20% 0.073 198.026)',
      neutral: 'oklch(79.8% 0.068 54.632)',
      'neutral-content': 'oklch(20% 0.068 54.632)',
      info: 'oklch(61.8% 0.163 257.481)',
      'info-content': 'oklch(20% 0.163 257.481)',
      success: 'oklch(75.8% 0.148 171.098)',
      'success-content': 'oklch(20% 0.148 171.098)',
      warning: 'oklch(75% 0.156 93.12)',
      'warning-content': 'oklch(10% 0.156 93.12)',
      error: 'oklch(62.2% 0.225 16.116)',
      'error-content': 'oklch(10% 0.225 16.116)',
    },
  },
  {
    id: 'kolektivcomputer-dark',
    label: 'Kolektiv Dark',
    scheme: 'dark',
    shiki: 'kolektiv-dark',
    colors: {
      'base-100': 'oklch(13% 0.038 333.862)',
      'base-200': 'oklch(21% 0.038 333.862)',
      'base-300': 'oklch(27% 0.038 333.862)',
      'base-content': 'oklch(96% 0.038 333.862)',
      primary: 'oklch(85.9% 0.085 312.657)',
      'primary-content': 'oklch(20% 0.092 26.042)',
      secondary: 'oklch(96.4% 0.072 116.136)',
      'secondary-content': 'oklch(20% 0.072 116.136)',
      accent: 'oklch(94.3% 0.054 199.152)',
      'accent-content': 'oklch(20% 0.054 199.152)',
      neutral: 'oklch(90.5% 0.047 53.632)',
      'neutral-content': 'oklch(20% 0.047 53.632)',
      info: 'oklch(61.8% 0.163 257.481)',
      'info-content': 'oklch(20% 0.163 257.481)',
      success: 'oklch(75.8% 0.148 171.098)',
      'success-content': 'oklch(20% 0.148 171.098)',
      warning: 'oklch(83% 0.156 93.12)',
      'warning-content': 'oklch(20% 0.156 93.12)',
      error: 'oklch(62.2% 0.225 16.116)',
      'error-content': 'oklch(10% 0.225 16.116)',
    },
  },
];

export const themeIds = themes.map((theme) => theme.id);

/** @param {string} id @returns {Theme | undefined} */
export function getTheme(id) {
  return themes.find((theme) => theme.id === id);
}

/**
 * The Shiki theme paired with a daisyUI theme id. Unknown ids fall back to the
 * GitHub light/dark analog for the requested scheme.
 * @param {string} id
 * @param {ColorScheme} [scheme]
 */
export function shikiThemeFor(id, scheme = 'dark') {
  const theme = getTheme(id);
  if (theme) return theme.shiki;
  return scheme === 'light' ? 'github-light' : 'github-dark';
}

/**
 * daisyUI-compatible CSS for one theme. Colour-only: apps own radii/sizes.
 * @param {Theme} theme
 */
export function themeCss(theme) {
  const lines = [
    `html[data-theme='${theme.id}'],`,
    `[data-theme='${theme.id}'] {`,
    `  color-scheme: ${theme.scheme};`,
  ];
  for (const key of colorKeys) {
    lines.push(`  --color-${key}: ${theme.colors[key]};`);
  }
  lines.push('}');
  return lines.join('\n');
}

export function allThemeCss() {
  return themes.map(themeCss).join('\n\n');
}
