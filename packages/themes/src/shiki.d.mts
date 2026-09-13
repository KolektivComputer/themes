export interface ShikiTokenColor {
  scope: string | string[];
  settings: { foreground?: string; fontStyle?: string };
}

export interface ShikiTheme {
  name: string;
  type: 'light' | 'dark';
  colors: Record<string, string>;
  tokenColors: ShikiTokenColor[];
}

export declare const kolektivDark: ShikiTheme;
export declare const kolektivLight: ShikiTheme;
export declare const kolektivShikiThemes: Record<'kolektiv-dark' | 'kolektiv-light', ShikiTheme>;
