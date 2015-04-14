
(function(){
  'use strict';

  describe('iscMessagesApi', function(){
    var scope,
      httpBackend,
      api;

    beforeEach( module('iscHsCommunityAngular', 'iscMessages') );


    // this loads all the external templates used in directives etc
    // eg, everything in **/partials/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, $httpBackend, iscMessagesApi ){
      scope = $rootScope.$new();
      api = iscMessagesApi;
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
    describe( 'api tests ', function(){

      it( 'should have a function inbox', function(){
        expect( angular.isFunction( api.inbox )).toBe( true );
      });

      it( 'should have a function outbox', function(){
        expect( angular.isFunction( api.outbox )).toBe( true );
      });

      it( 'should have a function archivedInbox', function(){
        expect( angular.isFunction( api.archivedInbox )).toBe( true );
      });

      it( 'should have a function archivedOutbox', function(){
        expect( angular.isFunction( api.archivedOutbox )).toBe( true );
      });

      it( 'should have a function get', function(){
        expect( angular.isFunction( api.get )).toBe( true );
      });

      it( 'should have a function unreadMessageCounts', function(){
        expect( angular.isFunction( api.unreadMessageCounts )).toBe( true );
      });
    });


  });
})();

