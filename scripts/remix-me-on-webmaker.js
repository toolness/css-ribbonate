var $ = require('../lib/util').$;
var style = document.createElement('style');
var baseURL = location.href.slice(0, -1);

var MAKE_RE = /^https:\/\/([A-Za-z0-9_\-]+).makes.org\/thimble\/([A-Za-z0-9_\-]+)_$/;

style.textContent = require('../css/remix-me-on-webmaker.css');
document.head.appendChild(style);

require('./ribbonate');

if (MAKE_RE.test(location.href)) {
  try {
    if (location.href == top.location.href + '_') {
      // Bust out of the iframe.
      top.location.href = location.href;
    }
  } catch (e) {
    if (window.console) window.console.error(e);
  }

  document.addEventListener("DOMContentLoaded", function() {
    $(".remix-ribbon").forEach(function(ribbon) {
      ribbon.setAttribute("href", baseURL + "/remix");
    });
  }, false);
}
