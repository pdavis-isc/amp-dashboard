/**
 * Created by douglas goodman on 4/24/15.
 */

(function(){
    'use strict';

    iscAuthenticationApi.$inject = [ '$log', '$http', '$state', 'iscCustomConfigService', 'iscSessionModel'];

    function iscAuthenticationApi( $log, $http, $state, iscCustomConfigService, iscSessionModel  ){
//    //$log.debug( 'iscAuthenticationApi LOADED');

        // ----------------------------
        // vars
        // ----------------------------


        // ----------------------------
        // class factory
        // ----------------------------
        var api = {
            login: loginMock,
            logout: logoutMock,
            resetSession: resetSession
        };

        return api;

        // ----------------------------
        // functions
        // ----------------------------

        function onLoginSuccess( response ){
            //$log.debug( 'iscAuthenticationApi.onLoginSuccess');
            //$log.debug( '......response: ' + JSON.stringify( response ));
            iscSessionModel.create( response );

        }


        function resetSession(){
            var url = iscCustomConfigService.getBaseUrl() + '_ping';
            return $http.get( url ).then( function( data ){
                return 'success';
            });
        }

        // ------------------------------------------------------------------------------
        // use these if you want to simulate login/logout but don't have internet connectivity
        // ------------------------------------------------------------------------------
        function loginMock( credentials ){
            var url = 'assets/mockData/login/login.json';
            return $http.get( url, credentials )
                .success( onLoginSuccess );
        }

        function logoutMock(){
            iscSessionModel.destroy();
            $state.go( 'index.home' );
        }


    }//END CLASS


    // ----------------------------
    // injection
    // ----------------------------

    angular.module( 'iscSampleApp' )
        .factory( 'iscAuthenticationApi', iscAuthenticationApi );

})();
