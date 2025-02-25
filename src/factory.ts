import { isPackageExists } from 'local-pkg'

import {
  ignores,
  imports,
  javascript,
  jsx,
  typescript,
  type TypescriptOptions,
} from './configs/index.ts'
import { GLOB_TSX } from './globs.ts'

import type { Linter } from 'eslint'

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

  const configs: (Linter.Config | Linter.Config[])[] = [
    ignores(userIgnores),
    javascript(),
    imports(),
  ]

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
