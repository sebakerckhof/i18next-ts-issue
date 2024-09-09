module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
     "@typescript-eslint/no-unsafe-assignment": "error",
     "@typescript-eslint/no-explicit-any": "off",
     "@typescript-eslint/no-unused-vars": "off",
  },
  root: true,
};