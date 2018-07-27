const {add, mul} = require('../src/math')
const {should, expect, assert} = require('chai')

// if (add(2, 3) === 5) {
//   console.log('add(2, 3) === 5');
// } else {
//   console.error('add(2, 3) !== 5')
// }

// assert.strictEqual(add(2, 3), 5)

should();

// add(2, 3).should.equal(5)

expect(add(2, 3)).to.be(5)
