
(function(){
  'use strict';

  describe('iscUserRoleHelper', function(){
    var scope,
      helper;

    var user = {
      "FirstName": "Adam",
      "FullName": "Adam Everyman",
      "LastName": "Everyman",
      "ProxyOnly": 0
    };

    var proxy = {
      "FirstName": "Adam",
      "FullName": "Adam Everyman",
      "LastName": "Everyman",
      "ProxyOnly": 1
    };

    beforeEach( module('iscHsCommunityAngular') );
    beforeEach( module('iscShared') );

    // this loads all the external templates used in directives etc
    // eg, everything in **/partials/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, iscUserRoleHelper  ){
      scope = $rootScope.$new();
      helper = iscUserRoleHelper;
    }));

    // -------------------------
    describe( 'setRoleForUser tests ', function(){

      it( 'should have a function setRoleForUser', function(){
        expect( angular.isFunction( helper.setRoleForUser )).toBe( true );
      });

      it( 'should set the correct role for a user - user', function(){
        helper.setRoleForUser( user );
        expect( user.userRole ).toBe( 'user' );
      });

      it( 'should set the correct role for a user - proxy', function(){
        helper.setRoleForUser( proxy );
        expect( proxy.userRole ).toBe( 'proxy' );
      });
    });

  });
})();

