(function(){

  'use strict';

  sampleBloodPressureController.$inject = [ '$log', '$scope' ];

  function sampleBloodPressureController( $log, $scope ){
//    //$log.debug( 'sampleBloodPressureController LOADED');

    // ----------------------------
    // vars
    // ----------------------------

    $scope.sync_list = ["this is default"];

    $scope.product_choices = [{ name:"Cache", value:"Cache"},{name:"Ensemble", value:"Ensemble"},
      {name:"HealthShare", value:"HealthShare"},{name:"EnterpriseManager", value:"EnterpriseManager"}];
    $scope.isc_product = $scope.product_choices[0];
    $scope.machines = [{"machineName":"default machine 1","isChecked":true},
      {"machineName":"default machine 2", "isChecked":true}];
    $scope.instance = ["default instance"];
    $scope.comments = "default comments";
    $scope.kit = "default kit";
    $scope.returnJSON = {"Kit": $scope.kit, "Product": $scope.isc_product,
      "SyncList": $scope.sync_list, "Machines": $scope.machines,
      "Instance": $scope.instance, "Comments": $scope.comments};


    // ----------------------------
    // functions
    // ----------------------------

    $scope.submitMachine = function(){
      console.log("submit!");
      $scope.machines.push({"machineName":$scope.machine_to_submit,"isChecked":true});
      $scope.machine_to_submit="";
    };


    $scope.mySubmit = function() {

      $scope.returnJSON = {
        "SyncList": $scope.sync_list, "Product": $scope.isc_product,
        "Machines": $scope.machines, "Instance": $scope.instance,
        "Comments": $scope.comments, "Kit": $scope.kit
      };
      console.log('my val is ', $scope.returnJSON);
    };









  }// END CLASS


  // ----------------------------
  // injection
  // ----------------------------
  angular.module('sampleBloodPressure')
      .controller('sampleBloodPressureController', sampleBloodPressureController );

})();
