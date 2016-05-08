/**
 * Test case for tmplify.
 * Runs with mocha.
 */
'use strict'

const tmplify = require('../lib/tmplify.js'),
  mkdirp = require('mkdirp')

const tmpDir = __dirname + '/../tmp';
const co = require('co')
const assert = require('assert')
before(() => co(function * () {
  mkdirp.sync(tmpDir)
}))

it('Tmplify', () => co(function * () {
  let srcDir = __dirname + '/../doc/mocks/mock-app';
  let destDir = tmpDir + '/testing-tmpl/mock-app-tmpl';
  yield tmplify(srcDir, destDir, {
    data: {
      "name": "my-awesome-app",
      "description": "This is an example for the app templates."
    }
  })
}))

