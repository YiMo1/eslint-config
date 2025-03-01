import { join } from 'node:path'
import { existsSync } from 'node:fs'

import { type ConfigArray, configs } from 'typescript-eslint'

import { GLOB_TS, GLOB_TSX } from '../globs.ts'

import type { Linter } from 'eslint'

function extractRules(configs: ConfigArray) {
  return configs[configs.length - 1].rules
}

export function typescript(): Linter.Config[] {
  const enableType = existsSync(join(process.cwd(), 'tsconfig.json'))

  return [
    configs.base as Linter.Config,
    configs.eslintRecommended as Linter.Config,
    {
      rules: {
        ...extractRules(configs.strict),
        ...extractRules(configs.stylistic),
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
        ],
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
      },
    },
    { files: [GLOB_TSX], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    enableType
      ? {
          files: [GLOB_TS, GLOB_TSX],
          languageOptions: {
            parserOptions: {
              projectService: true,
              tsconfigRootDir: process.cwd(),
            },
          },
          rules: {
            ...extractRules(configs.strictTypeCheckedOnly),
            ...extractRules(configs.stylisticTypeCheckedOnly),
          },
        }
      : {},
  ]
}
