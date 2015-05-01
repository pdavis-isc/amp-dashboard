/**
 * Created by pdavis on 4/14/2015.
 */

(function(){
  'use strict';

  ampAllSensorsApi.$inject = [ '$log', '$q', '$http' ];

  function ampAllSensorsApi( $log, $q, $http){

    // ----------------------------
    // vars
    // ----------------------------

    // ----------------------------
    // class factory
    // ----------------------------

    var api = {
      get: get
    };

    return api;

    // ----------------------------
    // functions
    // ----------------------------

    function get(){
      $log.debug( 'ampAllSensorsApi.events' );

      var deferred = $q.defer();

      var day = new Date();
      var hour = day.getHours();
      if (day.dst()) {
        hour -= 1;
      }
      var responsePromise = $http.get("http://localhost:57782/csp/sys/op/api/v1/Dashboard/sensorArray/Hour/All/Now/" + hour);

      responsePromise.success(function (data, status, headers, config) {
        $scope.sensors = data.sensors;
      });
      responsePromise.error(function (data, status, headers, config) {
        $log.debug("AJAX failed!");
      });

      $log.debug( '...returning existing');
      deferred.resolve( myData );

      return deferred.promise;
    }

  }// END CLASS

  // ----------------------------
  // inject
  // ----------------------------

  angular.module( 'ampAllSensors' )
    .factory( 'ampAllSensorsApi', ampAllSensorsApi );

})();
