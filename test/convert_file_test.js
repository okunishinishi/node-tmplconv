/**
 * Test case for convertFile.
 * Runs with nodeunit.
 */
"use strict";

const convertFile = require('../lib/converting/convert_file.js'),
    mkdirp = require('mkdirp');

const tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Convert file'] = function (test) {
    let src = String(__filename),
        dest = tmpDir + '/foo/bar/testing-converted.txt';
    convertFile(src, dest, {}, (err) => {
        test.ifError(err);
        test.done();
    });
};

