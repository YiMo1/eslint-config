import { ignores, imports, tailwindcss, javascript } from './configs/index.ts'
import type { Linter } from 'eslint'
import { isPackageExists } from 'local-pkg'

export type YimoOptions = {
  ignores?: string[]
  tailwindcss?: boolean
}

export function yimo(options: YimoOptions = {}, ...extraConfigs: Linter.Config[]) {
  const { ignores: userIgnores, tailwindcss: enableTailwindcss = isPackageExists('tailwindcss') } =
    options

  const configs: Linter.Config[] = [ignores(userIgnores), imports(), ...javascript()]

  if (enableTailwindcss) {
    configs.push(tailwindcss())
  }

  return configs.concat(extraConfigs)
}
