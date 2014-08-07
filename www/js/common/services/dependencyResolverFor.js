/* global define */

define([], function() {
  'use strict';

  return function(dependencies) {
    var definition = {
      load: ['$q', '$log', '$rootScope',
        function($q, $log, $rootScope) {
          var deferred = $q.defer();

          require(dependencies, function() {
            $rootScope.$apply(function() {
              $log.debug('SOLVED! ', dependencies);
              deferred.resolve();
            });
          });

          return deferred.promise;
        }
      ]
    };

    return definition;
  };

});
