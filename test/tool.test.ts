import { expect, test } from 'vitest'

import { closeBaseRules, renameRules } from '../src/tool.ts'

import type { Linter } from 'eslint'

test('closeBaseRules', () => {
  const rules: Linter.RulesRecord = { 'plugin/name': 'error' }
  expect(closeBaseRules(rules)).toEqual({ name: 'off', ...rules })
})

test('renameRules', () => {
  const rules: Linter.RulesRecord = { 'plugin/name': 'error' }
  expect(renameRules(rules, { plugin: 'new-plugin' })).toEqual({ 'new-plugin/name': 'error' })
})
