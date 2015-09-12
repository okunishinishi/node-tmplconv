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
        if (!result.skipped) {
            colorprint.debug('File generated: ' + result.filename);
        }
    });
}

module.exports = _logResults;
