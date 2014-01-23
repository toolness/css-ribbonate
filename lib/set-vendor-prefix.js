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
