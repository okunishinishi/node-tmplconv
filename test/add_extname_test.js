/**
 * Test case for addExtname.
 * Runs with nodeunit.
 */

var addExtname = require('../lib/naming/add_extname.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Add extname'] = function (test) {
    test.equal(addExtname('foo/bar/baz.txt', '.tmpl'), 'foo/bar/baz.txt.tmpl');
    test.equal(addExtname('foo/bar/baz.txt.tmpl', '.tmpl'), 'foo/bar/baz.txt.tmpl');
    test.done();
};

