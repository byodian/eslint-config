const basic = require('@byodian/eslint-config-basic')

module.exports = {
  extends: [
    '@byodian/eslint-config-basic',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
  },
  overrides: basic.overrides,
  rules: {
    'import/named': 'off',

    // Override JS
    // https://typescript-eslint.io/rules/indent
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      MemberExpression: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      ignoredNodes: [
        'TemplateLiteral *',
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
        'TSTypeParameterInstantiation',
      ],
      offsetTernaryExpressions: true,
    }],

    // https://typescript-eslint.io/rules/brace-style
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

    // https://typescript-eslint.io/rules/comma-spacing
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],

    // https://typescript-eslint.io/rules/comma-dangle
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],

    // https://typescript-eslint.io/rules/keyword-spacing
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],

    // https://typescript-eslint.io/rules/object-curly-spacing
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],

    // https://typescript-eslint.io/rules/semi
    'semi': 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    // https://typescript-eslint.io/rules/quotes
    'quotes': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],

    // https://typescript-eslint.io/rules/space-before-blocks
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': ['error', 'always'],

    // https://typescript-eslint.io/rules/space-before-function-paren
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // https://typescript-eslint.io/rules/space-infix-ops
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error',

    // https://typescript-eslint.io/rules/lines-between-class-members
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // https://typescript-eslint.io/rules/no-unused-vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // https://typescript-eslint.io/rules/no-redeclare
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // https://typescript-eslint.io/rules/no-use-before-define
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],

    // https://typescript-eslint.io/rules/no-extra-parens
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'functions'],

    // https://typescript-eslint.io/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // https://typescript-eslint.io/rules/no-loss-of-precision
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    // https://typescript-eslint.io/rules/no-useless-constructor
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    // off
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
}

