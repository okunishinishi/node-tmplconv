/**
 * Log results.
 * @function _logResults
 * @private
 */

"use strict";

var colorprint = require('colorprint');

/** @lends _logResults */
function _logResults(results) {
    results.forEach(function (result) {
        var hasResult = result && !result.skipped;
        if (hasResult) {
            colorprint.debug('File generated: ' + result.filename);
        }
    });
}

module.exports = _logResults;
