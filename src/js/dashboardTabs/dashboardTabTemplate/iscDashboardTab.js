(function(){
  'use strict';

  angular.module('iscDashboardTab', [])
    .config( ['$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider ){

      $urlRouterProvider.when('/dashboardTab', '/dashboardTab/tab1');

      // ----------------------------
      // state management
      // ----------------------------
      $stateProvider
        .state('index.dashboardTab', {
          url: 'dashboardTab',
          templateUrl: 'dashboardTabs/dashboardTabTemplate/iscDashboardTab.html',
          controller: 'iscDashboardTabController as dashboardTabCtrl',

          resolve: {
            loadConfig: function(  $log, iscCustomConfigService ){
              //$log.debug( 'iscDashboardTab.loadConfig');
              iscCustomConfigService.loadConfig();
            },

            loadSecondaryNav: function( $log, loadConfig, iscCustomConfigService, iscNavContainerModel ){
              iscNavContainerModel.setSecondaryNav( [] );
              iscNavContainerModel.setSecondaryNavTasks( [] );
              return true;
            },

            data: function( iscDashboardTabApi ){
              return iscDashboardTabApi.get();
            },

            model: function( data, iscDashboardTabModel ){
              iscDashboardTabModel.setData( data );
            }
          }
        });

        //.state('index.dashboardTab.tab1', {
        //  url: '/tab1',
        //  templateUrl: 'dashboardTabs/dashboardTabTemplate/iscDashboardTab1.html',
        //  controller: 'iscDashboardTabController as dashboardTabCtrl'
        //})
        //
        //.state('index.dashboardTab.tab2', {
        //  url: '/tab2',
        //  templateUrl: 'dashboardTabs/dashboardTabTemplate/iscDashboardTab2.html',
        //  controller: 'iscDashboardTabController as dashboardTabCtrl'
        //});

    }]);
})();

