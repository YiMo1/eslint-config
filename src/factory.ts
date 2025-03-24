import { isPackageExists } from 'local-pkg'

import {
  type TypescriptOptions,
  ignores,
  imports,
  javascript,
  stylistic,
  tailwindcss,
  typescript,
  vue,
} from './configs/index.ts'

import type { Linter } from 'eslint'

export type YimoOptions = {
  ignores?: string[]
  tailwindcss?: boolean
  ts?: boolean | TypescriptOptions
  vue?: boolean
}

export function yimo(options: YimoOptions = {}, ...extraConfigs: Linter.Config[]) {
  const {
    ignores: userIgnores,
    tailwindcss: enableTailwindcss = isPackageExists('tailwindcss'),
    ts: enableTs = isPackageExists('typescript'),
    vue: enableVue = isPackageExists('vue'),
  } = options

  const configs: Linter.Config[] = [
    ignores(userIgnores),
    imports(),
    ...javascript(),
    stylistic(),
  ]

  if (enableTailwindcss) {
    configs.push(tailwindcss())
  }

  if (enableTs) {
    const options = typeof enableTs == 'boolean' ? {} : enableTs
    configs.push(...typescript(options))
  }

  if (enableVue) {
    configs.push(...vue())
  }

  return configs.concat(extraConfigs)
}
