module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './my-app/tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'react'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:unicorn/recommended",
    
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // general
    'max-lines': ['error', 500],
    'no-console': 'error',
    'no-dupe-keys': 'error',
    'object-shorthand': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_+' }],
    'no-use-before-define': 'error',
    'no-warning-comments': [
      'error',
      {
        terms: ['no commit'],
        location: 'anywhere',
      },
    ],
    curly: 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',

    // async
    'no-restricted-syntax': [
      'error',
      {
        selector: 'FunctionDeclaration[async=false][id.name=/Async$/]',
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector: 'FunctionDeclaration[async=true][id.name!=/Async$/]',
        message: "Async function name must end in 'Async'",
      },
      {
        selector: 'MethodDefinition[value.async=false][key.name=/Async$/]',
        message: "Method ending in 'Async' must be declared async",
      },
      {
        selector: 'MethodDefinition[value.async=true][key.name!=/Async$/]',
        message: "Async method name must end in 'Async'",
      },
      {
        selector:
          'Property[value.type=/FunctionExpression$/][value.async=false][key.name=/Async$/]',
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          'Property[value.type=/FunctionExpression$/][value.async=true][key.name!=/Async$/]',
        message: "Async function name must end in 'Async'",
      },
      {
        selector:
          'VariableDeclarator[init.type=/FunctionExpression$/][init.async=false][id.name=/Async$/]',
        message: "Function ending in 'Async' must be declared async",
      },
      {
        selector:
          'VariableDeclarator[init.type=/FunctionExpression$/][init.async=true][id.name!=/Async$/]',
        message: "Async function name must end in 'Async'",
      },
    ],

   // ts
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_+' },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/no-parameter-properties': 'off',

   // react
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/boolean-prop-naming': 'warn',
    'react/default-props-match-prop-types': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/require-default-props': 'off',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',

  
    // prettier
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: false,
        semi: false,
        arrowParens: 'always',
      },
    ],
  },
}
