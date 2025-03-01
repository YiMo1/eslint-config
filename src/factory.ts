import { ignores } from './configs/index.ts'
import type { Linter } from 'eslint'

export type YimoOptions = {
  ignores?: string[]
}

export function yimo(options: YimoOptions = {}, ...extraConfigs: Linter.Config[]) {
  const { ignores: userIgnores } = options
  const configs = [ignores(userIgnores)]

  return [...configs, ...extraConfigs]
}
