import { describe, expect, test } from 'vitest'
import { ESLint } from 'eslint'

import { javascript } from '../src/configs/javascirpt.ts'

const eslint = new ESLint({ fix: true, overrideConfigFile: true, baseConfig: javascript() })

describe('prefer const', () => {
  const cases = [
    { code: 'var a = 1', expected: 'const a = 1' },
    { code: 'let a = 1', expected: 'const a = 1' },
  ]

  test.for(cases)('case index: %#', async ({ code, expected }) => {
    const [result] = await eslint.lintText(code)
    expect(result.output).toBe(expected)
  })
})
