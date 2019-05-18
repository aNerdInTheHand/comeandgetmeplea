const sinon = require('sinon')
const { assert } = require('chai')
const index = require('../src/index')

describe('index.handler', () => {
  it('should call the callback', async () => {
    const callbackSpy = sinon.spy()
    index.handler(null, null, callbackSpy)

    sinon.assert.calledOnce(callbackSpy)
    assert.equal(callbackSpy.args[0][1].statusCode, 200)
  })
})
