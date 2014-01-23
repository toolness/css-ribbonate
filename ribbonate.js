(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var setVendorPrefix = require('./set-vendor-prefix');

module.exports = function ribbonate(el, position) {
  position = position.split(' ');
  setVendorPrefix(el, 'box-sizing', 'border-box');

  var elRect = el.getBoundingClientRect();
  var style = window.getComputedStyle(el);
  var square = document.createElement('div');
  var squareSide = elRect.width;
  var ribbonWidth = 2 * squareSide;
  var rotation = 45;
  var translation = elRect.height/2;

  square.style.position = "absolute";
  square.style.overflow = "hidden";

  if (position[0] == "top") {
    square.style.top = "0";
    rotation *= position[1] == "left" ? -1 : 1;
    translation *= -1;
  } else {
    square.style.bottom = "0";
    rotation *= position[1] == "left" ? 1 : -1;
    translation *= 1;
  }

  if (position[1] == "left") {
    square.style.left = "0";
  } else {
    square.style.right = "0";
  }

  square.style.width = square.style.height = squareSide + "px";

  el.parentNode.replaceChild(square, el);
  square.appendChild(el);

  el.style.position = "absolute";
  el.style.top = (squareSide/2 - elRect.height/2) + "px";
  el.style.left = (-(ribbonWidth-squareSide)/2) + "px";
  el.style.textAlign = "center";
  el.style.width = ribbonWidth + "px";
  setVendorPrefix(el, "transform", "rotate(" + rotation + "deg) " +
                                   "translateY(" + translation + "px)");
};

},{"./set-vendor-prefix":2}],2:[function(require,module,exports){
// https://gist.github.com/vjt/827679
function camelize(str) {
  return str.replace(/(?:^|[-_])(\w)/g, function (_, c) {
    return c ? c.toUpperCase () : '';
  });
}

module.exports = function setVendorPrefix(el, prop, value) {
  ['-o-', '-moz-', '-webkit-', ''].forEach(function(prefix) {
    var prefixedProp = prefix + prop;
    var camelizedProp = camelize(prefixedProp);
    if (prefixedProp in el.style)
      el.style[prefixedProp] = value;
    else if (camelizedProp in el.style)
      el.style[camelizedProp] = value;
  });
};

},{}],3:[function(require,module,exports){
var ribbonate = require('../lib/ribbonate');

function $(sel) { return array(document.querySelectorAll(sel)); }

function array(arrayLike) { return [].slice.call(arrayLike); }

window.addEventListener('load', function() {
  $('[data-ribbonate]').forEach(function(el) {
    ribbonate(el, el.getAttribute('data-ribbonate'));
  });
}, false);

window.ribbonate = ribbonate;

},{"../lib/ribbonate":1}]},{},[3])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYXR1bC9Eb2N1bWVudHMvZXhwbG9yYXRpb25zL2Nzcy1yaWJib25hdG9yL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXR1bC9Eb2N1bWVudHMvZXhwbG9yYXRpb25zL2Nzcy1yaWJib25hdG9yL2xpYi9yaWJib25hdGUuanMiLCIvVXNlcnMvYXR1bC9Eb2N1bWVudHMvZXhwbG9yYXRpb25zL2Nzcy1yaWJib25hdG9yL2xpYi9zZXQtdmVuZG9yLXByZWZpeC5qcyIsIi9Vc2Vycy9hdHVsL0RvY3VtZW50cy9leHBsb3JhdGlvbnMvY3NzLXJpYmJvbmF0b3Ivc2NyaXB0cy9hdXRvLXJpYmJvbmF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHNldFZlbmRvclByZWZpeCA9IHJlcXVpcmUoJy4vc2V0LXZlbmRvci1wcmVmaXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByaWJib25hdGUoZWwsIHBvc2l0aW9uKSB7XG4gIHBvc2l0aW9uID0gcG9zaXRpb24uc3BsaXQoJyAnKTtcbiAgc2V0VmVuZG9yUHJlZml4KGVsLCAnYm94LXNpemluZycsICdib3JkZXItYm94Jyk7XG5cbiAgdmFyIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHZhciBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHNxdWFyZVNpZGUgPSBlbFJlY3Qud2lkdGg7XG4gIHZhciByaWJib25XaWR0aCA9IDIgKiBzcXVhcmVTaWRlO1xuICB2YXIgcm90YXRpb24gPSA0NTtcbiAgdmFyIHRyYW5zbGF0aW9uID0gZWxSZWN0LmhlaWdodC8yO1xuXG4gIHNxdWFyZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgc3F1YXJlLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICBpZiAocG9zaXRpb25bMF0gPT0gXCJ0b3BcIikge1xuICAgIHNxdWFyZS5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICByb3RhdGlvbiAqPSBwb3NpdGlvblsxXSA9PSBcImxlZnRcIiA/IC0xIDogMTtcbiAgICB0cmFuc2xhdGlvbiAqPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBzcXVhcmUuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgcm90YXRpb24gKj0gcG9zaXRpb25bMV0gPT0gXCJsZWZ0XCIgPyAxIDogLTE7XG4gICAgdHJhbnNsYXRpb24gKj0gMTtcbiAgfVxuXG4gIGlmIChwb3NpdGlvblsxXSA9PSBcImxlZnRcIikge1xuICAgIHNxdWFyZS5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gIH0gZWxzZSB7XG4gICAgc3F1YXJlLnN0eWxlLnJpZ2h0ID0gXCIwXCI7XG4gIH1cblxuICBzcXVhcmUuc3R5bGUud2lkdGggPSBzcXVhcmUuc3R5bGUuaGVpZ2h0ID0gc3F1YXJlU2lkZSArIFwicHhcIjtcblxuICBlbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChzcXVhcmUsIGVsKTtcbiAgc3F1YXJlLmFwcGVuZENoaWxkKGVsKTtcblxuICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgZWwuc3R5bGUudG9wID0gKHNxdWFyZVNpZGUvMiAtIGVsUmVjdC5oZWlnaHQvMikgKyBcInB4XCI7XG4gIGVsLnN0eWxlLmxlZnQgPSAoLShyaWJib25XaWR0aC1zcXVhcmVTaWRlKS8yKSArIFwicHhcIjtcbiAgZWwuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgZWwuc3R5bGUud2lkdGggPSByaWJib25XaWR0aCArIFwicHhcIjtcbiAgc2V0VmVuZG9yUHJlZml4KGVsLCBcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIHJvdGF0aW9uICsgXCJkZWcpIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc2xhdGVZKFwiICsgdHJhbnNsYXRpb24gKyBcInB4KVwiKTtcbn07XG4iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS92anQvODI3Njc5XG5mdW5jdGlvbiBjYW1lbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oPzpefFstX10pKFxcdykvZywgZnVuY3Rpb24gKF8sIGMpIHtcbiAgICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UgKCkgOiAnJztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0VmVuZG9yUHJlZml4KGVsLCBwcm9wLCB2YWx1ZSkge1xuICBbJy1vLScsICctbW96LScsICctd2Via2l0LScsICcnXS5mb3JFYWNoKGZ1bmN0aW9uKHByZWZpeCkge1xuICAgIHZhciBwcmVmaXhlZFByb3AgPSBwcmVmaXggKyBwcm9wO1xuICAgIHZhciBjYW1lbGl6ZWRQcm9wID0gY2FtZWxpemUocHJlZml4ZWRQcm9wKTtcbiAgICBpZiAocHJlZml4ZWRQcm9wIGluIGVsLnN0eWxlKVxuICAgICAgZWwuc3R5bGVbcHJlZml4ZWRQcm9wXSA9IHZhbHVlO1xuICAgIGVsc2UgaWYgKGNhbWVsaXplZFByb3AgaW4gZWwuc3R5bGUpXG4gICAgICBlbC5zdHlsZVtjYW1lbGl6ZWRQcm9wXSA9IHZhbHVlO1xuICB9KTtcbn07XG4iLCJ2YXIgcmliYm9uYXRlID0gcmVxdWlyZSgnLi4vbGliL3JpYmJvbmF0ZScpO1xuXG5mdW5jdGlvbiAkKHNlbCkgeyByZXR1cm4gYXJyYXkoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTsgfVxuXG5mdW5jdGlvbiBhcnJheShhcnJheUxpa2UpIHsgcmV0dXJuIFtdLnNsaWNlLmNhbGwoYXJyYXlMaWtlKTsgfVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAkKCdbZGF0YS1yaWJib25hdGVdJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgIHJpYmJvbmF0ZShlbCwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXJpYmJvbmF0ZScpKTtcbiAgfSk7XG59LCBmYWxzZSk7XG5cbndpbmRvdy5yaWJib25hdGUgPSByaWJib25hdGU7XG4iXX0=
