import plugin from 'eslint-plugin-tailwindcss'

import type { ESLint, Linter } from 'eslint'
import type { Overwrite } from '../type.ts'

export type TailwindcssOptions = Overwrite
export function tailwindcss(options: TailwindcssOptions = {}): Linter.Config {
  const { overwrite = {} } = options
  return {
    plugins: { tailwindcss: plugin as ESLint.Plugin },
    rules: {
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      ...overwrite,
    },
  }
}
