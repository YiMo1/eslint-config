import { ensurePackages, interopDefault } from '@antfu/eslint-config'

import type { OptionsOverrides } from '@antfu/eslint-config'
import type { ESLint, Linter } from 'eslint'

export async function tailwindcss(options: OptionsOverrides = {}): Promise<Linter.Config> {
  await ensurePackages(['eslint-plugin-tailwindcss'])

  return {
    plugins: { tailwindcss: await interopDefault(import('eslint-plugin-tailwindcss')) as ESLint.Plugin },
    rules: {
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      ...options.overrides,
    },
  }
}
