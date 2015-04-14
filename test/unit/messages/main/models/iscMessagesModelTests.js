
(function(){
  'use strict';

  describe('iscMessagesModel', function(){
    var model;

    var sortOptionsFrom = [
      {label: 'ISC_DATE', sortField:'Time', descending: true},
      {label: 'ISC_DATE_DESC', sortField:'Time', descending: false},
      {label: 'ISC_FROM', sortField:'From', descending: true},
      {label: 'ISC_FROM_DESC', sortField:'From', descending: false},
      {label: 'ISC_SUBJECT', sortField:'Subject', descending: true},
      {label: 'ISC_SUBJECT_DESC', sortField:'Subject', descending: false}
    ];

    var sortOptionsTo = [
      {label: 'ISC_DATE', sortField:'Time', descending: false},
      {label: 'ISC_DATE_DESC', sortField:'Time', descending: true},
      {label: 'ISC_TO', sortField:'To', descending: false},
      {label: 'ISC_TO_DESC', sortField:'To', descending: true},
      {label: 'ISC_SUBJECT', sortField:'Subject', descending: true},
      {label: 'ISC_SUBJECT_DESC', sortField:'Subject', descending: true}
    ];

    var sortOptions = {
      from: sortOptionsFrom,
      to: sortOptionsTo,
      current: null,
      isInbox: false,
      sortField: '',
      descending: true
    };

    beforeEach( module('iscHsCommunityAngular', 'iscMessages') );

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function(iscMessagesModel  ){
      model = iscMessagesModel;
    }));

    // -------------------------
    describe( 'sortOptions tests ', function(){

      it( 'should have a value sortOptions', function(){
        expect( angular.isDefined( model.sortOptions )).toBe( true );
        expect(  model.sortOptions ).toEqual( sortOptions );
      });

      it( 'should have a function isCurrentSortOption', function(){
        expect( angular.isFunction( model.isCurrentSortOption )).toBe( true );
      });

      it( 'should have a function setCurrentSortOption', function(){
        expect( angular.isFunction( model.setCurrentSortOption )).toBe( true );
      });

      it( 'should know if a value the current sort option', function(){
        var current = {foo: 'bar'};

        var expected = model.isCurrentSortOption( current );
        expect( expected ).toBe( false );

        model.setCurrentSortOption( current );
        var expected = model.isCurrentSortOption( current );
        expect( expected ).toBe( true );

      });

      it( 'should set the values correctly when you set current sort option', function(){
        var option = {descending: true, sortField: 'foo'};

        model.setCurrentSortOption( option );
        var expected = model.isCurrentSortOption( option );

        expect( expected ).toBe( true );
        expect( model.sortOptions.descending ).toBe( true );
        expect( model.sortOptions.sortField ).toBe( 'foo' );
      });
    });

    // -------------------------
    describe( 'getColumnIsSelected tests ', function(){

      it( 'should have a function getColumnIsSelected', function(){
        expect( angular.isFunction( model.getColumnIsSelected )).toBe( true );
      });

      it( 'should know if a column is selected', function(){
        var option = {descending: true, sortField: 'foo'};

        model.setCurrentSortOption( option );

        var expected = model.getColumnIsSelected( 'foo' );
        expect( expected ).toBe( true );

        var expected = model.getColumnIsSelected( 'bar' );
        expect( expected ).toBe( false );
      });
    });

    // -------------------------
    describe( 'get / setCurrentMail tests ', function(){

      it( 'should have a function getCurrentMail', function(){
        expect( angular.isFunction( model.getCurrentMail )).toBe( true );
      });

      it( 'should have a function setCurrentMail', function(){
        expect( angular.isFunction( model.setCurrentMail )).toBe( true );
      });

      it( 'should get and set correctly', function(){
        var vals = {foo: 'bar'};

        expect( model.getCurrentMail() ).toBe( undefined );
        model.setCurrentMail( vals );

        var expected = model.getCurrentMail();
        expect( expected ).toBe( vals );
      });
    });

    // -------------------------
    describe( 'get / setShowEmergencyWarning tests ', function(){

      it( 'should have a function getShowEmergencyWarning', function(){
        expect( angular.isFunction( model.getShowEmergencyWarning )).toBe( true );
      });

      it( 'should have a function setShowEmergencyWarning', function(){
        expect( angular.isFunction( model.setShowEmergencyWarning )).toBe( true );
      });

      it( 'should get and set correctly', function(){
        model.setShowEmergencyWarning( true );
        var expected = model.getShowEmergencyWarning();
        expect( expected ).toBe( true );

        model.setShowEmergencyWarning( false );
        var expected = model.getShowEmergencyWarning();
        expect( expected ).toBe( false );
      });
    });

    // -------------------------
    describe( 'get / setUnreadMessageCounts tests ', function(){

      it( 'should have a function getUnreadMessageCounts', function(){
        expect( angular.isFunction( model.getUnreadMessageCounts )).toBe( true );
      });

      it( 'should have a function setUnreadMessageCounts', function(){
        expect( angular.isFunction( model.setUnreadMessageCounts )).toBe( true );
      });

      it( 'should have a function getUnreadMessageCount', function(){
        expect( angular.isFunction( model.getUnreadMessageCount )).toBe( true );
      });

      it( 'should get and set correctly', function(){
        var counts = {foo:'bar'};
        model.setUnreadMessageCounts( counts );
        var expected = model.getUnreadMessageCounts();
        expect( expected ).toBe( counts );
      });

      it( 'should get counts correctly', function(){
        var counts = {
          inbox: 1,
          outbox: 2,
          archivedInbox: 3,
          archivedOutbox: 4
        };
        model.setUnreadMessageCounts( counts );

        var expected = model.getUnreadMessageCount( 'index.messages.inbox');
        expect( expected ).toBe( 1 );

        var expected = model.getUnreadMessageCount( 'index.messages.outbox');
        expect( expected ).toBe( 2 );

        var expected = model.getUnreadMessageCount( 'index.messages.archivedInbox');
        expect( expected ).toBe( 3 );

        var expected = model.getUnreadMessageCount( 'index.messages.archivedOutbox');
        expect( expected ).toBe( 4 );

        var expected = model.getUnreadMessageCount( 'foobar');
        expect( expected ).toBe( 0 );
      });
    });

  });
})();

