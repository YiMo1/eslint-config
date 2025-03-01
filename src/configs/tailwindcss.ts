import plugin from 'eslint-plugin-tailwindcss'

import type { ESLint, Linter } from 'eslint'

export function tailwindcss(): Linter.Config {
  return {
    plugins: { tailwindcss: plugin as ESLint.Plugin },
    rules: {
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
      'tailwindcss/no-arbitrary-value': 'off',
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/no-contradicting-classname': 'error',
    },
  }
}
