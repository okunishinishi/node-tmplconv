/**
 * Test case for transplant.
 * Runs with nodeunit.
 */
"use strict";
const transplant = require('../lib/transplant.js'),
    mkdirp = require('mkdirp');

const tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};


exports['Transplant'] = function(test){
    var srcDir = __dirname + '/../doc/mocks/mock-app',
        destDir = tmpDir + '/testing-transplanted/mock-app-transplanted';
    transplant(srcDir, destDir, {
        rule: {
            "my-awesome-app":"hey-yo",
            "This is an example for the app templates.":"This transplanted template"
        }
    }, (err) => {
        test.ifError(err);
        test.done();
    });
};


