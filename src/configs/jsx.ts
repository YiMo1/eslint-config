import type { Linter } from 'eslint'
import { GLOB_JSX, GLOB_TSX } from '../globs.ts'

export function jsx(): Linter.Config[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    },
  ]
}
