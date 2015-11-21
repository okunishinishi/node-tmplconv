/**
 * Convert files in a directory.
 * @memberof module:tmplconv/lib/converting
 * @function convertDir
 * @param {string} src - Source directory path.
 * @param {string} dest - Destination directory path.
 * @param {object} [options] - Optional settings.
 * @param {string|string[]} [options.pattern] - Filename pattern.
 * @param {string|string[]} [options.ignore] - Filename pattern.
 * @param {string} [options.mode='644'] - File permission to generate.
 * @param {boolean} [options.once=false] - Write only first time. Skip if already exists.
 * @param {object} [options.rule] - Convert map.
 * @param {function} callback - Callback when done.
 */

"use strict";

const async = require('async'),
    argx = require('argx'),
    fs = require('fs'),
    path = require('path'),
    expandglob = require('expandglob'),
    convertDir = require('./convert_dir'),
    convertFile = require('./convert_file');

/** @lends convert */
function convert(src, dest, options, callback) {
    fs.exists(src, (exists) => {
        if (!exists) {
            callback(new Error('src not exists: ' + src));
            return;
        }
        async.waterfall([
            (callback) => {
                fs.stat(src, callback);
            },
            (stats, callback) => {
                let isDir = stats.isDirectory();
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
