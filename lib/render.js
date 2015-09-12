/**
 * Render template.
 * @memberof module:tmplconv/lib
 * @function render
 * @param {string} srcDir - Source directory name.
 * @param {string} destDir - Destination directory name.
 * @param {object} options - Optional settings.
 * @param {string|object} options.data - Data for tmpls.
 * @param {string|string[]} options.pattern - Source patterns.
 * @param {string} [options.prefix='_____'] - Embed prefix.
 * @param {string} [options.suffix='_____'] - Embed suffix.
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    path = require('path'),
    convertDir = require('./converting/convert_dir'),
    _rule = require('./_rule'),
    _logResults = require('./_log_results'),
    async = require('async');

/** @lends render */
function render(srcDir, destDir, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    var pattern = options.pattern || '**/*.*';
    var rule = _rule(options.data, options.prefix, options.suffix);
    convertDir(srcDir, destDir, pattern, rule, function (err, results) {
        if (!err) {
            _logResults(results);
        }
        callback(err);
    });
}

module.exports = render;