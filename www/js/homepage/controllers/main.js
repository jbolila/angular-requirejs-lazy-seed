/* global define */

define(['app', 'homepage/factories/model'],

  function(app) {
    'use strict';

    app.controller('MainCtrl', [
      '$scope', '$log', 'superModel',

      function($scope, $log, superModel) {

        $scope.page = {
          heading: 'Welcome'
        };

        $scope.sometext = superModel.content;

        $scope.submitForm = function() {
          superModel.content = $scope.sometext;

          $log.debug('on post form data ', $scope.sometext);
        };
      }
    ]);

    return app;
  }
);
