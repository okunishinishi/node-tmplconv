/**
 * Convert files in a directory.
 * @memberof module:tmplconv/lib/converting
 * @function convertDir
 * @param {string} srcDir - Source directory path.
 * @param {string} destDir - Destination directory path.
 * @param {object} [options] - Optional settings.
 * @param {string|string[]} [options.pattern] - Filename pattern.
 * @param {string|string[]} [options.ignore] - Filename pattern.
 * @param {object} [options.rule] - Convert map.
 * @param {string} [options.mode='644'] - File permission to generate.
 * @param {boolean} [options.clean=false] - Cleanup destination directory before convert.
 * @param {boolean} [options.once=false] - Write only first time. Skip if already exists.
 * @param {function} [options.out] - Convert output file name.
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const argx = require('argx')
const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const expandglob = require('expandglob')
const convertString = require('./convert_string')

/** @lends convertDir */
function convertDir (srcDir, destDir, options) {
  let args = argx(arguments)
  options = args.pop('object')

  let pattern = options.pattern || '**/*.*',
    ignore = options.ignore || [];

  let rule = options.rule || {}
  let out = options.out;
  let once = !!options.once;
  let clean = !!options.clean;

  return co(function * () {
    let exists = yield new Promise((resolve) =>
      fs.exists(srcDir, (exists) => resolve(exists))
    )
    if (!exists) {
      throw new Error(`srcDir not exists: ${srcDir}`)
    }
    if (clean) {
      yield new Promise((resolve, reject) =>
        rimraf(destDir, (err) => err ? reject(err) : resolve())
      )
    }
    let filenames = yield expandglob(pattern, {
      cwd: srcDir,
      ignore: ignore
    })
    let results = []
    for (let filename of filenames) {
      let src = path.resolve(srcDir, filename)
      let dest = path.resolve(destDir, convertString(filename, rule))
      if (out) {
        dest = out(dest)
      }
      let result = yield require('./convert')(src, dest, {
        rule: rule,
        once: once,
        mode: options.mode
      })
      results.push(result)
    }
    return results
  })
}

module.exports = convertDir
