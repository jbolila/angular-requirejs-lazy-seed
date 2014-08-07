// Karma configuration

module.exports = function(config) {
  config.set({

    basePath: '',

    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      'www/lib/jquery/dist/jquery.js',
      'www/lib/angular/angular.js',
      'www/lib/angular-resource/angular-resource.js',
      'www/lib/angular-mocks/angular-mocks.js',
      'www/lib/angular-cookies/angular-cookies.js',
      'www/lib/angular-sanitize/angular-sanitize.js',
      'www/lib/angular-ui-router/release/angular-ui-router.js',
      'www/lib/angular-bootstrap/ui-bootstrap-tpls.js',
      'www/lib/bootstrap/dist/js/bootstrap.js', {
        pattern: 'www/js/**/*.js',
        included: false
      }, {
        pattern: 'test/spec/**/*.spec.js',
        included: false
      },
      'test/test-main.js'
    ],


    // list of files to exclude
    // exclude: [
    // 'www/scripts/wwwBootstrap.js'
    // ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,
    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-firefox-launcher'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
