export default {
  locales: ['en', 'am'],
  output: 'src/locales/$LOCALE/translation.json',
  input: ['src/**/*.{js,jsx}'],
  sort: true,
  keepRemoved: false,
  keySeparator: '.',
  namespaceSeparator: false,
  useKeysAsDefaultValue: (locale) => locale === 'en',
  defaultValue: (locale, key) => (locale === 'en' ? '' : key),
  lexers: {
    js: ['JavascriptLexer'],
    jsx: ['JavascriptLexer'],
  },
}
