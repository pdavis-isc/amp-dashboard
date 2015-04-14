
(function(){
  'use strict';

  describe('iscInfoPagesController', function(){
    var scope,
      self,
      rootScope,
      window,
      model,
      enrollApi,
      forgotApi,
      controller;

    beforeEach( module('iscHsCommunityAngular'));
    beforeEach( module('iscInfoPages'));

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, $window, $controller, iscEnrollApi, iscForgotUsernameOrPasswordApi, iscCustomConfigService, iscInfoPagesModel  ){

      var mockConfig = angular.copy( customConfig );
      iscCustomConfigService.setConfig( mockConfig );

      var mockData = angular.copy( infoPagesData );
      model  = iscInfoPagesModel;
      model.setData( mockData );

      rootScope = $rootScope;
      scope = $rootScope.$new();
      window = $window;

      controller = $controller('iscInfoPagesController as ctrl',
        {
          '$scope' : scope
        });

      self = scope.ctrl;

      enrollApi = iscEnrollApi;
      forgotApi = iscForgotUsernameOrPasswordApi;
    }));

    // -------------------------
    describe( 'datepicker tests ', function(){

      it( 'should have a function openDate', function(){
        expect( angular.isFunction( self.openDate )).toBe( true );
      });

      it( 'should have a function openDate', function(){
        expect( angular.isFunction( self.openDate )).toBe( true );
      });
    });

    // -------------------------
    describe( 'forgot username or password tests ', function(){

      it( 'should have a function submitForgotData', function(){
        expect( angular.isFunction( self.submitForgotData )).toBe( true );
      });

      it( 'should know when to call forgotusername', function(){
        spyOn( forgotApi, 'forgotpassword' );
        spyOn( forgotApi, 'forgotusername' );

        model.forgotData.$$forgotPassword = false;

        self.submitForgotData();
        expect( forgotApi.forgotpassword ).not.toHaveBeenCalled();
        expect( forgotApi.forgotusername ).toHaveBeenCalledWith( model.forgotData );
      });

      it( 'should know when to call forgotpassword', function(){
        spyOn( forgotApi, 'forgotpassword' );
        spyOn( forgotApi, 'forgotusername' );

        model.forgotData.$$forgotPassword = true;

        self.submitForgotData();
        expect( forgotApi.forgotpassword ).toHaveBeenCalledWith( model.forgotData );
        expect( forgotApi.forgotusername ).not.toHaveBeenCalled();
      });
    });

    // -------------------------
    describe( 'getForgotSubmitDisabled tests ', function(){

      it( 'should have a function getForgotSubmitDisabled', function(){
        expect( angular.isFunction( self.getForgotSubmitDisabled )).toBe( true );
      });

      it( 'should know when the button should be disabed', function(){
        model.forgotData.$$forgotPassword = false;
        model.forgotData.SendUsername = false;
        var disabled = self.getForgotSubmitDisabled( true );
        expect( disabled ).toBe( true );

        model.forgotData.$$forgotPassword = true;
        model.forgotData.SendUsername = true;
        var disabled = self.getForgotSubmitDisabled( true );
        expect( disabled ).toBe( true );

        model.forgotData.$$forgotPassword = false;
        model.forgotData.SendUsername = false;
        var disabled = self.getForgotSubmitDisabled( false );
        expect( disabled ).toBe( true );

        model.forgotData.$$forgotPassword = true;
        model.forgotData.SendUsername = false;
        var disabled = self.getForgotSubmitDisabled( false );
        expect( disabled ).toBe( false );

        model.forgotData.$$forgotPassword = false;
        model.forgotData.SendUsername = true;
        var disabled = self.getForgotSubmitDisabled( false );
        expect( disabled ).toBe( false );

        model.forgotData.$$forgotPassword = true;
        model.forgotData.SendUsername = true;
        var disabled = self.getForgotSubmitDisabled( false );
        expect( disabled ).toBe( false );
      });
    });

    // -------------------------
    describe( 'enroll tests ', function(){

      it( 'should have a function enroll', function(){
        expect( angular.isFunction( self.enroll )).toBe( true );
      });

      it( 'should have a function acceptTermsAndConditions', function(){
        expect( angular.isFunction( self.acceptTermsAndConditions )).toBe( true );
      });

      it( 'should know what to do on enroll', function(){
        self.warningDialogIsShowing = true;
        spyOn( enrollApi, 'enrollSelf' );

        self.enroll();
        expect( enrollApi.enrollSelf ).toHaveBeenCalledWith( model.enrollOptions );
      });

      it( 'should accept the terms and conditions', function(){
        model.enrollOptions.TermsAccepted = false;

        self.acceptTermsAndConditions();
        expect( model.enrollOptions.TermsAccepted ).toBe( true );
      });
    });

    // -------------------------
    describe( 'activateAccount tests ', function(){

      it( 'should have a function activateAccount', function(){
        expect( angular.isFunction( self.activateAccount )).toBe( true );
      });
    });

    // -------------------------
    describe( 'back tests ', function(){

      it( 'should have a function back', function(){
        expect( angular.isFunction( self.back )).toBe( true );
      });

      it( 'should accept the terms and conditions', function(){
        spyOn( window.history, 'back' );

        self.back();
        expect( window.history.back ).toHaveBeenCalled();
      });
    });

  });
})();

