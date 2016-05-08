/**
 * Two way template converter.
 * @module tmplconv
 */

'use strict'

module.exports = {
    get render() { return require('./render') },
    get tmplify() { return require('./tmplify') },
    get transplant() { return require('./transplant') }
};