import type { OptionsOverrides } from '@antfu/eslint-config'
import type { ESLint, Linter } from 'eslint'
import plugin from 'eslint-plugin-tailwindcss'

export function tailwindcss(options: OptionsOverrides = {}): Linter.Config {
  return {
    plugins: { tailwindcss: plugin as ESLint.Plugin },
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
