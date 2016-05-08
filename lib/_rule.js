/**
 * @function _rule
 * @private
 */

'use strict'

const findout = require('findout')
const stringcase = require('stringcase');

const variations = [
  'camelcase', 'pascalcase', 'spinalcase', 'snakecase', 'uppercase', 'lowercase', 'enumcase'
];

/** @lends _rule */
function _rule (data, prefix, suffix) {
  if (typeof(data) == 'string') {
    data = findout(data) || data;
  }
  data = data || {}
  prefix = prefix || '_____'
  suffix = suffix || '_____'
  function _fix (key) {
    return [ prefix, key, suffix ].join('')
  }

  let rule = {}
  Object.keys(data).forEach((key) => {
    let val = data[ key ]
    rule[ _fix(key) ] = val
    variations.forEach(function (variation) {
      rule[ _fix([ key, variation ].join('@')) ] = stringcase[ variation ](val)
    })
  })
  return rule
}

_rule.reversed = function _reversedRule (data, prefix, suffix) {
  let rule = _rule(data, prefix, suffix)
  let reversed = {}
  Object.keys(rule).forEach((key) => {
    let val = rule[ key ]
    reversed[ val ] = reversed[ val ] || key
  })
  return reversed
}

module.exports = _rule