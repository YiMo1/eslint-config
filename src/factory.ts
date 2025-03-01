import { isPackageExists } from 'local-pkg'

import { ignores, imports, javascript, tailwindcss, typescript } from './configs/index.ts'

import type { Linter } from 'eslint'

export type YimoOptions = {
  ignores?: string[]
  tailwindcss?: boolean
  ts?: boolean
}

export function yimo(options: YimoOptions = {}, ...extraConfigs: Linter.Config[]) {
  const {
    ignores: userIgnores,
    tailwindcss: enableTailwindcss = isPackageExists('tailwindcss'),
    ts: enableTs = isPackageExists('typescript'),
  } = options

  const configs: Linter.Config[] = [ignores(userIgnores), imports(), ...javascript()]

  if (enableTailwindcss) {
    configs.push(tailwindcss())
  }

  if (enableTs) {
    configs.push(...typescript())
  }

  return configs.concat(extraConfigs)
}
