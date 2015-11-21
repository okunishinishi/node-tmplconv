/**
 * Generate template from rendered.
 * @memberof module:tmplconv/lib
 * @function tmplify
 * @param {string} srcDir - Name of destination directory.
 * @param {string} destDir - Name of destination directory, which contains template files.
 * @param {object} options - Optional settings.
 * @param {string|object} options.data - Data for tmpls.
 * @param {string|string[]} options.pattern - Source patterns.
 * @param {string|string[]} [options.ignore] - Filename pattern.
 * @param {string} [options.prefix='_____'] - Embed prefix.
 * @param {string} [options.suffix='_____'] - Embed suffix.
 * @param {string} [options.extname='.tmpl'] - Template extension name.
 * @param {boolean} [options.silent=false] - Silent or not.
 * @param {string} [options.mode='644'] - File permission to generate.
 * @param {boolean} [options.clean=false] - Cleanup destination directory before convert.
 * @param {boolean} [options.once=false] - Write only first time. Skip if already exists.
 * @param {function} callback - Callback when done.
 */

"use strict";

const argx = require('argx'),
    path = require('path'),
    convert = require('./converting/convert'),
    addExtname = require('./naming/add_extname'),
    _rule = require('./_rule'),
    _logResults = require('./_log_results'),
    async = require('async');

/** @lends tmplify */
function tmplify(srcDir, destDir, options, callback) {
    let args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    convert(srcDir, destDir, {
        pattern: options.pattern || '**/*.*',
        rule: _rule.reversed(options.data, options.prefix, options.suffix),
        ignore: options.ignore,
        mode:options.mode,
        clean: options.clean,
        once: options.once,
        out: function (src) {
            return addExtname(src, options.extname || '.tmpl');
        }
    }, (err, results) => {
        let shouldLog = !err && !options.silent;
        if (shouldLog) {
            _logResults(results);
        }
        callback(err);
    });
}

module.exports = tmplify;
