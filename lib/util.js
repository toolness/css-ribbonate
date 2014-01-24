var $ = exports.$ = function $(sel) {
  return array(document.querySelectorAll(sel));
};

var array = exports.array = function array(arrayLike) {
  return [].slice.call(arrayLike);
};
