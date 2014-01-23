var ribbonate = require('../lib/ribbonate');

function $(sel) { return array(document.querySelectorAll(sel)); }

function array(arrayLike) { return [].slice.call(arrayLike); }

window.addEventListener('load', function() {
  $('[data-ribbonate]').forEach(function(el) {
    ribbonate(el, el.getAttribute('data-ribbonate'));
  });
}, false);

window.ribbonate = ribbonate;
