/**
 * Test case for removeExtname.
 * Runs with mocha.
 */
'use strict'

const removeExtname = require('../shim/node/naming/remove_extname.js')

const assert = require('assert')

it('Remove extname', async () => {
  assert.equal(removeExtname('foo/bar/baz.txt.tmpl', '.tmpl'), 'foo/bar/baz.txt')
  assert.equal(removeExtname('foo/bar/baz.txt', '.tmpl'), 'foo/bar/baz.txt')
})

/* global describe, before, after, it */
