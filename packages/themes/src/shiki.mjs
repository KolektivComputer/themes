// Shiki themes derived from the Kolektiv palette. Plain theme registrations so
// consumers can pass them straight to Shiki (or any VS Code theme consumer).

export const kolektivDark = {
  name: 'kolektiv-dark',
  type: 'dark',
  colors: {
    'editor.background': '#10030d',
    'editor.foreground': '#ffe9fd',
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#9c8aa0', fontStyle: 'italic' } },
    { scope: ['keyword', 'keyword.control', 'storage', 'storage.type', 'storage.modifier'], settings: { foreground: '#e4c1f9' } },
    { scope: ['string', 'string.quoted', 'punctuation.definition.string', 'string.template'], settings: { foreground: '#e9f7b0' } },
    { scope: ['constant.numeric', 'constant.language', 'support.constant'], settings: { foreground: '#eac434' } },
    { scope: ['entity.name.function', 'support.function', 'variable.function', 'meta.function-call'], settings: { foreground: '#8fe6ea' } },
    { scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class', 'entity.name.namespace'], settings: { foreground: '#f2c4fb' } },
    { scope: ['entity.name.tag', 'punctuation.definition.tag', 'support.class.component'], settings: { foreground: '#e4c1f9' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#fad8c3' } },
    { scope: ['variable', 'variable.other', 'variable.other.readwrite', 'meta.object-literal.key'], settings: { foreground: '#ffe9fd' } },
    { scope: ['variable.parameter'], settings: { foreground: '#ffd6f0' } },
    { scope: ['keyword.operator', 'punctuation.definition.template-expression'], settings: { foreground: '#d9b8d6' } },
    { scope: ['punctuation', 'meta.brace'], settings: { foreground: '#b9a4bd' } },
    { scope: ['constant.character.escape'], settings: { foreground: '#8fe6ea' } },
    { scope: ['string.regexp'], settings: { foreground: '#03cea4' } },
    { scope: ['invalid', 'invalid.illegal'], settings: { foreground: '#ef2d56' } },
  ],
};

export const kolektivLight = {
  name: 'kolektiv-light',
  type: 'light',
  colors: {
    'editor.background': '#fff6ff',
    'editor.foreground': '#634e5e',
  },
  tokenColors: [
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#9c8aa0', fontStyle: 'italic' } },
    { scope: ['keyword', 'keyword.control', 'storage', 'storage.type', 'storage.modifier'], settings: { foreground: '#a45fc7' } },
    { scope: ['string', 'string.quoted', 'punctuation.definition.string', 'string.template'], settings: { foreground: '#5f7a12' } },
    { scope: ['constant.numeric', 'constant.language', 'support.constant'], settings: { foreground: '#8a6d00' } },
    { scope: ['entity.name.function', 'support.function', 'variable.function', 'meta.function-call'], settings: { foreground: '#1f8b8f' } },
    { scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class', 'entity.name.namespace'], settings: { foreground: '#8e44ad' } },
    { scope: ['entity.name.tag', 'punctuation.definition.tag', 'support.class.component'], settings: { foreground: '#a45fc7' } },
    { scope: ['entity.other.attribute-name'], settings: { foreground: '#b06a2c' } },
    { scope: ['variable', 'variable.other', 'variable.other.readwrite', 'meta.object-literal.key'], settings: { foreground: '#634e5e' } },
    { scope: ['variable.parameter'], settings: { foreground: '#8a4f7d' } },
    { scope: ['keyword.operator', 'punctuation.definition.template-expression'], settings: { foreground: '#8a728a' } },
    { scope: ['punctuation', 'meta.brace'], settings: { foreground: '#9c8aa0' } },
    { scope: ['constant.character.escape'], settings: { foreground: '#1f8b8f' } },
    { scope: ['string.regexp'], settings: { foreground: '#0a7f6b' } },
    { scope: ['invalid', 'invalid.illegal'], settings: { foreground: '#ef2d56' } },
  ],
};

export const kolektivShikiThemes = {
  'kolektiv-dark': kolektivDark,
  'kolektiv-light': kolektivLight,
};
