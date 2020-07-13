const assert = require('assert')

const capitalizeFirst = (input) => {
  return input.length > 0
    ? input[0].toUpperCase() + input.slice(1)
    : '';
}

capitalizeFirst('javaScript')

assert.strictEqual(typeof capitalizeFirst, 'function')
assert.strictEqual(capitalizeFirst.length, 1)
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript')
assert.strictEqual(capitalizeFirst('z'), 'Z')
assert.strictEqual(capitalizeFirst(''), '')
