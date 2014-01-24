var through = require('through');
var browserify = require('browserify');

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

exports.js = buildJs;

if (!module.parent)
  console.log("TODO: Build files here.");
