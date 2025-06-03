import type { OptionsOverrides } from '@antfu/eslint-config'
import type { Linter } from 'eslint'

declare module '@antfu/eslint-config' {
  interface Rules {
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/classnames-order.md
     */
    'tailwindcss/classnames-order': Linter.RuleEntry
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-negative-arbitrary-values.md
     */
    'tailwindcss/enforces-negative-arbitrary-values': Linter.RuleEntry
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/enforces-shorthand.md
     */
    'tailwindcss/enforces-shorthand': Linter.RuleEntry
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/migration-from-tailwind-2.md
     */
    'tailwindcss/migration-from-tailwind-2': Linter.RuleEntry
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-arbitrary-value.md
     */
    'tailwindcss/no-arbitrary-value': Linter.RuleEntry
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-custom-classname.md
     */
    'tailwindcss/no-custom-classname': Linter.RuleEntry
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-contradicting-classname.md
     */
    'tailwindcss/no-contradicting-classname': Linter.RuleEntry
    /**
     * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/master/docs/rules/no-unnecessary-arbitrary-value.md
     */
    'tailwindcss/no-unnecessary-arbitrary-value': Linter.RuleEntry
  }

  interface OptionsConfig {
    /**
     * Enable tailwindcss support.
     *
     * @default auto-detect based on the dependencies
     */
    tailwindcss?: boolean | OptionsOverrides
  }
}
