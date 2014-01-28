`ribbonate.js` is an experimental script that makes it somewhat easier to 
create diagonal ribbons in the style of the [GitHub Ribbon][] using CSS.

The script automatically adjusts the width of the ribbon based on
its size (e.g. the number of characters in it). For examples, see
[index.html][].

`remix-me-on-webmaker.js` is a separate script intended for use on
webmaker.org that makes it easy to add a "Remix me on Webmaker" ribbon
to Thimble makes, dynamically setting the `href` attribute of the
ribbon to the remix link for the make. It also frame-busts the make,
which fixes a lot of bugs such as intra-document (URL fragment) links,
page scrolling on mobile devices, [viewport meta tags][], view-source,
and more. For  examples of its use, see
[remix-me-on-webmaker.html][] and the [bust-out][] make.

## Development

The scripts are actually built using [browserify][], so development
takes a bit of setup.

First, you'll need to run `npm install` from the repository root.

Then use `bin/dev-server.js` to launch a development server that
rebuilds the necessary scripts whenever they're requested.

When you're ready to deploy/commit the scripts, run `bin/build.js`.

## Browser Compatibility

These scripts have been tested on Internet Explorer 11 and recent
versions of Firefox, Chrome, Safari, and Opera. They probably won't work
on older browsers.

  [GitHub Ribbon]: https://github.com/blog/273-github-ribbons
  [index.html]: http://toolness.github.io/css-ribbonate/
  [remix-me-on-webmaker.html]: http://toolness.github.io/css-ribbonate/remix-me-on-webmaker.html
  [viewport meta tags]: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
  [bust-out]: https://toolness.makes.org/thimble/bust-out
  [browserify]: https://github.com/substack/node-browserify
