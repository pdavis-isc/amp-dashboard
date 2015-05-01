

(function(){
  'use strict';

  angular.module('iscHsCommunityAngular', [
    'ui.calendar',
    'ui.router',
    'mobile-angular-ui',
    'mobile-angular-ui.gestures',
    'ngSanitize',
    'ngAnimate',
    'pascalprecht.translate',
    'angular.filter',

    // isc common core
    'isc.common',

    // application
    'ampAllSensors',
    'iscHome',
    'iscLogin',
    'iscShared'
  ])

    .constant( 'TweenMax', TweenMax )
    .constant( 'EASE_DUR', .5 )

    .constant('MODAL_EVENTS', {
      showOptionsPopup: 'iscShowOptionsPopup'
    })

    .config( function( $httpProvider, $stateProvider, $urlRouterProvider, $translateProvider ){

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

    .run( ['$log', '$state', '$rootScope', 'iscSessionModel', 'iscUserRoleHelper', 'iscSessionStorageHelper', 'iscAuthenticationApi', 'AUTH_EVENTS',
      function( $log, $state, $rootScope, iscSessionModel, iscUserRoleHelper, iscSessionStorageHelper, iscAuthenticationApi, AUTH_EVENTS ){
        //$log.debug( 'iscHsCommunityAngular.run');

        // ------------------------
        // login success event
        $rootScope.$on( AUTH_EVENTS.loginSuccess, function(){
          //$log.debug( 'iscHsCommunityAngular.loginSuccess');

          var currentUser = iscSessionModel.getCurrentUser();
          iscUserRoleHelper.setRoleForUser( currentUser );
          iscSessionModel.setCurrentUser( currentUser );
          iscSessionModel.initSessionTimeout();
        });

        // ------------------------
        // logout success event
        $rootScope.$on( AUTH_EVENTS.logoutSuccess, function(){
          //$log.debug( 'iscHsCommunityAngular.logoutSuccess');
          iscSessionStorageHelper.destroy();
        });

        // ------------------------
        // sessionTimeoutConfirm event - when you click 'Log out' on the dialog
        $rootScope.$on( AUTH_EVENTS.sessionTimeoutConfirm, function(){
          //$log.debug( 'iscHsCommunityAngular.sessionTimeoutConfirm');
          iscAuthenticationApi.logout();
        });

        // ------------------------
        // sessionTimeoutReset event
        $rootScope.$on( AUTH_EVENTS.sessionTimeoutReset, function(){
          //$log.debug( 'iscHsCommunityAngular.sessionTimeoutReset');
          iscAuthenticationApi.resetSession().then( function(){
            iscSessionModel.resetSessionTimeout();
          });
        });

        // ------------------------
        // sessionTimeout event
        $rootScope.$on( AUTH_EVENTS.sessionTimeout, function(){
          //$log.debug( 'iscHsCommunityAngular.sessionTimeout');
          iscAuthenticationApi.logout();
        });

      }]);
})();
