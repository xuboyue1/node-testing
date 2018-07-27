const {add, mul, cover} = require('../src/math')
const {should, expect, assert} = require('chai')

// 不需要依赖，自动注入
describe('#math', () => {
  describe('add', () => {
    it('应该返回5', () => {
      console.log(add(2, 3))
      expect(add(2, 3)).to.equal(5)
    })
    it('应该返回-1', () => {
      expect(add(2, -3)).to.equal(-1)
    })
  })
  describe('mul', () => {
    it('应该返回6', () => {
      expect(mul(2, 3)).to.equal(6)
    })
    it('应该返回-6', () => {
      expect(mul(-2, 3)).to.equal(-6)
    })
  }),
  describe('cover', () => {
    it('返回1', () => {
      expect(cover(2, 1)).to.equal(1)
    })
    it('返回-1', () => {
      expect(cover(1, 2)).to.equal(-1)
    })
    it('返回3', () => {
      expect(cover(2, 2)).to.equal(4)
    })
  })
})