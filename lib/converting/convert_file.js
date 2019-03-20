/**
 * Convert a file.
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

const argx = require('argx')
const writeout = require('writeout')
const { existsAsync, readFileAsync } = require('asfs')
const convertString = require('./convert_string')

/** @lends convertFile */
async function convertFile(src, dest, options) {
  let args = argx(arguments)
  options = args.pop('object')
  src = args.shift('string')
  dest = args.shift('string')

  let rule = options.rule || {}
  let mode = options.mode || '644'
  let once = !!options.once

  let exists = await existsAsync(dest)
  let skip = exists && once
  if (skip) {
    return
  }
  let content = await readFileAsync(src)
  content = convertString(String(content), rule)
  return await writeout(dest, content, {
    mkdirp: true,
    force: true,
    mode
  })
}

module.exports = convertFile
