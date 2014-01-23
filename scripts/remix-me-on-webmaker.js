var ribbonate = require('../lib/ribbonate');
var me = document.scripts[document.scripts.length-1];

function makeRibbon(url) {
  var div = document.createElement('div');
  div.innerHTML = '<a style="background: black; color: white; text-decoration: none; padding: 10px; font-family: \'Helvetica Neue\', sans-serif" href="' + url + '">Remix me on Webmaker</a>';
  var ribbon = div.firstChild;
  document.body.appendChild(ribbon);
  return ribbonate(ribbon, "top right");
}

me.parentNode.replaceChild(makeRibbon('#'), me);
