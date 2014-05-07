#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var root = argv._[0] || process.cwd();

var createMiniHarp = require("mini-harp")
  , app = createMiniHarp(root);

var num = argv["port"] || 4000;

console.log("Starting mini-harp on http://localhost:%d " + root, num);
app.listen(num);


