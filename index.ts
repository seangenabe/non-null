import { ok } from 'assert'

export default function nonNull<T = any>(arg?: T | null, message?: string): T {
  ok(arg != null, message || `arg must neither be null nor undefined.`)
  return arg
}

export { nonNull as nn }
