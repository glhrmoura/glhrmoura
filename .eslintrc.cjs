module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    semi: 'error',
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}
