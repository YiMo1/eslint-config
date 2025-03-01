import { ignores, imports } from './configs/index.ts'
import type { Linter } from 'eslint'

export type YimoOptions = {
  ignores?: string[]
}

export function yimo(options: YimoOptions = {}, ...extraConfigs: Linter.Config[]) {
  const { ignores: userIgnores } = options
  const configs: Linter.Config[] = [ignores(userIgnores), imports()]

  return configs.concat(extraConfigs)
}
