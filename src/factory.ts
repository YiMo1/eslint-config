import { isPackageExists } from 'local-pkg'

import {
  type ImportsOptions,
  type JavascriptOptions,
  type StylisticOptions,
  type TailwindcssOptions,
  type TypescriptOptions,
  type VueOptions,
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
  tailwindcss?: boolean | TailwindcssOptions
  ts?: boolean | TypescriptOptions
  vue?: boolean | VueOptions
  stylistic?: StylisticOptions
  js?: JavascriptOptions
  imports?: ImportsOptions
}

export function yimo(options: YimoOptions = {}, ...extraConfigs: Linter.Config[]) {
  const {
    ignores: userIgnores,
    tailwindcss: enableTailwindcss = isPackageExists('tailwindcss'),
    ts: enableTs = isPackageExists('typescript'),
    vue: enableVue = isPackageExists('vue'),
    stylistic: stylisticOptions = {},
    js: jsOptions = {},
    imports: importsOptions = {},
  } = options

  const configs: Linter.Config[] = [
    ignores(userIgnores),
    imports(importsOptions),
    ...javascript(jsOptions),
    stylistic(stylisticOptions),
  ]

  if (enableTailwindcss) {
    const options = typeof enableTailwindcss == 'boolean' ? {} : enableTailwindcss
    configs.push(tailwindcss(options))
  }

  if (enableTs) {
    const options = typeof enableTs == 'boolean' ? {} : enableTs
    configs.push(...typescript(options))
  }

  if (enableVue) {
    const options = typeof enableVue == 'boolean' ? {} : enableVue
    configs.push(...vue(options))
  }

  return configs.concat(extraConfigs)
}
