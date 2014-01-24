var ribbonate = require('../lib/ribbonate');
var $ = require('../lib/util').$;

window.addEventListener('DOMContentLoaded', function() {
  $('[data-ribbonate]').forEach(function(el) {
    ribbonate(el, el.getAttribute('data-ribbonate'));
  });
}, false);

window.ribbonate = ribbonate;
