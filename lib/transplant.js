/**
 * Tmplify and render at once.
 * @memberof module:tmplconv/lib
 * @function transplant
 * @param {string} src - Name of destination directory.
 * @param {string} dest - Name of destination directory, which contains template files.
 * @param {object} options - Optional settings.
 * @param {string|object} options.rule - Rule for convert.
 * @param {string|string[]} options.pattern - Source patterns.
 * @param {string|string[]} [options.ignore] - Filename pattern.
 * @param {boolean} [options.silent=false] - Silent or not.
 * @param {string} [options.mode='644'] - File permission to generate.
 * @param {boolean} [options.clean=false] - Cleanup destination directory before convert.
 * @param {boolean} [options.once=false] - Write only first time. Skip if already exists.
 * @param {function} callback - Callback when done.
 */

"use strict";


const argx = require('argx'),
    async=  require('async'),
    path = require('path'),
    tmplify = require('./tmplify'),
    rimraf = require('rimraf'),
    render = require('./render');

/** @lends transplant */
function transplant(src, dest, options, callback) {
    let args = argx(arguments);
    callback = args.pop('function') || argx.noop;
    options = args.pop('object') || {};

    let tmp = _nameTmp(dest);
    let tmplifyDo = {},
        renderDo = {};
    let rule = options.rule || {};
    Object.keys(rule).forEach((src, i) => {
        let key = 'key_' + i;
        tmplifyDo[key] = src;
        renderDo[key] = rule[src];
    });
    async.series([
        (callback) => {
            rimraf(tmp, callback);
        },
        (callback) => {
            tmplify(src, tmp, {
                data: tmplifyDo,
                silent: true,
                pattern: options.pattern,
                ignore: options.ignore
            }, callback);
        },
        (callback) => {
            render(tmp, dest, {
                data: renderDo,
                silent: options.silent,
                clean: options.clean,
                once: options.once,
                mode: options.mode
            }, callback);
        },
        (callback) => {
            rimraf(tmp, callback);
        }
    ], callback);
}

function _nameTmp(dest) {
    let dirname = path.dirname(dest),
        basename = path.basename(dest);
    return path.join(dirname, '.' + basename + '.tmp');
}

module.exports = transplant;
