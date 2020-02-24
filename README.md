## Requirements

- [Node.js with NPM](https://nodejs.org/en/download/ "Node Js")
- Gulp

## Getting started

1. Install all node modules:

- `npm install`

- Make sure you can run `gulp -v` and `npm -v`

2. Run Gulp Task:

- `gulp` - Compiles scss to css, minify css and js and builds apps ready for production into the **dist** folder.

- `gulp watch` - Starts localhost server with browser-sync, watches HTML, Sass, JS with hot reloading.

## Dependencies

```
  "devDependencies": {
    "browser-sync": "^2.26.7",
    "del": "^4.1.1",
    "gh-pages": "^2.2.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^6.1.0",
    "gulp-clean-css": "^4.2.0",
    "gulp-concat": "^2.6.1",
    "gulp-html-replace": "^1.6.2",
    "gulp-rename": "^1.4.0",
    "gulp-sass": "^4.0.2",
    "gulp-sourcemaps": "^2.6.5",
    "gulp-uglify": "^3.0.2",
    "merge-stream": "^1.0.1"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^5.12.0",
    "bootstrap": "^4.4.1",
    "jquery": "^3.4.1",
    "popper.js": "^1.16.0"
  },
```
