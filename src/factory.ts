import { antfu, isInEditorEnv, isPackageInScope, resolveSubOptions } from '@antfu/eslint-config'

import { tailwindcss } from './configs/tailwindcss.ts'

export function yimo(...args: Parameters<typeof antfu>): ReturnType<typeof antfu> {
  let [options = {}, ...userConfigs] = args
  const { tailwindcss: enableTailwindcss = isPackageInScope('tailwindcss'), isInEditor = isInEditorEnv() } = options

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
  options.overrides = {
    ...options.overrides,
    vue: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
      ...options.overrides?.vue,
    },
  }

  const composer = antfu(options, ...userConfigs)

  if (isInEditor) {
    composer.disableRulesFix(['no-useless-return'], {
      // @ts-expect-error type error
      builtinRules: () => import('eslint/use-at-your-own-risk').then(r => r.builtinRules),
    })
  }

  return composer
}
