/**
 * Convert a file.
 * @memberof module:tmplconv/lib/converting
 * @function convertFile
 * @param {string} src - Source file path.
 * @param {string} dest - Destination file path.
 * @param {object} [options] - Optional settings.
 * @param {object} [options.rule={}] - Convert map.
 * @param {string} [options.mode='644'] - File mode to generate.
 * @param {boolean} [options.once=false] - Write only first time. Skip if already exists.
 * @returns {Promise}
 *
 */

'use strict'

const co = require('co')
const argx = require('argx')
const writeout = require('writeout')
const fs = require('fs')
const convertString = require('./convert_string')

/** @lends convertFile */
function convertFile (src, dest, options) {
  let args = argx(arguments)
  options = args.pop('object')
  src = args.shift('string')
  dest = args.shift('string')

  let rule = options.rule || {};
  let mode = options.mode || '644';
  let once = !!options.once;

  return co(function * () {
    let exists = yield new Promise((resolve) =>
      fs.exists(dest, (exists) => resolve(exists))
    )
    let skip = exists && once
    if (skip) {
      return
    }
    let content = yield new Promise((resolve, reject) =>
      fs.readFile(src, (err, content) => err ? reject(err) : resolve())
    )
    content = convertString(String(content), rule)
    yield writeout(dest, content, {
      mkdirp: true,
      mode: mode
    })
  })
}

module.exports = convertFile
