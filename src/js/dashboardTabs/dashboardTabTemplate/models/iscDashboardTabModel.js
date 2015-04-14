/**
 * Created by Peter Davis on 04/10/15.
 */

(function(){
  'use strict';

  iscDashboardTabModel.$inject = [ '$log'];

  function iscDashboardTabModel( $log ){
//    //$log.debug( 'iscCustomerTabModel LOADED');

    // ----------------------------
    // vars
    // ----------------------------

    var data = {};


    // ----------------------------
    // class factory
    // ----------------------------
    var model = {
      getData: getData,
      setData: setData
    };

    return model;

    // ----------------------------
    // functions
    // ----------------------------

    // -------------
    function getData(){
      //$log.debug( 'GETTING DATA: ' + JSON.stringify( data ));
      return data;
    }

    function setData( val ){
      //$log.debug( 'SETTING DATA: ' + JSON.stringify( val ));
      data  = val;
    }

  }//END CLASS

  // ----------------------------
  // injection
  // ----------------------------
  angular.module( 'iscDashboardTab' )
      .factory( 'iscDashboardTabModel', iscDashboardTabModel );

})();
