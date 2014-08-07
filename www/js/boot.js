/* global window, requirejs */

(function(document) {
  'use strict';

  requirejs.config({
    baseUrl: '/js',
    paths: {
      'jquery': '/lib/jquery/dist/jquery',
      'angular': '/lib/angular/angular',
      'angularResource': '/lib/angular-resource/angular-resource',
      'angularCookies': '/lib/angular-cookies/angular-cookies',
      'angularSanitize': '/lib/angular-sanitize/angular-sanitize',
      'angularRoute': '/lib/angular-ui-router/release/angular-ui-router',
      'angularBootstrap': '/lib/angular-bootstrap/ui-bootstrap-tpls',
      'bootstrap': '/lib/bootstrap/dist/js/bootstrap'
      // 'bootstrap-dialog': '/lib/bootstrap3-dialog/js/bootstrap-dialog',
      // 'lodash': '/lib/lodash/dist/lodash',
      // 'pouchdb': '/lib/pouchdb/dist/pouchdb-nightly'
    },
    shim: {
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
        deps: ['angular']
      },
      'angularMocks': {
        deps: ['angular'],
        exports: 'angular.mock'
      },
      'bootstrap': {
        deps: ['jquery']
      },
      'angularBootstrap': {
        deps: ['angular', 'bootstrap']
      },
      'app': {
        deps: ['angular', 'angularRoute', 'angularBootstrap', 'angularCookies',
          'angularBootstrap', 'angularResource', 'angularSanitize'
        ]
      }
    },
    priority: [
      'app'
    ]
  });

  // Angular starts here!
  requirejs(['angular', 'app'], function(angular, app) {
    angular.element(document.getElementsByTagName('html')[0]).ready(function() {
      return angular.bootstrap(document, [app.name]);
    });
  });

}(window.document));
