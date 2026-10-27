import { antfu, isInEditorEnv, isPackageInScope, resolveSubOptions } from '@antfu/eslint-config'
import { toMerged } from 'es-toolkit'

import { tailwindcss } from './configs/tailwindcss.ts'

export function yimo(...args: Parameters<typeof antfu>): ReturnType<typeof antfu> {
  const [userOptions = {}, ...userConfigs] = args
  const {
    tailwindcss: enableTailwindcss = isPackageInScope('tailwindcss'),
    isInEditor = isInEditorEnv(),
    react = isPackageInScope('react'),
    unocss = isPackageInScope('unocss'),
  } = userOptions

  if (enableTailwindcss) {
    userConfigs.push(tailwindcss(resolveSubOptions(userOptions, 'tailwindcss')))
  }

  const options = toMerged({
    unocss,
    react,
    formatters: true,
    rules: {
      'style/switch-colon-spacing': ['error', { before: false }],
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
    },
    overrides: {
      vue: {
        'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
      },
      stylistic: {
        'style/max-statements-per-line': ['error', { max: 1, ignoredNodes: ['BreakStatement'] }],
        'antfu/if-newline': 'off',
      },
      javascript: {
        'unused-imports/no-unused-vars': ['error', {
          args: 'all',
          argsIgnorePattern: '^_+$',
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: '^_+$',
        }],
      },
      typescript: {
        'ts/consistent-type-definitions': 'off',
      },
    },
  } satisfies typeof userOptions, userOptions)

  const composer = antfu(options, ...userConfigs)

  if (isInEditor) {
    composer.disableRulesFix(['no-useless-return'], {
      // @ts-expect-error type error
      builtinRules: () => import('eslint/use-at-your-own-risk').then(r => r.builtinRules),
    })
  }

  return composer
}
