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

const async = require('async'),
    argx = require('argx'),
    path = require('path'),
    fs = require('fs'),
    rimraf = require('rimraf'),
    expandglob = require('expandglob'),
    convertString = require('./convert_string'),
    convertFile = require('./convert_file');

/** @lends convertDir */
function convertDir(srcDir, destDir, options, callback) {
    let args = argx(arguments);
    callback = args.pop('function');
    options = args.pop('object');

    let pattern = options.pattern || '**/*.*',
        ignore = options.ignore || [];

    let rule = options.rule || {},
        out = options.out,
        once = !!options.once,
        clean = !!options.clean;

    fs.exists(srcDir, (exists) => {
        if (!exists) {
            callback(new Error('srcDir not exists: ' + srcDir));
            return;
        }
        async.series([
            (callback) => {
                if (clean) {
                    rimraf(destDir, callback);
                } else {
                    callback(null);
                }
            },
            (callback) => {
                async.waterfall([
                    (callback) => {
                        expandglob(pattern, {
                            cwd: srcDir,
                            ignore: ignore
                        }, callback);
                    },
                    (filenames, callback) => {
                        async.mapSeries(filenames, (filename, callback) => {
                            let src = path.resolve(srcDir, filename),
                                dest = path.resolve(destDir, convertString(filename, rule));
                            if (out) {
                                dest = out(dest);
                            }
                            require('./convert')(src, dest, {
                                rule: rule,
                                once: once,
                                mode: options.mode
                            }, callback);
                        }, callback);
                    }
                ], callback);
            }
        ], (err, results) => {
            callback(err, results && results.pop());
        });
    });
}

module.exports = convertDir;
