/**
 * Test case for convertDir.
 * Runs with mocha.
 */
"use strict";

const convertDir = require("../lib/converting/convert_dir.js");
const mkdirp = require("mkdirp");

const assert = require("assert");

const tmpDir = __dirname + "/../tmp";

before(async () => {
  mkdirp.sync(tmpDir);
});

it("Convert dir", async () => {
  await convertDir(__dirname, tmpDir + "/baz", {
    pattern: "*.*"
  });
});

/* global describe, before, after, it */
