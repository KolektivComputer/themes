export type ColorScheme = 'light' | 'dark';

export interface ThemeColors {
  [key: string]: string;
}

export interface Theme {
  id: string;
  label: string;
  scheme: ColorScheme;
  shiki: string;
  aliases?: readonly string[];
  colors: ThemeColors;
}

export declare const colorKeys: readonly string[];
export declare const themes: readonly Theme[];
export declare const themeIds: string[];
export declare function getTheme(id: string): Theme | undefined;
export declare function shikiThemeFor(id: string, scheme?: ColorScheme): string;
export declare function themeCss(theme: Theme): string;
export declare function allThemeCss(): string;
