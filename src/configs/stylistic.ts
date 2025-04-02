import plugin from '@stylistic/eslint-plugin'

import type { Linter } from 'eslint'
import type { Overwrite } from '../type.ts'

export type StylisticOptions = Overwrite

export function stylistic(options: StylisticOptions = {}): Linter.Config {
  const { overwrite = {} } = options
  return {
    plugins: { stylistic: plugin },
    rules: {
      'stylistic/array-bracket-newline': 'error',
      'stylistic/array-bracket-spacing': 'error',
      'stylistic/array-element-newline': ['error', 'consistent'],
      'stylistic/arrow-parens': 'error',
      'stylistic/arrow-spacing': 'error',
      'stylistic/block-spacing': 'error',
      'stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'stylistic/comma-dangle': ['error', 'always-multiline'],
      'stylistic/comma-spacing': 'error',
      'stylistic/comma-style': 'error',
      'stylistic/computed-property-spacing': 'error',
      'stylistic/dot-location': 'error',
      'stylistic/eol-last': 'error',
      'stylistic/function-call-argument-newline': ['error', 'consistent'],
      'stylistic/function-call-spacing': 'error',
      'stylistic/function-paren-newline': 'error',
      'stylistic/generator-star-spacing': 'error',
      'stylistic/implicit-arrow-linebreak': 'error',
      'stylistic/indent': ['error', 2],
      'stylistic/indent-binary-ops': ['error', 2],
      'stylistic/key-spacing': 'error',
      'stylistic/keyword-spacing': 'error',
      'stylistic/linebreak-style': 'error',
      'stylistic/lines-between-class-members': [
        'error',
        {
          enforce: [
            { blankLine: 'never', prev: 'field', next: 'field' },
            { blankLine: 'always', prev: 'method', next: 'method' },
            { blankLine: 'always', prev: 'field', next: 'method' },
            { blankLine: 'always', prev: 'method', next: 'field' },
          ],
        },
      ],
      'stylistic/member-delimiter-style': [
        'error',
        { multiline: { delimiter: 'none' }, singleline: { delimiter: 'semi' } },
      ],
      'stylistic/multiline-ternary': ['error', 'always-multiline'],
      'stylistic/new-parens': 'error',
      'stylistic/no-confusing-arrow': 'error',
      'stylistic/no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
      'stylistic/no-extra-semi': 'error',
      'stylistic/no-floating-decimal': 'error',
      'stylistic/no-multi-spaces': ['error', { exceptions: { Property: false } }],
      'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'stylistic/no-trailing-spaces': 'error',
      'stylistic/no-whitespace-before-property': 'error',
      'stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      'stylistic/object-curly-spacing': ['error', 'always'],
      'stylistic/one-var-declaration-per-line': 'error',
      'stylistic/operator-linebreak': 'error',
      'stylistic/padding-line-between-statements': 'error',
      'stylistic/quote-props': ['error', 'as-needed'],
      'stylistic/quotes': ['error', 'single', { allowTemplateLiterals: 'always' }],
      'stylistic/rest-spread-spacing': 'error',
      'stylistic/semi': ['error', 'never'],
      'stylistic/semi-spacing': 'error',
      'stylistic/semi-style': ['error', 'first'],
      'stylistic/space-before-blocks': 'error',
      'stylistic/space-before-function-paren': [
        'error',
        { named: 'never', anonymous: 'never', asyncArrow: 'always' },
      ],
      'stylistic/space-in-parens': 'error',
      'stylistic/space-infix-ops': 'error',
      'stylistic/space-unary-ops': 'error',
      'stylistic/spaced-comment': ['error', 'always', { block: { balanced: true } }],
      'stylistic/switch-colon-spacing': 'error',
      'stylistic/template-curly-spacing': 'error',
      'stylistic/template-tag-spacing': 'error',
      'stylistic/type-annotation-spacing': 'error',
      'stylistic/type-generic-spacing': 'error',
      'stylistic/type-named-tuple-spacing': 'error',
      'stylistic/wrap-iife': 'error',
      'stylistic/wrap-regex': 'error',
      'stylistic/yield-star-spacing': 'error',
      'stylistic/max-len': ['error', { code: 100, tabWidth: 2, ignoreUrls: true }],
      'stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
      'stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],
      'stylistic/jsx-indent': [
        'error', 2, {
          checkAttributes: true,
          indentLogicalExpressions: true,
        },
      ],
      'stylistic/jsx-wrap-multilines': [
        'error', {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
          propertyValue: 'parens-new-line',
        },
      ],
      'stylistic/jsx-indent-props': ['error', 2],
      'stylistic/jsx-sort-props': [
        'error', {
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
        },
      ],
      'stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'stylistic/jsx-closing-bracket-location': ['error', 'after-props'],
      'stylistic/jsx-curly-brace-presence': [
        'error', {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],
      'stylistic/jsx-curly-spacing': [
        'error', {
          when: 'never',
          children: true,
          allowMultiline: false,
        },
      ],
      'stylistic/jsx-equals-spacing': ['error', 'never'],
      ...overwrite,
    },
  }
}
