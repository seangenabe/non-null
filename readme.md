## nn

TypeScript helper. Assert if a value is neither null nor undefined.

## Usage

```typescript
import nn from '@seangenabe/nn'
```

```typescript
export default function <T = any>(arg?: T): T
```

Assert if a value is neither null nor undefined using the `assert` module. Returns the value.

Note that the type return value is coerced to be non-null.

## Tip

To remove `assert` calls, use a tool such as [unassert](https://github.com/unassert-js/unassert).
