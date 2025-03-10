import type { Linter } from 'eslint'

export function renameRules<T>(
  rules: Record<string, T>,
  map: Record<string, string>,
) {
  return Object.fromEntries(Object.entries(rules).
    map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value]
      }
      return [key, value]
    }))
}

export type ExtendRulesRecord = Record<string,
  | Linter.RuleEntry
  | { source: string; ruleEntry: Linter.RuleEntry }
>
export function closeBaseRules(rules: ExtendRulesRecord) {
  const newRules: Linter.RulesRecord = {}
  for (const [key, value] of Object.entries(rules)) {
    const isRuleEntry = typeof value === 'object' && !Array.isArray(value)
    const source = isRuleEntry ? value.source : key.split('/')[1]
    newRules[source] = 'off'
    newRules[key] = isRuleEntry ? value.ruleEntry : value
  }
  return newRules
}
