import importX from 'eslint-plugin-import-x'

import type { ESLint, Linter } from 'eslint'

export function imports(): Linter.Config[] {
  return [
    {
      plugins: { import: importX as unknown as ESLint.Plugin },
      rules: {
        'import/no-deprecated': 'warn',
        'import/no-empty-named-blocks': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-absolute-path': 'error',
        'import/no-self-import': 'error',
        'import/first': 'error',
        'import/newline-after-import': ['error', { exactCount: true, considerComments: true }],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: [
              'builtin',
              'external',
              ['internal', 'parent', 'sibling', 'index', 'object', 'unknown'],
              'type',
            ],
          },
        ],
        'import/no-duplicates': ['error', { 'prefer-inline': false, considerQueryString: true }],
      },
    },
  ]
}
