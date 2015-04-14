
(function(){
  'use strict';

  describe('iscMyAccountApi', function(){
    var scope,
      httpBackend,
      model;


    beforeEach( module('iscHsCommunityAngular') );

    // this loads all the external templates used in directives etc
    // eg, everything in **/partials/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, iscMyAccountModel,$httpBackend  ){
      scope = $rootScope.$new();
      model = iscMyAccountModel;
      httpBackend = $httpBackend;

      //response = angular.copy( mockData );

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
    describe( 'check methods ', function(){

      it( 'should have a function getHistory', function(){
        expect( angular.isFunction( model.getHistory )).toBe( true );
      });

      it( 'should have a function getSummary', function(){
        expect( angular.isFunction( model.getAccountSummary )).toBe( true );
      });

      it( 'should have a function gettProxies', function(){
        expect( angular.isFunction( model.getAccountProxies )).toBe( true );
      });


      it( 'should have a function setHistory', function(){
        expect( angular.isFunction( model.setHistory )).toBe( true );
      });

      it( 'should have a function setSummary', function(){
        expect( angular.isFunction( model.setAccountSummary )).toBe( true );
      });

      it( 'should have a function getProxies', function(){
        expect( angular.isFunction( model.setAccountProxies )).toBe( true );
      });


      it( 'should set correct history', function(){


      model.setHistory('foo');

        expect(model.getHistory()).toEqual('foo');


      });

      it( 'should set correct summary', function(){

        model.setAccountSummary('foo');

        expect(model.getAccountSummary()).toEqual('foo');



      });

      it( 'should set correct getProxies', function(){

        model.setAccountProxies('foo');

        expect(model.getAccountProxies()).toEqual('foo');


      });



    });


  });

})();

