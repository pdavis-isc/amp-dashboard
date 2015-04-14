
(function(){
  'use strict';

 describe('iscCalendarDataApi', function(){
    var scope,
        httpBackend,
        api,
        model,
        response;

    beforeEach( module('iscHsCommunityAngular') );

    // this loads all the external templates used in directives etc
    // eg, everything in **/partials/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, iscCalendarDataApi, iscCalendarModel, $httpBackend  ){
      scope = $rootScope.$new();
      api = iscCalendarDataApi;
      model = iscCalendarModel;
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
    describe( 'events tests ', function(){

      it( 'should have a function events', function(){
        expect( angular.isFunction( api.events )).toBe( true );
      });

    });


  });

})();

