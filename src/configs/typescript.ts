import { join } from 'node:path'
import { existsSync } from 'node:fs'

import { configs, parser, plugin } from 'typescript-eslint'

import { GLOB_TS, GLOB_TSX, GLOB_VUE } from '../globs.ts'
import { renameRules } from '../tool.ts'

import type { ESLint, Linter } from 'eslint'

const maping = { '@typescript-eslint': 'ts' }

export function typescript(): Linter.Config[] {
  const enableType = existsSync(join(process.cwd(), 'tsconfig.json'))

  return [
    { plugins: { ts: plugin as ESLint.Plugin } },
    {
      files: [GLOB_TS, GLOB_TSX, GLOB_VUE],
      languageOptions: {
        sourceType: 'module',
        parser: parser as Linter.Parser,
        parserOptions: {
          projectService: enableType,
          tsconfigRootDir: process.cwd(),
          ecmaFeatures: { jsx: true },
          extraFileExtensions: ['.vue'],
        },
      },
      rules: {
        ...configs.eslintRecommended.rules,
        // eslint-disable-next-line ts/no-non-null-assertion
        ...renameRules(configs.all[configs.all.length - 1].rules!, maping),
        'ts/consistent-type-definitions': ['error', 'type'],
        'ts/no-unsafe-type-assertion': 'off',
        'ts/naming-convention': 'off',
        'ts/explicit-function-return-type': 'off',
        'ts/explicit-module-boundary-types': 'off',
        'ts/prefer-readonly-parameter-types': 'off',
        'ts/no-magic-numbers': 'off',
        // eslint-disable-next-line ts/no-non-null-assertion
        ...enableType ? {} : renameRules(configs.disableTypeChecked.rules!, maping),
      },
    },
  ]
}
