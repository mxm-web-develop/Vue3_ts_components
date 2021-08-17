module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",

  ],

  rules: {
    "explicit-module-boundary-types": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
  },
};
