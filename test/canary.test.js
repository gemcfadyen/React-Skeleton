import assert from 'assert'
import chai from 'chai'
var expect = chai.expect

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4))
    })

    it('should be an array', function() {
      expect([1, 2, 3]).to.be.a('array')
    })
  })
})
