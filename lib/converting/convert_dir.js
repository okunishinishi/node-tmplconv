/**
 * Convert files in a directory.
 * @memberof module:tmplconv/lib/converting
 * @function convertDir
 * @param {string} srcDir - Source directory path.
 * @param {string} destDir - Destination directory path.
 * @param {string} pattern - Filename pattern.
 * @param {object} rule - Convert map.
 * @param {function} callback - Callback when done.
 *
 */
"use strict";

var async = require('async'),
    path = require('path'),
    expandglob = require('expandglob'),
    convertString = require('./convert_string'),
    convertFile = require('./convert_file');

/** @lends convertDir */
function convertDir(srcDir, destDir, pattern, rule, callback) {
    async.waterfall([
        function (callback) {
            expandglob(pattern, {cwd: srcDir}, callback);
        },
        function (filenames, callback) {
            async.mapSeries(filenames, function (filename, callback) {
                var src = path.resolve(srcDir, filename),
                    dest = path.resolve(destDir, convertString(filename, rule));
                convertFile(src, dest, rule, callback);
            }, callback);
        }
    ], callback);
}

module.exports = convertDir;
