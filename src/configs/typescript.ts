import { join } from 'node:path'
import { existsSync } from 'node:fs'

import { configs, parser, plugin } from 'typescript-eslint'

import { GLOB_TS, GLOB_TSX, GLOB_VUE } from '../globs.ts'
import { closeBaseRules, renameRules } from '../tool.ts'

import type { ESLint, Linter } from 'eslint'

export function typescript(): Linter.Config[] {
  const enableType = existsSync(join(process.cwd(), 'tsconfig.json'))

  return [
    { plugins: { ts: plugin as ESLint.Plugin } },
    {
      files: [GLOB_TS, GLOB_TSX, GLOB_VUE],
      languageOptions: {
        sourceType: 'module',
        parser: parser as Linter.Parser,
        parserOptions: {
          projectService: enableType,
          tsconfigRootDir: process.cwd(),
          ecmaFeatures: { jsx: true },
          extraFileExtensions: ['.vue'],
        },
      },
      rules: {
        ...configs.eslintRecommended.rules,
        'no-use-before-define': 'off', // ts(2448) & ts(2449) & ts(2450) & ts(2454)
        'import-x/named': 'off', // ts(2305)

        ...closeBaseRules({
          'ts/default-param-last': 'error',
          'ts/dot-notation': 'error',
          'ts/no-array-constructor': 'error',
          'ts/no-restricted-imports': 'error',
          'ts/no-unused-expressions': [
            'error',
            {
              allowShortCircuit: true,
              allowTernary: true,
              allowTaggedTemplates: true,
              enforceForJSX: true,
            },
          ],
          'ts/no-unused-vars': [
            'error',
            {
              args: 'all',
              ignoreRestSiblings: true,
              argsIgnorePattern: '^_+$',
              reportUsedIgnorePattern: true,
              destructuredArrayIgnorePattern: '^_+$',
              varsIgnorePattern: '^_+$',
            },
          ],
          'ts/no-useless-constructor': 'error',
          'ts/only-throw-error': { source: 'no-throw-literal', ruleEntry: 'error' },
          'ts/prefer-promise-reject-errors': 'error',
          'ts/require-await': 'error',
          'ts/return-await': { source: 'no-return-await', ruleEntry: 'error' },
        }),
        'ts/adjacent-overload-signatures': 'error',
        'ts/array-type': 'error',
        'ts/await-thenable': 'error',
        'ts/ban-ts-comment': 'error',
        'ts/ban-tslint-comment': 'error',
        'ts/class-literal-property-style': 'error',
        'ts/consistent-generic-constructors': 'error',
        'ts/consistent-indexed-object-style': 'error',
        'ts/consistent-type-assertions': 'error',
        'ts/consistent-type-definitions': ['error', 'type'],
        'ts/consistent-type-exports': 'error',
        'ts/consistent-type-imports': 'error',
        'ts/method-signature-style': 'error',
        'ts/no-array-delete': 'error',
        'ts/no-base-to-string': 'error',
        'ts/no-confusing-non-null-assertion': 'error',
        'ts/no-confusing-void-expression': 'error',
        'ts/no-deprecated': 'error',
        'ts/no-duplicate-enum-values': 'error',
        'ts/no-duplicate-type-constituents': 'error',
        'ts/no-dynamic-delete': 'error',
        'ts/no-empty-object-type': 'error',
        'ts/no-extra-non-null-assertion': 'error',
        'ts/no-extraneous-class': 'error',
        'ts/no-for-in-array': 'error',
        'ts/no-import-type-side-effects': 'error',
        'ts/no-inferrable-types': 'error',
        'ts/no-meaningless-void-operator': 'error',
        'ts/no-misused-new': 'error',
        'ts/no-misused-promises': 'error',
        'ts/no-misused-spread': 'error',
        'ts/no-mixed-enums': 'error',
        'ts/no-non-null-asserted-nullish-coalescing': 'error',
        'ts/no-non-null-asserted-optional-chain': 'error',
        'ts/no-redeclare': 'error',
        'ts/no-redundant-type-constituents': 'error',
        'ts/no-require-imports': 'error',
        'ts/no-restricted-types': 'error',
        'ts/no-this-alias': 'error',
        'ts/no-unnecessary-boolean-literal-compare': 'error',
        'ts/no-unnecessary-condition': 'error',
        'ts/no-unnecessary-parameter-property-assignment': 'error',
        'ts/no-unnecessary-qualifier': 'error',
        'ts/no-unnecessary-template-expression': 'error',
        'ts/no-unnecessary-type-arguments': 'error',
        'ts/no-unnecessary-type-assertion': 'error',
        'ts/no-unnecessary-type-constraint': 'error',
        'ts/no-unnecessary-type-parameters': 'error',
        'ts/no-unsafe-argument': 'error',
        'ts/no-unsafe-assignment': 'error',
        'ts/no-unsafe-call': 'error',
        'ts/no-unsafe-declaration-merging': 'error',
        'ts/no-unsafe-member-access': 'error',
        'ts/no-unsafe-return': 'error',
        'ts/no-unsafe-unary-minus': 'error',
        'ts/no-useless-empty-export': 'error',
        'ts/no-wrapper-object-types': 'error',
        'ts/non-nullable-type-assertion-style': 'error',
        'ts/prefer-as-const': 'error',
        'ts/prefer-enum-initializers': 'error',
        'ts/prefer-find': 'error',
        'ts/prefer-for-of': 'error',
        'ts/prefer-function-type': 'error',
        'ts/prefer-includes': 'error',
        'ts/prefer-literal-enum-member': 'error',
        'ts/prefer-namespace-keyword': 'error',
        'ts/prefer-nullish-coalescing': 'error',
        'ts/prefer-optional-chain': 'error',
        'ts/prefer-readonly': 'error',
        'ts/prefer-reduce-type-parameter': 'error',
        'ts/prefer-regexp-exec': 'error',
        'ts/prefer-return-this-type': 'error',
        'ts/prefer-string-starts-ends-with': 'error',
        'ts/related-getter-setter-pairs': 'error',
        'ts/require-array-sort-compare': 'error',
        'ts/restrict-plus-operands': 'error',
        'ts/restrict-template-expressions': 'error',
        'ts/switch-exhaustiveness-check': 'error',
        'ts/triple-slash-reference': 'error',
        'ts/typedef': 'error',
        'ts/unified-signatures': 'error',
        'ts/use-unknown-in-catch-callback-variable': 'error',
        ...enableType
          ? {}
          : renameRules(configs.disableTypeChecked.rules!, { '@typescript-eslint': 'ts' }),
      },
    },
  ]
}
