import { join } from 'node:path'
import { existsSync } from 'node:fs'

import { configs } from 'typescript-eslint'

import { GLOB_TS, GLOB_TSX } from '../globs.ts'

import type { Linter } from 'eslint'

export function typescript(): Linter.Config[] {
  const enableType = existsSync(join(process.cwd(), 'tsconfig.json'))

  return [
    configs.base as Linter.Config,
    configs.eslintRecommended as Linter.Config,
    { files: [GLOB_TSX], languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    {
      rules: {
        ...configs.all[configs.all.length - 1].rules,
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-unsafe-type-assertion': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        ...(enableType ? {} : configs.disableTypeChecked.rules),
      },
    },
    enableType
      ? {
          files: [GLOB_TS, GLOB_TSX],
          languageOptions: {
            parserOptions: { projectService: true, tsconfigRootDir: process.cwd() },
          },
        }
      : {},
  ]
}
