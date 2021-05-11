module.exports = {
  "env": {
    "browser": "true",
    "commonjs": "true",
    "es2021": "true",
  },
  "extends": [
    "prettier",
    "airbnb-base",
  ],
  parserOptions: {
    "ecmaVersion": 12,
  },
  rules: {
    "eqeqeq": "warn",
    "strict": "off",
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "no-unused-vars": "warn",
    "no-empty": "warn",
    "no-var": "error",
    "no-console": "off",
    "no-cond-assign": ["error", "always"],
    "no-multi-spaces": ["error"],
    "consistent-return": "off",
  },
};
