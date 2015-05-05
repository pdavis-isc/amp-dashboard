(function(){

    'use strict';
    angular.module('sampleBloodPressure', [])

        .config( function ($stateProvider){
            $stateProvider
                .state('index.bloodPressure', {
                    url: 'bloodPressure',
                    templateUrl: 'bloodPressure/sampleBloodPressure.html',
                    controller: 'sampleBloodPressureController as bloodPressureCtrl',

                    resolve: {
                        loadConfig: function( $log, iscCustomConfigService){
                            return iscCustomConfigService.loadConfig();
                        },

                        loadSecondaryNav: function( $log, loadConfig, iscCustomConfigService, iscNavContainerModel){
                            iscNavContainerModel.setSecondaryNav([]);
                            iscNavContainerModel.setSecondaryNavTasks([]);
                            return true;
                        }

                    }
                })

        })

})();
