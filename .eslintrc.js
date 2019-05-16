module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "max-len": ["warn", {"code": 120, "ignoreUrls": true}]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
