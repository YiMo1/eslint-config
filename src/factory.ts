import { antfu, isPackageInScope, resolveSubOptions } from '@antfu/eslint-config'
import { tailwindcss } from './configs/tailwindcss.ts'

export function yimo(...args: Parameters<typeof antfu>): ReturnType<typeof antfu> {
  let [options = {}, ...userConfigs] = args
  const { tailwindcss: enableTailwindcss = isPackageInScope('tailwindcss') } = options

  if (enableTailwindcss) {
    userConfigs = [tailwindcss(resolveSubOptions(options, 'tailwindcss')), ...userConfigs]
  }

  options = {
    formatters: true,
    ...options,
  }

  return antfu(options, ...userConfigs)
}
