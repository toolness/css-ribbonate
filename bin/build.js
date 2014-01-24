var fs = require('fs');
var through = require('through');
var browserify = require('browserify');

var scripts = exports.scripts = fs.readdirSync('scripts');

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
    });
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
