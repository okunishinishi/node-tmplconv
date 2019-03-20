/**
 * Two way template converter.
 * @module tmplconv
 */

'use strict'


const render = require('./render')
const tmplify = require('./tmplify')
const transplant = require('./transplant')

exports.render = render
exports.tmplify = tmplify
exports.transplant = transplant

module.exports = {
  render,
  tmplify,
  transplant
}
