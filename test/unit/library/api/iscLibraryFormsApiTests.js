
(function(){
  'use strict';

 describe('iscLibraryFormsApi', function(){
    var scope,
        httpBackend,
        api,
        model,
        response;

    var mockData = {
      "children": [
        {
          "URL": "forms/exml.pdf",
          "type": "GEN",
          "filename": "exml.pdf",
          "id": "exml",
          "image": "",
          "rank": 1,
          "text": "",
          "title": "Some HealthShare Documentation"
        },
        {
          "URL": "forms/13.1 search paths.txt",
          "type": "GEN",
          "filename": "13.1 search paths.txt",
          "id": "13.1 search paths",
          "image": "",
          "rank": 5,
          "text": "",
          "title": ""
        }
      ]
    };

    beforeEach( module('iscHsCommunityAngular') );

    // this loads all the external templates used in directives etc
    // eg, everything in **/partials/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, iscLibraryFormsApi, iscLibraryModel, $httpBackend  ){
      scope = $rootScope.$new();
      api = iscLibraryFormsApi;
      model = iscLibraryModel;
      httpBackend = $httpBackend;

      response = angular.copy( mockData );

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
    describe( 'get tests ', function(){

      it( 'should have a function get', function(){
        expect( angular.isFunction( api.get )).toBe( true );
      });
    });


  });

})();

