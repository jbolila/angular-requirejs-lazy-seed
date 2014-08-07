/* global define describe beforeEach inject it expect */

'use strict';

module('app', function(app) {
  console.log(app);
});

define(['homepage/controllers/main'], function() {
  describe('The Homepage Main controller', function() {
    var $rootScope, $controller, $scope;

    beforeEach(function() {
      module('app');

      inject([
        '$injector',
        '$rootScope',
        '$controller',

        function($injector, _$rootScope, _$controller) {
          $rootScope = _$rootScope;
          $scope = $rootScope.$new();
          $controller = _$controller;
        }
      ]);

      $controller('MainCtrl', {
        $scope: $scope
      });
    });

    it('should set page heading to "Welcome"', function() {
      expect($scope.page.heading).toBe('Welcome');
    });
  });
});
