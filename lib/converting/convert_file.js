/**
 * Convert a file.
 * @memberof module:tmplconv/lib/converting
 * @function convertFile
 * @param {string} src - Source file path.
 * @param {string} dest - Destination file path.
 * @param {object} [options] - Optional settings.
 * @param {object} [options.rule={}] - Convert map.
 * @param {string} [options.mode='644'] - File mode to generate.
 * @param {boolean} [options.once=false] - Write only first time. Skip if already exists.
 * @param {function} callback - Callback when done.
 *
 */

"use strict";

const async = require('async'),
    argx = require('argx'),
    writeout = require('writeout'),
    fs = require('fs'),
    convertString = require('./convert_string');

/** @lends convertFile */
function convertFile(src, dest, options, callback) {
    let args = argx(arguments);
    callback = args.pop('function');
    options = args.pop('object');
    src = args.shift('string');
    dest = args.shift('string');

    let rule = options.rule || {},
        mode = options.mode || '644',
        once = !!options.once;

    fs.exists(dest, (exists) => {
        let skip = exists && once;
        if (skip) {
            callback(null);
            return;
        }

        async.waterfall([
            (callback) => {
                fs.readFile(src, callback);
            },
            (content) => {
                content = convertString(String(content), rule);
                writeout(dest, content, {
                    mkdirp: true,
                    mode: mode
                }, callback);
            }
        ], callback);
    });
}

module.exports = convertFile;
