import importX from 'eslint-plugin-import-x'

import type { ESLint, Linter } from 'eslint'
import type { Overwrite } from '../type.ts'

export type ImportsOptions = Overwrite
export function imports(options: ImportsOptions = {}): Linter.Config {
  const { overwrite = {} } = options
  return {
    plugins: { 'import-x': importX as unknown as ESLint.Plugin },
    rules: {
      'import-x/no-deprecated': 'warn',
      'import-x/no-empty-named-blocks': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-named-as-default': 'error',
      'import-x/no-named-as-default-member': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-self-import': 'error',
      'import-x/first': 'error',
      'import-x/newline-after-import': [
        'error',
        { count: 1, exactCount: true, considerComments: true },
      ],
      'import-x/order': [
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
      'import-x/no-duplicates': ['error', { 'prefer-inline': true }],
      'import-x/named': 'error',
      ...overwrite,
    },
    settings: {
      'import-x/extensions': ['.js', '.jsx'],
    },
  }
}
