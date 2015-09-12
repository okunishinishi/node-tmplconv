/**
 * Test case for render.
 * Runs with nodeunit.
 */

var render = require('../lib/render.js'),
    mkdirp = require('mkdirp');

var tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};


exports['Render'] = function(test){
    var srcDir = __dirname + '/../doc/mockups/mock-app-tmpl',
        destDir = tmpDir + '/testing-render/mock-app-generated';
    render(srcDir, destDir, {
        data: {
            "name": "my-awesome-app",
            "description": "This is an example for the app templates."
        }
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

