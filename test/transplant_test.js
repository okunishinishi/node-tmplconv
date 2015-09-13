/**
 * Test case for transplant.
 * Runs with nodeunit.
 */

var transplant = require('../lib/transplant.js'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};


exports['Transplant'] = function(test){
    var srcDir = __dirname + '/../doc/mockups/mock-app',
        destDir = tmpDir + '/testing-transplanted/mock-app-transplanted';
    transplant(srcDir, destDir, {
        rule: {
            "my-awesome-app":"hey-yo",
            "This is an example for the app templates.":"This transplanted template"
        }
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};


