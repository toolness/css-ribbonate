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
  return square;
};
