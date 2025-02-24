import type { Linter } from 'eslint'
import { javascript, jsx, ignores } from './configs/index.ts'

type Options = {
  jsx?: boolean
  ignores?: string[]
}

export function yimo(options: Options = {}, ...extraConfigs: Linter.Config[]) {
  const { jsx: enableJsx = true, ignores: userIgnores = [] } = options
  const configs: (Linter.Config | Linter.Config[])[] = [ignores(userIgnores), javascript()]

  if (enableJsx) {
    configs.push(jsx())
  }

  configs.push(extraConfigs)
  return configs.flat(Infinity)
}
