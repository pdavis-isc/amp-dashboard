
(function(){
  'use strict';

 describe('iscForgotUsernameOrPasswordApi', function(){
   var scope,
     httpBackend,
     api;

    beforeEach( module('iscHsCommunityAngular') );
    beforeEach( module('iscInfoPages') );


    // this loads all the external templates used in directives etc
    // eg, everything in **/partials/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, $httpBackend, iscForgotUsernameOrPasswordApi ){
      scope = $rootScope.$new();
      api = iscForgotUsernameOrPasswordApi;
      httpBackend = $httpBackend;

      // dont worry about calls to assets
      httpBackend.when( 'GET', 'assets/i18n/en_US.json' )
          .respond( 200, {} );

      // mock calls to the config
      httpBackend.when( 'GET', 'assets/configuration/configFile.json' )
          .respond( 200, customConfig );

      // dont worry about calls to home page mocks
      httpBackend.when( 'GET', 'assets/mockData/home/mockPatientData.json' )
          .respond( 200, {} );
    }));

   // -------------------------
   describe( 'forgotpassword tests ', function(){

     it( 'should have a function forgotpassword', function(){
       expect( angular.isFunction( api.forgotpassword )).toBe( true );
     });
   });

   // -------------------------
   describe( 'forgotusername tests ', function(){

     it( 'should have a function forgotusername', function(){
       expect( angular.isFunction( api.forgotusername )).toBe( true );
     });
   });


  });
})();

