(function(){

  'use strict';

  sampleHomeController.$inject = [ '$log', 'iscSessionModel', 'iscAuthenticationApi' ];

  function sampleHomeController( $log, iscSessionModel, iscAuthenticationApi ){
    $log.debug( 'sampleHomeController LOADED');

    // ----------------------------
    // vars
    // ----------------------------

    var self = this;

    self.sessionModel = iscSessionModel;

    self.translationParams = {};

    // used for passing credentials to the login api
    // the credentials, once login success, are stored in the iscSessionModel
    self.credentials = {
      Username: 'adameveryman',
      Password: 'Password1a'
    };


    // ----------------------------
    // functions
    // ----------------------------

    self.login = function( credentials ){
      $log.debug('sampleHomeController.login');
      iscAuthenticationApi.login( credentials );
    };

  }// END CLASS


  // ----------------------------
  // injection
  // ----------------------------
  angular.module('sampleHome')
      .controller('sampleHomeController', sampleHomeController );

})();
