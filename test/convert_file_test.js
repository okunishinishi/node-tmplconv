/**
 * Test case for convertFile.
 * Runs with nodeunit.
 */

var convertFile = require('../lib/converting/convert_file.js'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Convert file'] = function (test) {
    var src = String(__filename),
        dest = tmpDir + '/foo/bar/testing-converted.txt';
    convertFile(src, dest, {}, function (err) {
        test.ifError(err);
        test.done();
    });
};

