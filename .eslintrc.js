module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  globals: {
    __DEV__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 1,
    'no-useless-escape': 1,
    'no-fallthrough': 1,
    'no-extra-boolean-cast': 1,
  },
};
