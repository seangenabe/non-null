## non-null

TypeScript helper. Assert if a value is neither null nor undefined.

## Usage

```typescript
import nonNull from 'non-null'
```

```typescript
function nonNull<T = any>(arg?: T | null, message?: string): T

export default nonNull
export = nonNull
export { nonNull as nn }
```

Assert if a value is neither null nor undefined using the `assert` module. Returns the value.

Note that the type return value is coerced to be non-null.

## Tip

To remove `assert` calls, use a tool such as [unassert](https://github.com/unassert-js/unassert).
