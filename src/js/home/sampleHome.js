(function(){

    'use strict';
    angular.module('sampleHome', [])

        .config( function ($stateProvider){
            $stateProvider
                .state('index.home', {
                    url: 'home',
                    templateUrl: 'home/sampleHome.html',
                    controller: 'sampleHomeController as homeCtrl',

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

