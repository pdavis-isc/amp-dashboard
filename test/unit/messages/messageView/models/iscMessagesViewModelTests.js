
(function(){
  'use strict';

  describe('iscMessageViewModel', function(){
    var model;

    var mockCurrentMailReply = {
      to: '',
      from: '',
      subject: '',
      body: ''
    };

    var mockMail = {
      To: 'Adam Everyman',
      From: 'Mayo Clinic',
      Subject: 'Subject'
    };

    beforeEach( module('iscHsCommunityAngular', 'iscMessages') );

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function(iscMessageViewModel  ){
      model = iscMessageViewModel;
    }));

    // -------------------------
    describe( 'get / setSelectedMail tests ', function(){

      it( 'should have a value getSelectedMail', function(){
        expect( angular.isDefined( model.getSelectedMail )).toBe( true );
      });

      it( 'should have a value setSelectedMail', function(){
        expect( angular.isDefined( model.setSelectedMail )).toBe( true );
      });

      it( 'should get and set selected mail', function(){
        var mail = {foo: 'bar'};

        var expected = model.getSelectedMail();
        expect( expected ).toBe( undefined );

        model.setSelectedMail( mail );
        var expected = model.getSelectedMail();
        expect( expected ).toBe( mail );
      });
    });

    // -------------------------
    describe( 'getCurrentMailReply tests ', function(){

      it( 'should have a value getCurrentMailReply', function(){
        expect( angular.isDefined( model.getCurrentMailReply )).toBe( true );
      });

      it( 'should getCurrentMailReply', function(){
        var expected = model.getCurrentMailReply();
        expect( expected.to ).toBe( '' );
        expect( expected.from ).toBe( '' );
        expect( expected.subject ).toBe( '' );
      });
    });

    // -------------------------
    describe( 'initReply tests ', function(){

      it( 'should have a value initReply', function(){
        expect( angular.isDefined( model.initReply )).toBe( true );
      });

      it( 'should initReply', function(){
        model.initReply( mockMail );
        var expected = model.getCurrentMailReply();
        expect( expected.to ).toBe( mockMail.From );
        expect( expected.from ).toBe( mockMail.To );
        expect( expected.subject ).toBe( 'RE: ' + mockMail.Subject );
      });
    });

    // -------------------------
    describe( 'replyIsValid tests ', function(){

      it( 'should have a value replyIsValid', function(){
        expect( angular.isDefined( model.replyIsValid )).toBe( true );
      });

      it( 'should know whether a replyIsValid', function(){
        var expected = model.replyIsValid();
        expect( expected ).toBe( false );

        model.initReply( mockMail );
        var expected = model.replyIsValid();
        expect( expected ).toBe( false );
      });
    });


  });
})();

