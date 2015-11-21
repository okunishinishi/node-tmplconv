/**
 * Test case for removeExtname.
 * Runs with nodeunit.
 */
"use strict";

const removeExtname = require('../lib/naming/remove_extname.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Remove extname'] = function(test){
    test.equal(removeExtname('foo/bar/baz.txt.tmpl', '.tmpl'), 'foo/bar/baz.txt');
    test.equal(removeExtname('foo/bar/baz.txt', '.tmpl'), 'foo/bar/baz.txt');
    test.done();
};

