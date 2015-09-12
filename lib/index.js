/**
 * Share project to remote git repo.
 * @module tmplconv
 */

"use strict";

module.exports = {
    get render() { return require('./render'); },
    get tmplify() { return require('./tmplify'); }
};