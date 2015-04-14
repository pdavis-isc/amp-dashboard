
(function(){
  'use strict';

  describe('iscMailMessageController', function(){
    var scope,
      $state,
      rootScope,
      self,
      model,
      stateManager,
      controller,
      NAV_EVENTS;

    var mockMail = {
      From: 'Foo',
      To: 'Bar',
      $$parentSref: 'SREF',
      id: 123
    };

    beforeEach( module('iscHsCommunityAngular'));
    beforeEach( module('iscInfoPages'));

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( _$state_, $rootScope, $controller, iscCustomConfigService, iscMessagesModel, iscStateManager, _NAV_EVENTS_  ){

      var mockConfig = angular.copy( customConfig );
      iscCustomConfigService.setConfig( mockConfig );

      $state = _$state_;
      scope = $rootScope.$new();
      scope.mail = angular.copy( mockMail );

      rootScope = $rootScope;
      controller = $controller('iscMailMessageController as ctrl',
        {
          '$scope' : scope
        });

      self = scope.ctrl;

      model = iscMessagesModel;
      stateManager = iscStateManager;

      NAV_EVENTS = _NAV_EVENTS_;
    }));

    // -------------------------
    describe( 'toggleSelected tests ', function(){

      it( 'should have a function toggleSelected', function(){
        expect( angular.isFunction( self.toggleSelected )).toBe( true );
      });

      it( 'should toggle selected', function(){
        scope.onToggleMessage = function(){}; //mock it on this test

        spyOn( scope, 'onToggleMessage' );

        self.toggleSelected( true );
        expect( self.mail.$$selected ).toBe( true );
        expect( scope.onToggleMessage ).toHaveBeenCalledWith( {mail: self.mail} );

        self.toggleSelected( false );
        expect( self.mail.$$selected ).toBe( false );
        expect( scope.onToggleMessage ).toHaveBeenCalledWith( {mail: self.mail} );
      });
    });

    // -------------------------
    describe( 'onSelectMessage tests ', function(){
      it( 'should have a function onSelectMessage', function(){
        expect( angular.isFunction( self.onSelectMessage )).toBe( true );
      });

      it( 'should know what to do onSelectMessage', function(){
        spyOn( $state, 'go' );
        spyOn( stateManager, 'setParentSref' );

        self.onSelectMessage();
        expect( $state.go ).toHaveBeenCalledWith( 'index.messages.message', {id: self.mail.id} );
        expect( stateManager.setParentSref ).toHaveBeenCalledWith( self.mail.$$parentSref );
      });
    });

  });
})();

