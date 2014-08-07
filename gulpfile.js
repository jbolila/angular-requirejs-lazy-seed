// Gulpfile.js

"use strict";

var gulp = require("gulp"),
  eslint = require("gulp-eslint"),
  less = require("gulp-less"),
  minifyCSS = require("gulp-minify-css"),
  browserSync = require('browser-sync'),
  notify = require("gulp-notify"),
  rimraf = require('gulp-rimraf'),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify"),
  karma = require("karma").server,
  _ = require("lodash"),
  karmaCommonConf = require('./karma.conf.js');


gulp.task("less", function() {
  gulp.src("www/css/styles.less")
    .pipe(gulp.dest("www/css"))
    .pipe(less())
    .pipe(gulp.dest("www/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
    .pipe(rename("styles.min.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest("www/css"));
});

gulp.task('browser-sync-reload', function() {
  browserSync.reload();
  // browserSync.reload({
  //   stream: true,
  //   once: true
  // });
});

gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: "www"
    }
  });
});

gulp.task("lint", function() {
  gulp.src(["www/js/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', function(done) {
  karma.start(_.assign({}, karmaCommonConf, {
    singleRun: true
  }), done);
});

gulp.task('tdd', function(done) {
  karma.start(karmaCommonConf, done);
});

gulp.task("clean", function() {
  gulp.src(["dist/"], {
    read: false
  })
    .pipe(rimraf());
});

gulp.task("clean-deps", function() {
  gulp.src(["dist/", "www/lib/", "node_modules/"], {
    read: false
  })
    .pipe(rimraf());
});

gulp.task("dist", ["clean", "less"], function() {
  gulp.src(["js/bootstrap-dialog.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(gulp.dest("examples/assets/bootstrap-dialog/js"))
    .pipe(rename("bootstrap-dialog.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(gulp.dest("examples/assets/bootstrap-dialog/js"))
    .pipe(notify({
      message: "Build task completed."
    }));
});

gulp.task("default", ["less", "browser-sync"], function() {
  gulp.watch("www/css/**/*.less", ["less"]);
  gulp.watch("www/js/**/*.js", ["lint", "browser-sync-reload"]);
  gulp.watch("www/**/*.html", ["browser-sync-reload"]);
});
