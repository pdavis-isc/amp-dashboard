
(function(){
  'use strict';

  describe('iscMessagesController', function(){
    var scope,
      rootScope,
      self,
      model,
      stateManager,
      controller,
      MODAL_EVENTS,
      NAV_EVENTS;

    beforeEach( module('iscHsCommunityAngular'));
    beforeEach( module('iscInfoPages'));

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, $controller, iscCustomConfigService, iscMessagesModel, iscStateManager, _NAV_EVENTS_, _MODAL_EVENTS_ ){

      var mockConfig = angular.copy( customConfig );
      iscCustomConfigService.setConfig( mockConfig );

      scope = $rootScope.$new();
      rootScope = $rootScope;
      controller = $controller('iscMessagesController as ctrl',
        {
          '$scope' : scope
        });

      self = scope.ctrl;

      model = iscMessagesModel;
      stateManager = iscStateManager;

      NAV_EVENTS = _NAV_EVENTS_;
      MODAL_EVENTS = _MODAL_EVENTS_;

    }));

    // -------------------------
    describe( 'getColumnIsSelected tests ', function(){

      it( 'should have a function getColumnIsSelected', function(){
        expect( angular.isFunction( self.getColumnIsSelected )).toBe( true );
      });

      it( 'should know if a column is selected', function(){
        var option = {descending: true, sortField: 'foo'};
        model.setCurrentSortOption( option );

        var expected  = self.getColumnIsSelected( 'foo' );
        expect( expected ).toBe( true );

        var expected  = self.getColumnIsSelected( 'bar' );
        expect( expected ).toBe( false );
      });
    });

    // -------------------------
    describe( 'openSortOptions tests ', function(){

      it( 'should have a function openSortOptions', function(){
        expect( angular.isFunction( self.openSortOptions )).toBe( true );
      });

      it( 'should broadcast the right event on openSortOptions', function(){
        var  sortDataOptions = {
          popupTitle: 'ISC_SORT',
          popupListItems: self.model.sortOptions.isInbox ? self.model.sortOptions.from : self.model.sortOptions.to,
          callback: self.onSort
        };
        spyOn( rootScope, '$broadcast' );
        self.openSortOptions();
        expect( rootScope.$broadcast).toHaveBeenCalledWith( MODAL_EVENTS.showOptionsPopup, sortDataOptions );
      });
    });


    // -------------------------
    describe( 'closeEmergencyWarning tests ', function(){
      it( 'should have a function closeEmergencyWarning', function(){
        expect( angular.isFunction( self.closeEmergencyWarning )).toBe( true );
      });

      it( 'should call the right functions on closeEmergencyWarning', function(){
        spyOn( model, 'closeEmergencyWarning' );
        self.closeEmergencyWarning();
        expect( model.closeEmergencyWarning ).toHaveBeenCalled();
      });
    });

    // -------------------------
    describe( 'setButtonClass tests ', function(){
      it( 'should have a function setButtonClass', function(){
        expect( angular.isFunction( self.setButtonClass )).toBe( true );
      });
    });

    // -------------------------
    describe( 'onInOutBoxClick tests ', function(){
      it( 'should have a function onInOutBoxClick', function(){
        expect( angular.isFunction( self.onInOutBoxClick )).toBe( true );
      });

      it( 'should reset the parent sref onInOutBoxClick', function(){
        spyOn( stateManager, 'setParentSref');
        self.onInOutBoxClick();
        expect( stateManager.setParentSref ).toHaveBeenCalledWith( '' );
      });
    });

  });
})();

