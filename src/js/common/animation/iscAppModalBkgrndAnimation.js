/**
 * Created by douglas goodman on 2/2/15.
 */

(function(){
  'use strict';

  iscAppModalBkgrndAnimation.$inject = ['$log', '$window', 'iscAnimationService', 'TweenMax', 'EASE_DUR' ];

  function iscAppModalBkgrndAnimation( $log, $window, iscAnimationService, TweenMax, EASE_DUR ){

  // --------------------
  // vars
  // --------------------

  // --------------------
  // init
  // --------------------

  // --------------------
  // class factory
  // --------------------

  var animations = {
    beforeAddClass: beforeAddClass,
    beforeRemoveClass: beforeRemoveClass
  };

  return animations;

  // --------------------
  // functions
  // --------------------

    function beforeAddClass( element, className, done ){
      //$log.debug( 'iscAppModalBkgrndAnimation.beforeAddClass' );
      if( className === 'modal-bg-anime' ){
        TweenMax.set( element, {autoAlpha:0, width: iscAnimationService.getFullWidth() + 50, height: iscAnimationService.getFullHeight() + 50, x: -25, y:-25});
        TweenMax.to( element, EASE_DUR, { ease: Power2.easeOut, autoAlpha:.75, onComplete: done });
      }
      else {
        done();
      }
    }

    function beforeRemoveClass( element, className, done ){
      //$log.debug( 'iscAppModalBkgrndAnimation.beforeRemoveClass' );
      if( className === 'modal-bg-anime' ){
        TweenMax.to( element, EASE_DUR, { ease: Power2.easeOut, autoAlpha: 0, onComplete: onRemoveComplete, onCompleteParams:[element, done] });
      }
      else {
        done();
      }
    }

    function onRemoveComplete( elem, done ){
      TweenMax.set( elem, {autoAlpha:0});
      done();
    }

  }// END CLASS

  // --------------------
  // inject
  // --------------------

  angular.module( 'isc.common' )
    .animation( '.modal-bg-anime', iscAppModalBkgrndAnimation );

})();
