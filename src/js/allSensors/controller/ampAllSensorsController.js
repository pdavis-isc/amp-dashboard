/**
 * Created by pdavis on 5/1/2015.
 */

(function(){

    'use strict';

    ampAllSensorsController.$inject = [ '$log', 'ampAllSensorsModel' ];

    function ampAllSensorsController( $log, ampAllSensorsModel ){
        //$log.debug( 'ampAllSensorsController LOADED');

        // ----------------------
        // vars
        // ----------------------

        var self = this;
        self.sensors = ampAllSensorsModel.getMyData().sensorArray;
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
