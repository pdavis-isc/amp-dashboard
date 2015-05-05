(function(){

    'use strict';
    angular.module('sampleLogin', [])

        .config( function ($stateProvider){
            $stateProvider
                .state('index.login', {
                    url: 'login',
                    templateUrl: 'login/sampleLogin.html',
                    controller: 'sampleLoginController as loginCtrl',

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