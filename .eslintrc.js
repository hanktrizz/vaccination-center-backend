module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "global-require": "off",
    "import/no-dynamic-require": "off",
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
  plugins: ["prettier"],
};
