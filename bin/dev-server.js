#!/usr/bin/env node

var express = require('express');
var browserify = require('browserify');
var through = require('through');

var PORT = process.env.PORT || 3000;

var app = express();

// TODO: Make new build.js file and move this to it, get rid of build.sh.
function exportFileAsString() {
  var buf = [];

  return through(function write(data) {
    buf.push(data);
  }, function end() {
    this.queue('module.exports = ' + JSON.stringify(buf.join('')) + ';');
    this.queue(null);
  });
}

function buildJs(path, res) {
  return browserify()
    .add('./scripts/' + path)
    .transform(function(file) {
      if (/\.css$/.test(file)) return exportFileAsString();
      return through();
    })
    .bundle({debug: true})
    .on('error', function(err) {
      console.error(err);
      res.send(err.toString()).end();
    })
    .pipe(res);
}

app.get('/ribbonate.js', function(req, res) {
  return buildJs('auto-ribbonate.js', res);
});

app.get('/remix-me-on-webmaker.js', function(req, res) {
  return buildJs('remix-me-on-webmaker.js', res);
});

app.use(express.static(__dirname + '/..'));

app.listen(PORT, function() {
  console.log('dev server running on port ' + PORT);
});
