/**
 * Convert files in a directory.
 * @memberof module:tmplconv/lib/converting
 * @function convertDir
 * @param {string} src - Source directory path.
 * @param {string} dest - Destination directory path.
 * @param {object} [options] - Optional settings.
 * @param {string|string[]} [options.pattern] - Filename pattern.
 * @param {string|string[]} [options.ignore] - Filename pattern.
 * @param {object} [options.rule] - Convert map.
 * @param {function} callback - Callback when done.
 */

"use strict";

var async = require('async'),
    argx = require('argx'),
    fs = require('fs'),
    path = require('path'),
    expandglob = require('expandglob'),
    convertDir = require('./convert_dir'),
    convertFile = require('./convert_file');

/** @lends convert */
function convert(src, dest, options, callback) {
    fs.exists(src, function (exists) {
        if (!exists) {
            callback(new Error('src not exists: ' + src));
            return;
        }
        async.waterfall([
            function (callback) {
                fs.stat(src, callback);
            },
            function (stats, callback) {
                var isDir = stats.isDirectory();
                if (isDir) {
                    convertDir(src, dest, options, callback);
                } else {
                    convertFile(src, dest, options, callback);
                }
            }
        ], callback);
    });
}

module.exports = convert;
