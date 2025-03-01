import { GLOB_EXCLUDE } from '../globs.ts'

import type { Linter } from 'eslint'

export function ignores(extra: string[] = []): Linter.Config {
  return { ignores: [...GLOB_EXCLUDE, ...extra] }
}
