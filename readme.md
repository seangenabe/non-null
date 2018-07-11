## non-null

TypeScript helper. Assert if a value is neither null nor undefined.

## Declaration

```typescript
export default function nonNull<T = any>(arg?: T | null, message?: string): T
export { nonNull as nn }
```

## Usage

```typescript
import nonNull from 'non-null'

nonNull(1) // = 1
nonNull(null) // throws an error
nonNull(undefined) // throws an error
```

Assert if a value is neither null nor undefined using the `assert` module. Returns the value.

Note that the type return value is coerced to be non-null.

## Tip

To remove `assert` calls, use a tool such as [unassert](https://github.com/unassert-js/unassert).
