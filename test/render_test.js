/**
 * Test case for render.
 * Runs with nodeunit.
 */
"use strict";

const render = require('../lib/render.js'),
    mkdirp = require('mkdirp');

const tmpDir = __dirname + '/../tmp';

exports.setUp = function (done) {
    mkdirp.sync(tmpDir);
    done();
};


exports['Render'] = function(test){
    let srcDir = __dirname + '/../doc/mocks/mock-app-tmpl',
        destDir = tmpDir + '/testing-render/mock-app-generated';
    render(srcDir, destDir, {
        data: {
            "name": "my-awesome-app",
            "description": "This is an example for the app templates."
        }
    }, (err) => {
        test.ifError(err);
        test.done();
    });
};

