import { ok, throws } from 'assert'
import nn, { nn as nn2 } from './'

try {
  ok(nn === nn2)

  ok(nn(5))

  throws(() => nn(null))

  throws(() => nn(undefined))
} catch (err) {
  console.error(err.stack)
  process.exit(1)
}
