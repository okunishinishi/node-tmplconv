/**
 * Test case for convertString.
 * Runs with mocha.
 */
'use strict'

const convertString = require('../lib/converting/convert_string.js')

const assert = require('assert')
before(async () => {

})

after(async () => {

})

it('Convert string', async () => {
  let converted = convertString('foo bar baz bar', {
    bar: 'quz'
  })
  assert.equal(converted, 'foo quz baz quz')
})

/* global describe, before, after, it */
