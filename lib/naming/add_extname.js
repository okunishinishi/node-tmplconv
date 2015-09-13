/**
 * Add file extension.
 * @function addExtname
 * @param {string} filename - Filename to change.
 * @param {string} extname - Extname to add.
 * @returns {string} Changed file name.
 */

"use strict";

var path = require('path');

/** @lends addExtname */
function addExtname(filename, extname) {
    var dirname = path.dirname(filename),
        basename = path.basename(filename, extname);
    return path.join(dirname, basename + extname);
}

module.exports = addExtname;
