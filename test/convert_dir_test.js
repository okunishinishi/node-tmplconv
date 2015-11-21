/**
 * Test case for convertDir.
 * Runs with nodeunit.
 */
"use strict";

const convertDir = require('../lib/converting/convert_dir.js'),
    mkdirp = require('mkdirp');

const tmpDir = __dirname + '/../tmp';

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
    }, (err) => {
        test.ifError(err);
        test.done();
    });
};

