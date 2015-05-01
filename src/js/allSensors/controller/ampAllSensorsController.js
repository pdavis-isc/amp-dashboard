/**
 * Created by pdavis on 4/14/2015.
 */
(function(){

  'use strict';

  ampAllSensorsController.$inject = [ '$log', 'ampAllSensorsModel' ];

  function ampAllSensorsController( $log, ampAllSensorsModel ){
    $log.debug( 'ampAllSensorsController LOADED');

    // ----------------------
    // vars
    // ----------------------

    var self = this;
    self.myData = ampAllSensorsModel.getMyData();
    // ----------------------
    // functions
    // ----------------------

  } // END CLASS

  // ----------------------
  // inject
  // ----------------------

  angular.module('ampAllSensors')
    .controller('ampAllSensorsController', ampAllSensorsController );

})();
