/**
 * Test case for convertDir.
 * Runs with nodeunit.
 */

var convertDir = require('../lib/converting/convert_dir.js'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Convert dir'] = function (test) {
    convertDir(__dirname, tmpDir + '/baz', {
        pattern: '*.*'
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

