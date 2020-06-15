module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["eslint:recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ["error", 2],
    //"linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "quote-props": 0,
    "prettier/prettier": "error"
  },
  plugins: ["prettier"]
};