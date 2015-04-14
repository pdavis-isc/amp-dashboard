
(function(){
  'use strict';

  describe('iscAuthenticationApi', function(){
    var scope,
      httpBackend,
      customConfigService,
      api,
      state,
      model,
      response;

    var mockData = {
      "ChangePassword": 0,
      "SessionTimeout": 3600,
      "UserData": {
        "FirstName": "Adam",
        "FullName": "Adam Everyman",
        "LastName": "Everyman",
        "ProxyOnly": 0
      },
      "reload": 0
    };

    beforeEach( module('iscHsCommunityAngular', 'isc.common') );

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', 'isc.common', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, $httpBackend, $state, iscAuthenticationApi, iscSessionModel, iscCustomConfigService  ){
      scope = $rootScope.$new();
      api = iscAuthenticationApi;
      model = iscSessionModel;
      httpBackend = $httpBackend;
      state  = $state;
      customConfigService = iscCustomConfigService;

      response = angular.copy( mockData );

      spyOn( customConfigService, 'getBaseUrl').andReturn( customConfig.baseUrl );

      // dont worry about calls to assets
      httpBackend.when( 'GET', 'assets/i18n/en_US.json' )
        .respond( 200, {} );

      // mock calls to the config
      httpBackend.when( 'GET', 'assets/configuration/configFile.json' )
        .respond( 200, customConfig );

      // dont worry about calls to home page mocks
      httpBackend.when( 'GET', 'assets/mockData/home/mockPatientData.json' )
          .respond( 200, {} );

      // dont worry about calls to home page mocks
      httpBackend.when( 'GET', 'assets/mockData/home/mockPanelData.json' )
          .respond( 200, {} );

    }));

    // -------------------------
    describe( 'login tests ', function(){

      it( 'should have a function login', function(){
        expect( angular.isFunction( api.login )).toBe( true );
      });

      it( 'should update the model after get', function(){
        httpBackend.when( 'POST', 'http://hscommdev.iscinternal.com/public/api/v1/auth/login' )
          .respond( 200, response );

        spyOn( model, 'create' );

        api.login();
        httpBackend.flush();

        expect( model.create ).toHaveBeenCalledWith( response );
      });
    });

    // -------------------------
    describe( 'logout tests ', function(){

      it( 'should have a function logout', function(){
        expect( angular.isFunction( api.logout )).toBe( true );
      });

      it( 'should destroy the session and go to the login page after logout', function(){
        httpBackend.when( 'POST', 'http://hscommdev.iscinternal.com/public/api/v1/auth/logout' )
          .respond( 200, {} );

        spyOn( model, 'destroy' );
        spyOn( state, 'go' );

        api.logout();
        httpBackend.flush();

        expect( model.destroy ).toHaveBeenCalled();
        expect( state.go ).toHaveBeenCalledWith( 'index.login' );
      });
    });


  });

})();

