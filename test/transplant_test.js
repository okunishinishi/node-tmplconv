/**
 * Test case for transplant.
 * Runs with mocha.
 */
'use strict'
const transplant = require('../lib/transplant.js'),
  mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp';
const co = require('co')
const assert = require('assert')
before(() => co(function * () {
  mkdirp.sync(tmpDir)
}))

it('Transplant', () => co(function * () {
  let srcDir = __dirname + '/../doc/mocks/mock-app',
    destDir = tmpDir + '/testing-transplanted/mock-app-transplanted';
  yield transplant(srcDir, destDir, {
    rule: {
      "my-awesome-app": "hey-yo",
      "This is an example for the app templates.": "This transplanted template"
    }
  })
}))


