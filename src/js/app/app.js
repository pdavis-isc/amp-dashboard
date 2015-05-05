(function(){

    'use strict' ;
    angular.module('iscSampleApp', [
        'ui.router',
        'mobile-angular-ui',
        'mobile-angular-ui.gestures',
        'ngSanitize',
        'ngAnimate',
        'pascalprecht.translate',
        'angular.filter',

        // isc common core
        'isc.common',

        'sampleHome',
        'sampleLogin',
        'sampleBloodPressure',
        'ampAllSensors'
    ])


        // cut from isc-hscommunity-angular to make tweenMax run
        .constant( 'TweenMax', TweenMax )
        .constant( 'EASE_DUR', .5 )

        .config( function( $httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $logProvider ){

              // ----------------------------
              // Add string hash function
              // ----------------------------
              String.prototype.hashCode = function () {
                var hash = 0, i, chr, len;
                if (this.length == 0) return hash;
                for (i = 0, len = this.length; i < len; i++) {
                  chr = this.charCodeAt(i);
                  hash = ((hash << 5) - hash) + chr;
                  hash |= 0; // Convert to 32bit integer
                }
                return hash;
              };

              // ----------------------------
              // Add daylight savings time detection
              // ----------------------------
              Date.prototype.stdTimezoneOffset = function () {
                var jan = new Date(this.getFullYear(), 0, 1);
                var jul = new Date(this.getFullYear(), 6, 1);
                return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
              };

              Date.prototype.dst = function () {
                return this.getTimezoneOffset() < this.stdTimezoneOffset();
              };

            // ----------------------------
            // logging
            // ----------------------------
            $logProvider.debugEnabled( true );

            // ----------------------------
            // requests
            // ----------------------------
            $httpProvider.defaults.withCredentials = true;

            // ----------------------------
            // interceptor
            // ----------------------------
            $httpProvider.interceptors.push( 'iscAuthenticationInterceptor' );

            // ----------------------------
            // localization
            // ----------------------------
            $translateProvider

                .useStaticFilesLoader({
                    prefix: 'assets/i18n/',
                    suffix: '.json' }) // load local files
                .preferredLanguage('en_US') // load by default
                .fallbackLanguage('en_US'); // if a value is missing, revert to english
        })

        .run( function( $log, $state, $rootScope, AUTH_EVENTS ){
            $rootScope.$on( AUTH_EVENTS.loginSuccess, function(){
                $log.debug('going to index.bloodPressure');
                $state.go( 'index.bloodPressure');
            } );
        })

})();

