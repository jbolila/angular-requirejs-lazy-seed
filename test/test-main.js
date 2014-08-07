(function(window, require) {
  'use strict';

  var file, tests;
  tests = [];

  for (file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
      if (/\.spec\.js$/.test(file)) {
        tests.push(file);
      }
    }
  }

  require({
      baseUrl: '/base/www/js',
      paths: {
        'jquery': '/base/www/lib/jquery/dist/jquery',
        'angular': '/base/www/lib/angular/angular',
        'angularResource': '/base/www/lib/angular-resource/angular-resource',
        'angularCookies': '/base/www/lib/angular-cookies/angular-cookies',
        'angularSanitize': '/base/www/lib/angular-sanitize/angular-sanitize',
        'angularRoute': '/base/www/lib/angular-ui-router/release/angular-ui-router',
        'angularBootstrap': '/base/www/lib/angular-bootstrap/ui-bootstrap-tpls',
        'bootstrap': '/base/www/lib/bootstrap/dist/js/bootstrap',

        'angularMocks': '/base/www/lib/angular-mocks/angular-mocks'
      },
      shim: {
        'jquery': {
          exports: 'jquery'
        },
        'angular': {
          deps: ['jquery'],
          exports: 'angular'
        },
        'angularRoute': {
          deps: ['angular']
        },
        'angularCookies': {
          deps: ['angular']
        },
        'angularSanitize': {
          deps: ['angular']
        },
        'angularResource': {
          deps: ['angular'],
          exports: 'angularResource'
        },
        'angularMocks': {
          deps: ['angularResource'],
          exports: 'angularMocks'
        },
        'bootstrap': {
          deps: ['jquery'],
          exports: '$'
        },
        'angularBootstrap': {
          deps: ['angular', 'bootstrap']
        }
      }
    }, tests,
    function() {
      window.__karma__.start();
    },
    function(err) {
      var failedModules = err.tests;
      console.log("err", err);

      if (failedModules && failedModules[0]) {
        throw new Error("Module could not be loaded: " + failedModules);
      } else {
        throw new Error("unknown error: " + err);
      }
    });
}(window, require));
