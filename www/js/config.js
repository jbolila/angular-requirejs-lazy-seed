/* global define */

define(['common/services/dependencyResolverFor'],
  function(dependencyResolverFor) {
    'use strict';

    return {
      routes: {

        // # HOMEPAGE ROUTES:

        main: {
          url: '/',
          views: {
            '': {
              controller: 'MainCtrl',
              templateUrl: 'js/homepage/views/main.html',
              resolve: dependencyResolverFor([
                'homepage/factories/model',
                'common/directives/autofocus',
                'homepage/controllers/main'
              ])
            }
          }
        },

        view: {
          url: '/view',
          views: {
            '': {
              controller: 'ViewCtrl',
              templateUrl: 'js/homepage/views/display.html',
              resolve: dependencyResolverFor([
                'homepage/factories/model',
                'common/filters/fenced',
                'homepage/controllers/view'
              ])
            }
          }
        }

      },

      // # DEFAULT ROUTE:

      otherwise: '/',

      // END OF ROUTES

      // $log.debug enabled?
      debugEnabled: true
    };
  }
);
