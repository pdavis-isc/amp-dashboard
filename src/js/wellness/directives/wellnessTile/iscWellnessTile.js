/**
 * Created by satishmummadi on 12/15/14.
 */
 (function(){
  'use strict';

  iscWellnessTileDirective.$inject = ['$log'];

  function iscWellnessTileDirective( $log ){
    //$log.debug('iscWellnessTileDirective');

    // ----------------------------
    // vars
    // ----------------------------

    // ----------------------------
    // class factory
    // ----------------------------

    var directive = {
      scope: {
        item: '=data'
      },

      restrict: 'A',
      replace: true,
      transclude: false,
      templateUrl: 'wellness/directives/wellnessTile/iscWellnessTile.html'
    };

    return directive;

    // ----------------------------
    // functions
    // ----------------------------


  }

  // ----------------------------
  // inject
  // ----------------------------

  angular.module( 'iscWellness' )
  .directive( 'iscWellnessTileDirective', iscWellnessTileDirective );

})();
