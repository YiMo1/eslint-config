export function renameRules(rules: Record<string, unknown>, map: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value]
      }
      return [key, value]
    }),
  )
}

function isObject(val: unknown) {
  return typeof val == 'object' && val != null
}

export function overrides<T extends object>(target: T, source: T): T {
  for (const key of Object.keys(source)) {
    const targetVal = target[key as keyof T]
    const sourceVal = source[key as keyof T]
    if (isObject(targetVal) && isObject(sourceVal)) {
      overrides(targetVal, sourceVal)
    } else {
      target[key as keyof T] = sourceVal
    }
  }
  return target
}
