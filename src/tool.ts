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
