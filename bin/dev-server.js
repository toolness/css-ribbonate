#!/usr/bin/env node

var express = require('express');
var browserify = require('browserify');

var PORT = process.env.PORT || 3000;

var app = express();

app.get('/ribbonate.js', function(req, res) {
  return browserify()
    .add('./scripts/auto-ribbonate.js')
    .bundle({debug: true})
    .on('error', function(err) {
      console.error(err);
      res.send(err.toString()).end();
    })
    .pipe(res);
});

app.use(express.static('.'));

app.listen(PORT, function() {
  console.log('dev server running on port ' + PORT);
});
