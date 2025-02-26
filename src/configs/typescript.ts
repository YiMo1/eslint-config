import plugin from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import { GLOB_TS } from '../globs.ts'
import { renameRules } from '../tools.ts'

import type { ESLint, Linter } from 'eslint'

export type TypescriptOptions = {
  extraFiles?: string[]
  extensions?: string[]
  type?: boolean
}

export function typescript(options: TypescriptOptions = {}): Linter.Config[] {
  const { extraFiles = [], extensions = [], type = true } = options

  const parserOptions = type
    ? {
        project: true,
        projectService: true,
        extraFileExtensions: extensions,
        tsconfigRootDir: process.cwd(),
      }
    : {}

  return [
    {
      files: [GLOB_TS, ...extraFiles],
      plugins: { ts: plugin as unknown as ESLint.Plugin },
      languageOptions: { parser, parserOptions },
      rules: {
        ...plugin.configs['eslint-recommended'].overrides?.[0].rules,
        ...renameRules(
          {
            ...(type ? plugin.configs['strict-type-checked'] : plugin.configs.strict).rules,
            ...(type ? plugin.configs['stylistic-type-checked'] : plugin.configs.strict).rules,
          },
          { '@typescript-eslint': 'ts' },
        ),
        'ts/consistent-type-definitions': ['error', 'type'],
      },
    },
  ]
}
