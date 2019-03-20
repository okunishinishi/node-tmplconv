/**
 * Test case for addExtname.
 * Runs with mocha.
 */
'use strict'

const addExtname = require('../lib/naming/add_extname.js')

const assert = require('assert')

describe('Add extname', function () {
  before(async () => {

  })

  after(async () => {

  })

  it('Add extname', async () => {
    assert.equal(addExtname('foo/bar/baz.txt', '.tmpl'), 'foo/bar/baz.txt.tmpl')
    assert.equal(addExtname('foo/bar/baz.txt.tmpl', '.tmpl'), 'foo/bar/baz.txt.tmpl')
  })
})

/* global describe, before, after, it */
