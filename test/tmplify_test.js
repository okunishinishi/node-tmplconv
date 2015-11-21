/**
 * Test case for tmplify.
 * Runs with nodeunit.
 */
"use strict";

const tmplify = require('../lib/tmplify.js'),
    mkdirp = require('mkdirp');

const tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Tmplify'] = function (test) {
    let srcDir = __dirname + '/../doc/mocks/mock-app',
        destDir = tmpDir + '/testing-tmpl/mock-app-tmpl';
    tmplify(srcDir, destDir, {
        data: {
            "name": "my-awesome-app",
            "description": "This is an example for the app templates."
        }
    }, (err) => {
        test.ifError(err);
        test.done();
    });
};

