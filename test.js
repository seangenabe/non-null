const { ok, throws } = require('assert')
const nn = require('./')

ok(nn(5))
throws(nn(null))
throws(nn(undefined))
