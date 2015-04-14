
(function(){
  'use strict';

  describe('iscMessageViewController', function(){
    var scope,
      $state,
      rootScope,
      self,
      messagesModel,
      model,
      stateManager,
      controller,
      NAV_EVENTS;

    var mockMail = {
      From: 'Foo',
      To: 'Bar',
      Subject: 'Subj',
      $$parentSref: 'SREF',
      id: 123
    };

    beforeEach( module('iscHsCommunityAngular'));
    beforeEach( module('iscInfoPages'));

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( _$state_, $rootScope, $controller, iscCustomConfigService, iscMessageViewModel, iscMessagesModel, iscStateManager  ){

      var mockConfig = angular.copy( customConfig );
      iscCustomConfigService.setConfig( mockConfig );

      $state = _$state_;
      scope = $rootScope.$new();

      model = iscMessageViewModel;
      model.setSelectedMail( angular.copy( mockMail ));
      messagesModel = iscMessagesModel;
      stateManager = iscStateManager;

      rootScope = $rootScope;
      controller = $controller('iscMessageViewController as ctrl',
        {
          '$scope' : scope
        });

      self = scope.ctrl;
    }));

    // -------------------------
    describe( 'init tests ', function(){

      it( 'should have a function init', function(){
        expect( angular.isFunction( self.init )).toBe( true );
      });

      it( 'should init', function(){
        spyOn( model, 'initReply');

        self.init();
        expect( model.initReply ).toHaveBeenCalledWith( mockMail );

      });
    });

    // -------------------------
    describe( 'sendEnabled tests ', function(){

      it( 'should have a function sendEnabled', function(){
        expect( angular.isFunction( self.sendEnabled )).toBe( true );
      });

      it( 'should know when sendEnabled', function(){
        spyOn( model, 'replyIsValid');

        self.sendEnabled();
        expect( model.replyIsValid ).toHaveBeenCalled();

      });
    });

    // -------------------------
    describe( 'closeEmergencyWarning tests ', function(){

      it( 'should have a function closeEmergencyWarning', function(){
        expect( angular.isFunction( self.closeEmergencyWarning )).toBe( true );
      });

      it( 'should closeEmergencyWarning', function(){
        scope.onToggleMessage = function(){}; //mock it on this test

        self.showEmergencyWarning = true;

        spyOn( messagesModel, 'closeEmergencyWarning').andReturn( false );

        self.closeEmergencyWarning();

        expect( messagesModel.closeEmergencyWarning ).toHaveBeenCalled();
        expect( self.showEmergencyWarning ).toBe( false );

      });
    });

  });
})();

