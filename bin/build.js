#!/usr/bin/env node

var fs = require('fs');
var through = require('through');
var browserify = require('browserify');

var scripts = exports.scripts = fs.readdirSync('scripts');

function buildJs(path, res) {
  return browserify().add('./scripts/' + path);
}

function buildFiles() {
  scripts.forEach(function(filename) {
    var outfile = fs.createWriteStream(filename);
    buildJs(filename).bundle().pipe(outfile).on('close', function() {
      console.log('wrote', filename);
    });
  });
}

exports.js = buildJs;

if (!module.parent)
  buildFiles();
