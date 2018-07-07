const assert = require('assert')

function nonNull(arg, message) {
  assert(arg != null, message || `arg must neither be null nor undefined.`)
  return arg
}

module.exports = nonNull
module.exports.default = nonNull
module.exports.nn = nonNull
