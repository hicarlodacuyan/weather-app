module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 'no-console': 'off',
    // semi: ['error', 'always'],
    // quotes: ['error', 'single'],
    'linebreak-style': 0,
  },
}
