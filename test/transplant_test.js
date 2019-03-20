/**
 * Test case for transplant.
 * Runs with mocha.
 */
'use strict'
const transplant = require('../lib/transplant.js')
const mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp'

const fs = require('fs')
const assert = require('assert')
before(async () => {
  mkdirp.sync(tmpDir)
})

it('Transplant', async () => {
  let srcDir = __dirname + '/../doc/mocks/mock-app'
  let destDir = tmpDir + '/testing-transplanted/mock-app-transplanted'
  await transplant(srcDir, destDir, {
    rule: {
      "my-awesome-app": "hey-yo",
      "This is an example for the app templates.": "This transplanted template"
    }
  })
  let data = JSON.parse(fs.readFileSync(
    `${tmpDir}/testing-transplanted/mock-app-transplanted/package.json`
  ).toString())
  assert.deepEqual(data, {
    "name": "hey-yo",
    "version": "1.0.0",
    "description": "This transplanted template"
  })
})

/* global describe, before, after, it */
