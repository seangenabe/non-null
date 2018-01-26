const assert = require('assert')

function nn(arg, message) {
  assert(arg != null, message || `arg must neither be null nor undefined.`)
  return arg
}

module.exports = nn
module.exports.default = nn
