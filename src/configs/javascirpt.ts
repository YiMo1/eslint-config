import globals from 'globals'
import js from '@eslint/js'

import { GLOB_JSX } from '../globs.ts'

import type { Linter } from 'eslint'

export function javascript(): Linter.Config[] {
  return [
    {
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: { ...globals.browser, ...globals.node },
        parserOptions: {
          sourceType: 'module',
          ecmaVersion: 'latest',
          ecmaFeatures: { globalReturn: false, impliedStrict: true },
        },
      },
      rules: {
        ...js.configs.all.rules,
        'no-await-in-loop': 'off',
        'no-duplicate-imports': 'off',
        'no-inner-declarations': 'off',
        'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
        'no-unused-vars': [
          'error',
          {
            args: 'all',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_+$',
            reportUsedIgnorePattern: true,
            destructuredArrayIgnorePattern: '^_+$',
          },
        ],
        'no-use-before-define': ['error', { classes: false, functions: false }],
        'require-atomic-updates': 'off',
        'use-isnan': ['error', { enforceForSwitchCase: true, enforceForIndexOf: true }],
        'valid-typeof': ['error', { requireStringLiterals: true }],
        'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true }],
        'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
        camelcase: 'off',
        'capitalized-comments': 'off',
        'class-methods-use-this': 'off',
        complexity: 'off',
        'consistent-return': 'off',
        'consistent-this': 'off',
        curly: 'off',
        'default-case': 'off',
        eqeqeq: ['error', 'smart'],
        'func-name-matching': 'off',
        'func-names': 'off',
        'func-style': 'off',
        'grouped-accessor-pairs': 'off',
        'guard-for-in': 'off',
        'id-denylist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'init-declarations': 'off',
        'logical-assignment-operators': 'off',
        'max-classes-per-file': 'off',
        'max-depth': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'new-cap': ['error', { capIsNew: false, newIsCap: true, properties: true }],
        'no-bitwise': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-continue': 'off',
        'no-div-regex': 'off',
        'no-else-return': ['error', { allowElseIf: false }],
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-function': 'off',
        'no-eq-null': 'off',
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'off',
        'no-inline-comments': 'off',
        'no-invalid-this': 'off',
        'no-labels': 'off',
        'no-loop-func': 'off',
        'no-magic-numbers': 'off',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-restricted-globals': 'off',
        'no-restricted-imports': 'off',
        'no-restricted-properties': [
          'error',
          {
            message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.',
            property: '__proto__',
          },
          { message: 'Use `Object.defineProperty` instead.', property: '__defineGetter__' },
          { message: 'Use `Object.defineProperty` instead.', property: '__defineSetter__' },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupGetter__',
          },
          {
            message: 'Use `Object.getOwnPropertyDescriptor` instead.',
            property: '__lookupSetter__',
          },
        ],
        'no-restricted-syntax': 'off',
        'no-return-assign': 'off',
        'no-sequences': ['error', { allowInParentheses: false }],
        'no-shadow': 'off',
        'no-ternary': 'off',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
            enforceForJSX: true,
          },
        ],
        'no-warning-comments': 'off',
        'object-shorthand': [
          'error',
          'always',
          { avoidQuotes: false, ignoreConstructors: false, avoidExplicitReturnArrows: true },
        ],
        'one-var': ['error', { initialized: 'never' }],
        'operator-assignment': 'off',
        'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        'prefer-destructuring': 'off',
        'prefer-named-capture-group': 'off',
        'prefer-numeric-literals': 'off',
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        'quote-props': ['error', 'as-needed'], // TODO deprecated
        radix: 'off',
        'require-await': 'off',
        'require-unicode-regexp': 'off',
        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            allowSeparatedGroups: true,
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
          },
        ],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'spaced-comment': ['error', 'always', { block: { balanced: true } }], // TODO deprecated
      },
    },
    {
      files: [GLOB_JSX],
      languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    },
  ]
}
