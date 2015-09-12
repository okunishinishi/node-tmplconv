/**
 * Convert string.
 * @memberof module:tmplconv/lib/converting
 * @function convertString
 * @param {string} source - Source string to convert.
 * @param {object} rule - Convert map.
 * @returns {string} - Converted string.
 */

"use strict";


/** @lends convertString */
function convertString(source, rule) {
    var result = String(source);
    Object.keys(rule).forEach(function (key) {
        var regExp = new RegExp(key, 'g');
        [].concat(rule[key]).map(function (replacing) {
            result = result.replace(regExp, replacing);
        });
    });
    return result;
}

module.exports = convertString;
