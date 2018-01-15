const assert = require('assert')

function nn(arg) {
  assert(arg != null, `arg must neither be null nor undefined.`)
  return arg
}

module.exports = nn
module.exports.default = nn
