/**
 * Test case for render.
 * Runs with mocha.
 */
'use strict'

const render = require('../shim/node/render.js')
const mkdirp = require('mkdirp')

const assert = require('assert')
const tmpDir = `${__dirname}/../tmp`

describe('render', () => {
  before(async () => {
    mkdirp.sync(tmpDir)
  })

  it('Render', async () => {
    let srcDir = `${__dirname}/../doc/mocks/mock-app-tmpl`
    let destDir = tmpDir + '/testing-render/mock-app-generated'
    await render(srcDir, destDir, {
      data: {
        'name': 'my-awesome-app',
        'description': 'This is an example for the app templates.'
      }
    })
  })
})

/* global describe, before, after, it */
