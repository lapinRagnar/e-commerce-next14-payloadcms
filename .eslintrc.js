module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms', 'eslint:recommended', 'standard'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': 'off',
  },
}
