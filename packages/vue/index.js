module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    '@byodian/eslint-config-basic',
    'plugin:vue/recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1
    }],
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off'
  }
}
