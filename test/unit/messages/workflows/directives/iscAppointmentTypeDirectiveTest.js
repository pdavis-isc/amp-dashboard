
(function(){
  'use strict';

  describe('iscAppointmentTypeDirective', function(){
    var scope,
      MODAL_EVENTS,
      rootScope,
       isolateScope,
      httpBackend,
      element;

    var mockModel = {
      appointmentType: {}
    };

    var defaultAppointmentType = {
      label: 'ISC_SELECT_APPOINTMENT_TYPE',
      allTypes: [],
      selectedType: null
    };

    var primaryCareTypes = [
      {id: 'p1', label: 'ISC_ANNUAL_PHYSICAL', reason: '', reasonRequired: false},
      {id: 'p2', label: 'ISC_NEW_CONCERN', reason: '', reasonRequired: true},
      {id: 'p3', label: 'ISC_FOLLOW_UP', reason: '', reasonRequired: true},
      {id: 'p4', label: 'ISC_OTHER', reason: '', reasonRequired: true}
    ];

    var specialistTypes = [
      {id: 's1', label: 'ISC_NEW_CONCERN', reason: '', reasonRequired: true},
      {id: 's2', label: 'ISC_FOLLOW_UP', reason: '', reasonRequired: true},
      {id: 's3', label: 'ISC_OTHER', reason: '', reasonRequired: true}
    ];

    var labworkTypes = [
      {id: 'l1', label: 'ISC_REFERRAL', reason: '', reasonRequired: true},
      {id: 'l2', label: 'ISC_FOLLOW_UP', reason: '', reasonRequired: true},
      {id: 'l3', label: 'ISC_OTHER', reason: '', reasonRequired: true}
    ];

    var appointmentTypes = [
      {
        id: 'a1',
        label: 'ISC_PRIMARY_CARE',
        allTypes: primaryCareTypes,
        selectedType: {}
      },
      {
        id: 'a2',
        label: 'ISC_SPECIALIST',
        allTypes: specialistTypes,
        selectedType:{}
      },
      {
        id: 'a3',
        label: 'ISC_LABWORK',
        allTypes: labworkTypes,
        selectedType: {}
      }
    ];

    var html = '<isc-appointment-type-directive model-data="appointmentTypeData" on-change="isComplete( valid )"></isc-appointment-type-directive>';
    //var html = '<isc-appointment-type-directive selected-item="scope.selectedItem" step-number="4" step-title="ISC_STEP_APPOINTMENT" on-change="scope.isComplete( valid )"></isc-appointment-type-directive>';

    beforeEach( module('iscHsCommunityAngular', 'iscMessages') );

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function( $rootScope, $compile, $httpBackend, _MODAL_EVENTS_  ){
      scope = $rootScope.$new();
      rootScope = $rootScope;

      scope.appointmentTypeData = mockModel;
      scope.isComplete = function( val ){
        return val;
      };

      MODAL_EVENTS = _MODAL_EVENTS_;

      httpBackend = $httpBackend;

      // dont worry about calls to assets
      httpBackend.when( 'GET', 'assets/i18n/en_US.json' )
        .respond( 200, {} );

      element = $compile( html )( scope );
      scope.$digest();

      isolateScope = element.isolateScope();

    }));

    // -------------------------
    describe( 'setup tests ', function(){

      it("should set a default value for selectedItem", function() {
        expect( isolateScope.modelData ).toBe( mockModel );
      });

      it("should set a default value for showRadioButtons", function() {
        expect( isolateScope.showRadioButtons ).toBe( false );
      });

    });

    // -------------------------
    describe( 'showAppointmentTypes tests ', function(){

      it("should have a function showAppointmentTypes", function() {
        expect( angular.isFunction( isolateScope.showAppointmentTypes )).toBe( true );
      });

      it("should broadcast an event after showAppointmentTypes", function() {

        var eventData = {
          popupTitle: 'ISC_SELECT_APPOINTMENT_TYPE',
          popupListItems: appointmentTypes,
          callback: isolateScope.onSelect
        };

        spyOn( rootScope, '$broadcast' );
        isolateScope.showAppointmentTypes();

        expect( rootScope.$broadcast ).toHaveBeenCalledWith( MODAL_EVENTS.showOptionsPopup, eventData );
      });
    });

    // -------------------------
    describe( 'onSelect tests ', function(){

      it("should have a function onSelect", function() {
        expect( angular.isFunction( isolateScope.onSelect )).toBe( true );
      });

      it("should know what to do onSelect, with types", function() {
        isolateScope.showRadioButtons = false;

        var selection = {label: 'foo', allTypes: ['a','b','c']};
        spyOn( isolateScope, 'doValidation').andReturn( false );

        isolateScope.onSelect( selection );

        expect( isolateScope.modelData.appointmentType ).toBe( selection );
        expect( isolateScope.showRadioButtons ).toBe( true );
        expect( isolateScope.doValidation ).toHaveBeenCalled();
      });

      it("should know what to do onSelect, no types", function() {
        isolateScope.showRadioButtons = false;

        var selection = {label: 'foo', allTypes: []};
        spyOn( isolateScope, 'doValidation').andReturn( false );

        isolateScope.onSelect( selection );

        expect( isolateScope.modelData.appointmentType ).toBe( selection );
        expect( isolateScope.showRadioButtons ).toBe( false );
        expect( isolateScope.doValidation ).toHaveBeenCalled();
      });
    });

    // -------------------------
    describe( 'validation tests ', function(){

      it("should have a function doValidation", function() {
        expect( angular.isFunction( isolateScope.doValidation )).toBe( true );
      });

      it("should have a function isValid", function() {
        expect( angular.isFunction( isolateScope.isValid )).toBe( true );
      });

      it("should have a function onChange", function() {
        expect( angular.isFunction( isolateScope.onChange )).toBe( true );
      });

      it("should know how to doValidation", function() {
        spyOn( isolateScope, 'onChange' );
        spyOn( isolateScope, 'isValid' ).andReturn( true );

        isolateScope.doValidation();
        expect( isolateScope.onChange ).toHaveBeenCalledWith( {valid: true} );
      });

      it("should know if the form isValid - no selectedType ", function() {
        isolateScope.modelData = angular.copy( mockModel );

        var valid = isolateScope.isValid();
        expect( valid ).toBe( false );
      });

      it("should know if the form isValid - selectedType with no reason required", function() {
        isolateScope.modelData = angular.copy( mockModel );

        var selectedType = {id: 'p1', label: 'ISC_ANNUAL_PHYSICAL', reason: '', reasonRequired: false};
        isolateScope.modelData.appointmentType = appointmentTypes[0];
        isolateScope.modelData.appointmentType.selectedType = selectedType;

        var valid = isolateScope.isValid();
        expect( valid ).toBe( true );
      });

      it("should know if the form isValid - selectedType with reason required", function() {
        isolateScope.modelData = angular.copy( mockModel );

        var selectedType = {id: 'p1', label: 'ISC_ANNUAL_PHYSICAL', reason: '', reasonRequired: true};
        isolateScope.modelData.appointmentType = appointmentTypes[0];
        isolateScope.modelData.appointmentType.selectedType = selectedType;

        var valid = isolateScope.isValid();
        expect( valid ).toBe( false );

        isolateScope.modelData.appointmentType.selectedType.reason = 'foobar';
        var valid = isolateScope.isValid();
        expect( valid ).toBe( true );
      });
    });
  });
})();

