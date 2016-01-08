#!/usr/bin/env node

/**
 * Measure test coverage.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    expandglob = require('expandglob'),
    apeCovering = require('ape-covering');

apeTasking.runTasks('cover', [
    (callback) => {
        apeCovering.measureCoverage('nodeunit', expandglob('test/*_test.js'), {
            dir: 'coverage'
        }, callback);
    }
], true);
