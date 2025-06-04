import { antfu, isPackageInScope, resolveSubOptions } from '@antfu/eslint-config'

import { tailwindcss } from './configs/tailwindcss.ts'

export function yimo(...args: Parameters<typeof antfu>): ReturnType<typeof antfu> {
  let [options = {}, ...userConfigs] = args
  const { tailwindcss: enableTailwindcss = isPackageInScope('tailwindcss') } = options

  if (enableTailwindcss) {
    userConfigs = [tailwindcss(resolveSubOptions(options, 'tailwindcss')), ...userConfigs]
  }

  options.formatters = options.formatters ?? true
  options.rules = {
    'style/max-statements-per-line': ['error', { max: 1, ignoredNodes: ['BreakStatement'] }],
    'antfu/if-newline': 'off',
    'perfectionist/sort-imports': ['error', {
      groups: [
        'builtin',
        'external',
        ['internal', 'parent', 'sibling', 'index'],
        'style',
        'type',
      ],
      type: 'natural',
    }],
    ...options.rules,
  }

  return antfu(options, ...userConfigs)
}
