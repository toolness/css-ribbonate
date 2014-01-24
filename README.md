This is an experimental script that makes it somewhat easier to create
diagonal ribbons in the style of the [GitHub Ribbon][] using CSS.

A JS script automatically adjusts the width of the ribbon based on
its size (e.g. the number of characters in it). For examples, see
[index.html][].

A separate script intended for use on webmaker.org makes it easy
to add a "Remix me on Webmaker" ribbon to Thimble makes, dynamically
setting the `href` attribute of the ribbon to the remix link for
the make. It also frame-busts the make, which fixes a lot of
bugs such as intra-document (URL fragment) links, page scrolling on
mobile devices, [viewport meta tags][], and more. For examples of
its use, see [remix-me-on-webmaker.html][] and the [bust-out][] make.

This script has been tested on Internet Explorer 11 and recent
versions of Firefox, Chrome, Safari, and Opera. It probably won't work
on older browsers.

  [GitHub Ribbon]: https://github.com/blog/273-github-ribbons
  [index.html]: http://toolness.github.io/css-ribbonate/
  [remix-me-on-webmaker.html]: http://toolness.github.io/css-ribbonate/remix-me-on-webmaker.html
  [viewport meta tags]: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
  [bust-out]: https://toolness.makes.org/thimble/bust-out
