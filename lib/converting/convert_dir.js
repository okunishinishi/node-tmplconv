/**
 * Convert files in a directory.
 * @memberof module:tmplconv/lib/converting
 * @function convertDir
 * @param {string} srcDir - Source directory path.
 * @param {string} destDir - Destination directory path.
 * @param {object} [options] - Optional settings.
 * @param {string|string[]} [options.pattern] - Filename pattern.
 * @param {string|string[]} [options.ignore] - Filename pattern.
 * @param {object} [options.rule] - Convert map.
 * @param {string} [options.mode='644'] - File permission to generate.
 * @param {boolean} [options.clean=false] - Cleanup destination directory before convert.
 * @param {boolean} [options.once=false] - Write only first time. Skip if already exists.
 * @param {function} [options.out] - Convert output file name.
 * @param {function} callback - Callback when done.
 */
"use strict";

var async = require('async'),
    argx = require('argx'),
    path = require('path'),
    fs = require('fs'),
    rimraf = require('rimraf'),
    expandglob = require('expandglob'),
    convertString = require('./convert_string'),
    convertFile = require('./convert_file');

/** @lends convertDir */
function convertDir(srcDir, destDir, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function');
    options = args.pop('object');

    var pattern = options.pattern || '**/*.*',
        ignore = options.ignore || [];

    var rule = options.rule || {},
        out = options.out,
        once = !!options.once,
        clean = !!options.clean;

    fs.exists(srcDir, function (exists) {
        if (!exists) {
            callback(new Error('srcDir not exists: ' + srcDir));
            return;
        }
        async.series([
            function (callback) {
                if (clean) {
                    rimraf(destDir, callback);
                } else {
                    callback(null);
                }
            },
            function (callback) {
                async.waterfall([
                    function (callback) {
                        expandglob(pattern, {
                            cwd: srcDir,
                            ignore: ignore
                        }, callback);
                    },
                    function (filenames, callback) {
                        async.mapSeries(filenames, function (filename, callback) {
                            var src = path.resolve(srcDir, filename),
                                dest = path.resolve(destDir, convertString(filename, rule));
                            if (out) {
                                dest = out(dest);
                            }
                            convertFile(src, dest, {
                                rule: rule,
                                once: once,
                                mode: options.mode
                            }, callback);
                        }, callback);
                    }
                ], callback);
            }
        ], callback);
    });
}

module.exports = convertDir;
