(function () {
  'use strict';

  describe('iscMailMessageService', function () {
    var service,
      model;

    var selectedParams = {
      oneSelected: false,
      allSelected: false
    };

    var messages = [
      {title: 'one'},
      {title: 'two'},
      {title: 'three'}
    ];

    beforeEach(module('iscHsCommunityAngular', 'iscMessages'));

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach(module('isc.templates'));

    // show $log statements
    beforeEach(module('iscHsCommunityAngular', function ($provide) {
      $provide.value('$log', console);
    }));

    beforeEach(inject(function (iscMailMessageService, iscMessagesModel) {
      service = iscMailMessageService;
      model = iscMessagesModel;
    }));

    // -------------------------
    describe('selectedParams ', function () {
      it('should have a value selectedParams', function () {
        expect(angular.isDefined( service.selectedParams )).toBe( true );
        expect( service.selectedParams ).toEqual( selectedParams );
      });
    });

    // -------------------------
    describe('onSelectAll tests ', function () {

      it('should have a function onSelectAll', function () {
        expect(angular.isFunction(service.onSelectAll)).toBe(true);
      });

      it('should selectAll, true', function () {
        model.setCurrentMail( angular.copy( messages ));
        var expected = model.getCurrentMail();

        expect( service.selectedParams ).toEqual({
          oneSelected: false,
          allSelected: false
        });

        service.onSelectAll( true );

        expected.forEach( function( message ){
          expect( message.$$selected ).toBe( true );
        });

        expect( service.selectedParams ).toEqual({
          oneSelected: true,
          allSelected: true
        });
      });

      it('should selectAll, false', function () {
        model.setCurrentMail( angular.copy( messages ));
        service.onSelectAll( true );
        var expected = model.getCurrentMail();

        expect( service.selectedParams ).toEqual({
          oneSelected: true,
          allSelected: true
        });

        service.onSelectAll( false );

        expected.forEach( function( message ){
          expect( message.$$selected ).toBe( false );
        });

        expect( service.selectedParams ).toEqual({
          oneSelected: false,
          allSelected: false
        });
      });

      it('should selectAll, undefined', function () {
        model.setCurrentMail( angular.copy( messages ));
        var expected = model.getCurrentMail();
        service.onSelectAll( true );

        expect( service.selectedParams ).toEqual({
          oneSelected: true,
          allSelected: true
        });

        service.onSelectAll();

        expected.forEach( function( message ){
          expect( message.$$selected ).toBe( false );
        });

        expect( service.selectedParams ).toEqual({
          oneSelected: false,
          allSelected: false
        });
      });

      // -------------------------
      describe('onToggleMessage ', function () {
        it('should have a function onToggleMessage', function () {
          expect(angular.isFunction( service.onToggleMessage )).toBe( true );
        });

        xit('should call the right functions onToggleMessage', function () {
          model.setCurrentMail( angular.copy( messages ));

          spyOn( service, 'setSelectedParams' );

          service.onToggleMessage();

          expect( service.setSelectedParams  ).toHaveBeenCalled();
        });
      });

      // -------------------------
      describe('setSelectedParams ', function () {
        it('should have a function setSelectedParams', function () {
          expect(angular.isFunction( service.setSelectedParams )).toBe( true );
        });

        it('should setSelectedParams, all true', function () {
          var msgs = angular.copy( messages );
          msgs[0].$$selected = true;
          msgs[1].$$selected = true;
          msgs[2].$$selected = true;

          var expected = {
            oneSelected: true,
            allSelected: true
          };

          model.setCurrentMail( msgs );

          service.setSelectedParams();

          expect( service.selectedParams  ).toEqual( expected );
        });

        it('should setSelectedParams, all false', function () {
          var msgs = angular.copy( messages );
          msgs[0].$$selected = false;
          msgs[1].$$selected = false;
          msgs[2].$$selected = false;

          var expected = {
            oneSelected: false,
            allSelected: false
          };

          model.setCurrentMail( msgs );

          service.setSelectedParams();

          expect( service.selectedParams  ).toEqual( expected );
        });

        it('should setSelectedParams, one false', function () {
          var msgs = angular.copy( messages );
          msgs[0].$$selected = true;
          msgs[1].$$selected = true;
          msgs[2].$$selected = false;

          var expected = {
            oneSelected: true,
            allSelected: false
          };

          model.setCurrentMail( msgs );

          service.setSelectedParams();

          expect( service.selectedParams  ).toEqual( expected );
        });
      });
    });

    // -------------------------
    describe('getReadMessageCount ', function () {
      it('should have a function getReadMessageCount', function () {
        expect(angular.isFunction( service.getReadMessageCount )).toBe( true );
      });

      xit('should getReadMessageCount', function () {
        var msgs = angular.copy( messages );
        msgs[0].IsRead = 1;
        msgs[1].IsRead = 1;
        msgs[2].IsRead = 0;

        model.setCurrentMail( msgs );

        var result = service.getReadMessageCount();

        expect( result ).toBe( 2 );
      });
    });

  });
})();

