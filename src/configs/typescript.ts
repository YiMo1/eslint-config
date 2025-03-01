import { join } from 'node:path'
import { existsSync } from 'node:fs'

import { configs, parser, plugin } from 'typescript-eslint'

import { GLOB_JS, GLOB_JSX, GLOB_TS, GLOB_TSX } from '../globs.ts'

import type { ESLint, Linter } from 'eslint'

export function typescript(): Linter.Config[] {
  const enableType = existsSync(join(process.cwd(), 'tsconfig.json'))

  return [
    { plugins: { '@typescript-eslint': plugin as ESLint.Plugin } },
    {
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        sourceType: 'module',
        parser: parser as Linter.Parser,
        parserOptions: {
          projectService: enableType,
          tsconfigRootDir: process.cwd(),
          ecmaFeatures: { jsx: true },
        },
      },
    },
    {
      ignores: [GLOB_JS, GLOB_JSX],
      rules: {
        ...configs.eslintRecommended.rules,
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
  ]
}
