import type { Linter } from 'eslint'
import { type TypescriptOptions, ignores, javascript, jsx, typescript } from './configs/index.ts'
import { isPackageExists } from 'local-pkg'
import { GLOB_TSX } from './globs.ts'

type Options = {
  jsx?: boolean
  ignores?: string[]
  ts?: boolean | Pick<TypescriptOptions, 'type'>
}

export function yimo(options: Options = {}, ...extraConfigs: Linter.Config[]) {
  const {
    jsx: enableJsx = true,
    ignores: userIgnores = [],
    ts: enableTs = isPackageExists('typescript'),
  } = options
  const configs: (Linter.Config | Linter.Config[])[] = [ignores(userIgnores), javascript()]

  if (enableJsx) {
    configs.push(jsx())
  }

  if (enableTs) {
    const { type } = typeof enableTs == 'boolean' ? {} : enableTs
    configs.push(typescript({ extraFiles: enableJsx ? [GLOB_TSX] : [], type }))
  }

  configs.push(extraConfigs)
  return configs.flat(Infinity)
}
