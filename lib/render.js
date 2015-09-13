/**
 * Render template.
 * @memberof module:tmplconv/lib
 * @function render
 * @param {string} srcDir - Name of source directory, which contains template files.
 * @param {string} destDir - Name of destination directory.
 * @param {object} options - Optional settings.
 * @param {string|object} options.data - Data for tmpls.
 * @param {string|string[]} options.pattern - Source patterns.
 * @param {string} [options.prefix='_____'] - Embed prefix.
 * @param {string} [options.suffix='_____'] - Embed suffix.
 * @param {string} [options.extname='.tmpl'] - Template extension name.
 * @param {boolean} [options.silent=false] - Silent or not.
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    path = require('path'),
    convert = require('./converting/convert'),
    _rule = require('./_rule'),
    removeExtname = require('./naming/remove_extname'),
    _logResults = require('./_log_results'),
    async = require('async');

/** @lends render */
function render(srcDir, destDir, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    convert(srcDir, destDir, {
        pattern: options.pattern || '**/*.*',
        rule: _rule(options.data, options.prefix, options.suffix),
        ignore: options.ignore,
        out: function (src) {
            return removeExtname(src, options.extname || '.tmpl');
        }
    }, function (err, results) {
        var shouldLog = !err && !options.silent;
        if (shouldLog) {
            _logResults(results);
        }
        callback(err);
    });
}

module.exports = render;