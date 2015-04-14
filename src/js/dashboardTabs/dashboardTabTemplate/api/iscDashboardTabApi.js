/**
 * Created by douglasgoodman on 11/18/14.
 */

(function(){
  'use strict';

  iscDashboardTabApi.$inject = [ '$log' ,'$http', '$q','iscDashboardTabModel' ];

  function iscDashboardTabApi( $log, $http, $q, iscDashboardTabModel ){
    //$log.debug( 'iscDashboardTabApi LOADED');

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
      //$log.debug( 'iscDashboardTabApi.get');

      var deferred = $q.defer();

      $http.get( 'assets/mockData/customerTab/customerTabData.json' )

          .success( function( result ){
            deferred.resolve( result.data );
          })

          .error( function( error ){
            //$log.debug( 'iscDashboardTabApi.ERROR');
            deferred.reject( error );
          });

      return deferred.promise;
    }

  }// END CLASS


  angular.module( 'iscDashboardTab' )
      .factory( 'iscDashboardTabApi', iscDashboardTabApi );

})();
