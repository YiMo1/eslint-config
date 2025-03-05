import plugin from '@stylistic/eslint-plugin'

import type { Linter } from 'eslint'

export function stylistic(): Linter.Config[] {
  return [
    plugin.configs.all,
    {
      rules: {
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/indent': ['error', 2],
        '@stylistic/padded-blocks': 'off',
        '@stylistic/object-curly-spacing': ['error', 'always'],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/semi': ['error', 'never'],
        '@stylistic/quote-props': ['error', 'as-needed'],
        '@stylistic/array-element-newline': ['error', 'consistent'],
        '@stylistic/object-property-newline': 'off',
        '@stylistic/space-before-function-paren': [
          'error',
          { named: 'never', anonymous: 'never', asyncArrow: 'always' },
        ],
        '@stylistic/spaced-comment': ['error', 'always', { block: { balanced: true } }],
        '@stylistic/member-delimiter-style': [
          'error',
          { multiline: { delimiter: 'none' }, singleline: { delimiter: 'semi' } },
        ],
        '@stylistic/max-len': ['error', { code: 100, tabWidth: 2 }],
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
        '@stylistic/object-curly-newline': ['error', { multiline: true, consistent: true }],
      },
    },
  ]
}
