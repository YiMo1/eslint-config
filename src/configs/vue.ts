import plugin from 'eslint-plugin-vue'
import { parser as tsParser } from 'typescript-eslint'

import { GLOB_VUE } from '../globs.ts'

import type { Linter } from 'eslint'

export function vue(): Linter.Config[] {
  return [
    ...plugin.configs['flat/recommended'],
    {
      files: [GLOB_VUE],
      languageOptions: { parserOptions: { parser: tsParser } },
      rules: {
        'no-undef': 'off', // ts(2304)
        'no-useless-assignment': 'off', // template中使用eslint无法检测
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': 'off',

        'vue/array-bracket-newline': 'error',
        'vue/array-bracket-spacing': 'error',
        'vue/array-element-newline': ['error', 'consistent'],
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': 'error',
        'vue/brace-style': 'error',
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': 'error',
        'vue/comma-style': 'error',
        'vue/dot-location': 'error',
        'vue/key-spacing': 'error',
        'vue/keyword-spacing': 'error',
        'vue/multiline-ternary': ['error', 'always-multiline'],
        'vue/object-curly-newline': [
          'error',
          {
            multiline: true,
            consistent: true,
          },
        ],
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/operator-linebreak': 'error',
        'vue/quote-props': ['error', 'as-needed'],
        'vue/space-in-parens': 'error',
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': 'error',
        'vue/template-curly-spacing': 'error',
        'vue/prefer-template': 'error',
        'vue/object-shorthand': [
          'error',
          'always',
          {
            avoidQuotes: true,
            ignoreConstructors: false,
            avoidExplicitReturnArrows: true,
          },
        ],
        'vue/no-empty-pattern': 'error',
        'vue/no-useless-concat': 'error',
        'vue/no-irregular-whitespace': 'error',
        'vue/no-constant-condition': 'error',
        'vue/dot-notation': 'error',
        'vue/no-sparse-arrays': 'error',
        'vue/no-loss-of-precision': 'error',
        'vue/eqeqeq': ['error', 'smart'],
        'vue/html-closing-bracket-newline': [
          'error',
          {
            singleline: 'never',
            multiline: 'always',
            selfClosingTag: {
              singleline: 'never',
              multiline: 'never',
            },
          },
        ],
        'vue/block-lang': ['error', { script: { lang: 'ts', allowNoLang: false } }],
        'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
        'vue/block-tag-newline': [
          'error',
          { singleline: 'always', multiline: 'always', maxEmptyLines: 0 },
        ],
        'vue/component-api-style': ['error', ['script-setup', 'composition']],
        'vue/component-name-in-template-casing': [
          'error',
          'kebab-case',
          { registeredComponentsOnly: false },
        ],
        'vue/component-options-name-casing': 'error',
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/define-emits-declaration': 'error',
        'vue/define-macros-order': [
          'error',
          {
            order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
            defineExposeLast: true,
          },
        ],
        'vue/define-props-declaration': 'error',
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': 'error',
        'vue/no-deprecated-delete-set': 'error',
        'vue/no-deprecated-model-definition': 'error',
        'vue/no-duplicate-attr-inheritance': 'error',
        'vue/no-empty-component-block': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-required-prop-with-default': 'error',
        'vue/v-for-delimiter-style': 'error',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'always',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
        'vue/no-potential-component-option-typo': 'error',
        'vue/prefer-prop-type-boolean-first': 'error',
        'vue/prefer-define-options': 'error',
        'vue/prefer-true-attribute-shorthand': 'error',
        'vue/padding-line-between-blocks': 'error',
      },
    },
  ]
}
