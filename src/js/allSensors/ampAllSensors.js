/**
 * Created by pdavis on 4/14/2015.
 */
(function(){
  'use strict';

  angular.module('ampAllSensors', [])
    .config( ['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ){

      $urlRouterProvider.when('/dashboardTab', '/dashboardTab/tab1');

      // ----------------------------
      // state management
      // ----------------------------
      $stateProvider
        .state('index.allSensors', {
          url: 'allSensors',
          templateUrl: 'ampAllSensors/ampAllSensors.html',
          controller: 'ampAllSensorsController as asCtrl',

          resolve: {
            loadConfig: function(  $log, iscCustomConfigService ){
              //$log.debug( 'ampAllSensors.loadConfig');
              iscCustomConfigService.loadConfig();
            },

            loadSecondaryNav: function( $log, loadConfig, iscCustomConfigService, iscNavContainerModel ){
              iscNavContainerModel.setSecondaryNav( [] );
              iscNavContainerModel.setSecondaryNavTasks( [] );
              return true;
            },

            data: function( ampAllSensorsApi ){
              return ampAllSensorsApi.get();
            },

            model: function( data, ampAllSensorsModel ){
              ampAllSensorsModel.setData( data );
            }
          }
        });

      //.state('index.dashboardTab.tab1', {
      //  url: '/tab1',
      //  templateUrl: 'dashboardTabs/dashboardTabTemplate/ampAllSensors1.html',
      //  controller: 'ampAllSensorsController as dashboardTabCtrl'
      //})
      //
      //.state('index.dashboardTab.tab2', {
      //  url: '/tab2',
      //  templateUrl: 'dashboardTabs/dashboardTabTemplate/ampAllSensors2.html',
      //  controller: 'ampAllSensorsController as dashboardTabCtrl'
      //});

    }]);
})();

