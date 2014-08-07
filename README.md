angular-requirejs-lazy-seed
===========================

AngularJS Lazy load project seed, with minimal Karma.


# Start dev session

If [Gulp!](http://gulpjs.com/) or [Bower](http://bower.io/) aren't installed:

```bash
npm install bower -g
npm install gulp -g
```

If is a fresh clone of this project:

```bash
bower install
npm install
```

From here and for future sessions:

```bash
gulp
```

(this is one man show, start the server a watch for file changes, to reload at needs to be reloaded)


## Other options for our gulp


To generate the *CSS* file:

```bash
gulp less
```

To *lint* all the Javascript (`app/js`) files:

```bash
gulp lint
```

For more details have a look at `gulpfile.js`.

## Run Karma tests

If is your first time:

```bash
npm install karma -g
npm install karma-requirejs -g
npm install karma-jasmine -g
npm install karma-phantomjs-launcher -g
npm install karma-firefox-launcher -g
```

To run test tests and watch changes:

```bash
karma start
```

(__the example of [karma-runner/gulp-karma]() isn't working properly and isn't a problem!__)


# TODO:

* Test runner (with Karma) `gulp test`
* Build to dist folder (using [r.js](https://github.com/jrburke/r.js/blob/master/build/example.build.js) "on references") `gulp build`


----

### References

* [Building a Requirejs Project to a Single, Reusable File](http://www.justinmccandless.com/blog/Building+a+Requirejs+Project+to+a+Single%2C+Reusable+File)
