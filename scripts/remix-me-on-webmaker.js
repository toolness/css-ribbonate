var style = document.createElement('style');

style.textContent = require('../css/remix-me-on-webmaker.css');
document.head.appendChild(style);

require('./ribbonate');

// TODO: replace href w/ remix link of current page if possible.
