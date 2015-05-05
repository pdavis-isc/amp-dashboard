/**
 * Created by douglasgoodman on 4/29/15.
 */

(function(){

  'use strict';

  sampleLoginController.$inject = [ '$log', 'iscSessionModel', 'iscAuthenticationApi' ];

  function sampleLoginController( $log, iscSessionModel, iscAuthenticationApi ){
//    //$log.debug( 'sampleLoginController LOADED');

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
      iscAuthenticationApi.login( credentials );
    };

  }// END CLASS


  // ----------------------------
  // injection
  // ----------------------------
  angular.module('sampleLogin')
      .controller('sampleLoginController', sampleLoginController );

})();
