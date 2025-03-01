import { configs } from 'eslint-plugin-vue'
import { parser } from 'typescript-eslint'

import { GLOB_VUE } from '../globs.ts'

import type { Linter } from 'eslint'

export function vue(): Linter.Config[] {
  return [
    ...configs['flat/recommended'],
    {
      files: [GLOB_VUE],
    },
    // ...(version === 2
    //  ? plugin.configs['flat/vue2-recommended']
    //  : plugin.configs['flat/recommended']),
    // {
    //  files: [GLOB_VUE],
    //  languageOptions: { parserOptions: { parser } },
    //  rules: {
    //    // 'no-undef': 'off', // ts(2304)
    //    'vue/component-name-in-template-casing': [
    //      'error',
    //      'kebab-case',
    //      { registeredComponentsOnly: false },
    //    ],
    //    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    //    'vue/html-self-closing': [
    //      'error',
    //      {
    //        html: {
    //          void: 'always',
    //          normal: 'always',
    //          component: 'always',
    //        },
    //        svg: 'always',
    //        math: 'always',
    //      },
    //    ],
    //    'vue/no-multiple-objects-in-class': 'error',
    //    'vue/no-potential-component-option-typo': 'error',
    //    'vue/prefer-prop-type-boolean-first': 'error',
    //    'vue/prefer-define-options': 'error',
    //    'vue/prefer-true-attribute-shorthand': 'error',
    //    'vue/multi-word-component-names': 'off',
    //    'vue/block-order': [
    //      'error',
    //      {
    //        order:
    //          version === 2 ? ['template', 'script', 'style'] : ['script', 'template', 'style'],
    //      },
    //    ],
    //  },
    // },
  ]
}
