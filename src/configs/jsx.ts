import { GLOB_JSX, GLOB_TSX } from '../globs.ts'

import type { Linter } from 'eslint'

export function jsx(): Linter.Config[] {
  return [
    {
      files: [GLOB_JSX, GLOB_TSX],
      languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    },
  ]
}
