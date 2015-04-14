(function(){

  'use strict';

  iscDashboardTabController.$inject = [ '$log', '$scope', 'iscUiHelper', 'iscCustomConfigService', 'iscDashboardTabModel', 'AUTH_EVENTS' ];

  function iscDashboardTabController( $log, $scope, iscCustomConfigService, iscUiHelper, iscDashboardTabModel, AUTH_EVENTS ){
//    //$log.debug( 'iscDashboardTabController LOADED');

    var self = this;

    // -----------------------------
    // models and services
    // -----------------------------
    self.model = iscDashboardTabModel;
    self.iscUiHelper = iscUiHelper;

    // -----------------------------
    // secondary nav
    // -----------------------------
    self.secondaryNav = _.toArray( iscCustomConfigService.getDashboardTabSecondaryNav() );

    // -----------------------------
    // translation params
    // -----------------------------
    self.translationParams = {
    };

    // -----------------------------
    // listeners
    // -----------------------------


  }//END CLASS

  angular.module('iscDashboardTab')
      .controller('iscDashboardTabController', iscDashboardTabController );

})();
