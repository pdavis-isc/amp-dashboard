/**
 * Created by pdavis on 5/1/2015.
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
                    templateUrl: 'allSensors/ampAllSensors.html',
                    controller: 'ampAllSensorsController as asCtrl',

                    resolve: {
                        loadConfig: function(  $log, iscCustomConfigService ){
                            //$log.debug( 'ampAllSensors.loadConfig');
                            iscCustomConfigService.loadConfig();
                        },

                        loadSecondaryNav: function( $log, loadConfig, iscCustomConfigService, iscNavContainerModel ){
                            //$log.debug( 'ampAllSensors.loadSecondaryNav');
                            iscNavContainerModel.setSecondaryNav( [] );
                            iscNavContainerModel.setSecondaryNavTasks( [] );
                            return true;
                        },

                        data: function(loadSecondaryNav, $log, ampAllSensorsApi) {
                            //$log.debug( 'ampAllSensors.data');
                            return ampAllSensorsApi.get();
                        },

                        model: function($log, data, ampAllSensorsModel) {
                            //$log.debug( 'ampAllSensors.model',data);
                            ampAllSensorsModel.setMyData(data);
                            return true;
                        }

                        //sensorData: function($log, $q, ampAllSensorsModel, ampAllSensorsApi) {
                        //  var sensorArray = [];
                        //  ampAllSensorsModel.getMyData().forEach(function (param){
                        //    sensorsArray.push(ampAllSensorsApi.get(param))
                        //  });
                        //  return $q.all(sensorArray);
                        //}

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

