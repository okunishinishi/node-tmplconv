/**
 * Test case for tmplify.
 * Runs with nodeunit.
 */

var tmplify = require('../lib/tmplify.js'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Tmplify'] = function (test) {
    var srcDir = __dirname + '/../doc/mocks/mock-app',
        destDir = tmpDir + '/testing-tmpl/mock-app-tmpl';
    tmplify(srcDir, destDir, {
        data: {
            "name": "my-awesome-app",
            "description": "This is an example for the app templates."
        }
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

