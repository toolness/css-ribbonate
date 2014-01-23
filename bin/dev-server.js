#!/usr/bin/env node

var express = require('express');
var browserify = require('browserify');

var PORT = process.env.PORT || 3000;

var app = express();

function buildJs(path) {
  return browserify()
    .add('./scripts/' + path)
    .bundle({debug: true})
    .on('error', function(err) {
      console.error(err);
      res.send(err.toString()).end();
    });
}

app.get('/ribbonate.js', function(req, res) {
  return buildJs('auto-ribbonate.js').pipe(res);
});

app.get('/remix-me-on-webmaker.js', function(req, res) {
  return buildJs('remix-me-on-webmaker.js').pipe(res);
});

app.use(express.static(__dirname + '/..'));

app.listen(PORT, function() {
  console.log('dev server running on port ' + PORT);
});
