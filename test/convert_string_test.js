/**
 * Test case for convertString.
 * Runs with nodeunit.
 */

var convertString = require('../lib/converting/convert_string.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Convert string'] = function (test) {
    var converted = convertString('foo bar baz bar', {
        bar: 'quz'
    });
    test.equal(converted, 'foo quz baz quz');
    test.done();
};

