var $ = require('../lib/util').$;
var baseURL = location.href.slice(0, -1);

var WEBMAKER_RE = /^https:\/\/(thimble\.)?webmaker\.org/;
var MAKE_RE = /^https:\/\/([A-Za-z0-9_\-]+).makes.org\/thimble\/([A-Za-z0-9_\-]+)_$/;

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
    $("[data-ribbonate]").forEach(function(ribbon) {
      if (WEBMAKER_RE.test(ribbon.getAttribute("href")))
        ribbon.setAttribute("href", baseURL + "/remix");
    });
  }, false);
}
