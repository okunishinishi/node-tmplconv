/**
 * Convert a file.
 * @memberof module:tmplconv/lib/converting
 * @function convertFile
 * @param {string} src - Source file path.
 * @param {string} dest - Destination file path.
 * @param {object} rule - Convert map.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

var async = require('async'),
    writeout = require('writeout'),
    fs = require('fs'),
    convertString = require('./convert_string');

/** @lends convertFile */
function convertFile(src, dest, rule, callback) {
    async.waterfall([
        function (callback) {
            fs.readFile(src, callback);
        },
        function (content) {
            content = convertString(String(content), rule);
            writeout(dest, content, {
                mkdirp: true
            }, callback);
        }
    ], callback);
}

module.exports = convertFile;
