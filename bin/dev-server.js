#!/usr/bin/env node

var express = require('express');
var build = require('./build');

var PORT = process.env.PORT || 3000;

var app = express();

function deliverJs(path) {
  return function(req, res) {
    return build.js(path)
      .bundle({debug: true})
      .on('error', function(err) {
        console.error(err);
        res.send(err.toString()).end();
      })
      .pipe(res);
  };
}

app.get('/ribbonate.js', deliverJs('auto-ribbonate.js'));
app.get('/remix-me-on-webmaker.js', deliverJs('remix-me-on-webmaker.js'));

app.use(express.static(__dirname + '/..'));

app.listen(PORT, function() {
  console.log('dev server running on port ' + PORT);
});
