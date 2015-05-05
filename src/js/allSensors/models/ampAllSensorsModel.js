/**
 * Created by pdavis on 5/1/2015.
 */
/**
 * Created by pdavis on 4/14/2015.
 */

(function(){
    'use strict';

    ampAllSensorsModel.$inject = [ '$log' ];

    function ampAllSensorsModel( $log ){
    //$log.debug( 'ampAllSensorsModel LOADED');

        // ----------------------------
        // vars
        // ----------------------------
        var myData;
        // ----------------------------
        // class factory
        // ----------------------------
        var model = {
            getMyData: getMyData,
            setMyData: setMyData
        };

        return model;

        // ----------------------------
        // functions
        // ----------------------------

        function getMyData() {
            //$log.debug('ampAllSensorsModel.getMyData');
            return myData;
        }

        function setMyData(val) {
            //$log.debug('ampAllSensorsModel.setMyData',val);
            myData = val;
        }


    }// END CLASS

    // ----------------------------
    // injection
    // ----------------------------
    angular.module( 'ampAllSensors' )
        .factory( 'ampAllSensorsModel', ampAllSensorsModel );

})();
