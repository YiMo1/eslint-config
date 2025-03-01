import type { Linter } from 'eslint'
import { GLOB_EXCLUDE } from '../globs.ts'

export function ignores(extra: string[] = []): Linter.Config {
  return { ignores: [...GLOB_EXCLUDE, ...extra] }
}
