/**
 * Test case for convertFile.
 * Runs with mocha.
 */
'use strict'

const convertFile = require('../lib/converting/convert_file.js')
const mkdirp = require('mkdirp')

const assert = require('assert')

const tmpDir = __dirname + '/../tmp'

before(async () => {
  mkdirp.sync(tmpDir)
})

after(async () => {

})

it('Convert file', async () => {
  let src = String(__filename)
  let dest = tmpDir + '/foo/bar/testing-converted.txt'
  await convertFile(src, dest, {})
})

/* global describe, before, after, it */
