
(function(){
  'use strict';

  describe('iscCalendarModel', function(){
    var model;

    var mockResponse = {
      "DayOfWeek":6,
      "DisplayRange":"February 1, 2015 to February 28, 2015",
      "Events":[
        {
          "Date":"2015-02-02",
          "DayName":"Monday",
          "DisplayDate":"Feb 2",
          "DisplayDateFull":"February 2, 2015",
          "DisplayNotice":"Changed",
          "DisplayText":"Groundhog Day",
          "HasDetails":1,
          "Location":"United States",
          "Notice":"Holiday",
          "StyleBlock":"",
          "StyleNotice":"",
          "Title":"Groundhog Day"
        },
        {
          "Date":"2015-02-12",
          "DayName":"Thursday",
          "DisplayDate":"Feb 12",
          "DisplayDateFull":"February 12, 2015",
          "DisplayNotice":"Changed",
          "DisplayText":"Lincoln's Birthday",
          "HasDetails":1,
          "Location":"United States",
          "Notice":"Holiday",
          "StyleBlock":"",
          "StyleNotice":"",
          "Title":"Lincoln's Birthday"
        },
        {
          "Date":"2015-02-14",
          "DayName":"Saturday",
          "DisplayDate":"Feb 14",
          "DisplayDateFull":"February 14, 2015",
          "DisplayNotice":"Changed",
          "DisplayText":"Valentine's Day",
          "HasDetails":1,
          "Location":"United States",
          "Notice":"Holiday",
          "StyleBlock":"",
          "StyleNotice":"",
          "Title":"Valentine's Day"
        },
        {
          "Date":"2015-02-16",
          "DayName":"Monday",
          "DisplayDate":"Feb 16",
          "DisplayDateFull":"February 16, 2015",
          "DisplayNotice":"Changed",
          "DisplayText":"Presidents' Day",
          "HasDetails":1,
          "Location":"United States",
          "Notice":"Holiday",
          "StyleBlock":"",
          "StyleNotice":"",
          "Title":"Presidents' Day"
        }
      ],
      "Title":"Upcoming Events"
    };

    var expectedCalendarEvents = [
      {
        "title":"Groundhog Day",
        "start":"2015-02-02",
        "type":"Holiday",
        "allDay": true
      },
      {
        "title":"Lincoln's Birthday",
        "start":"2015-02-12",
        "type":"Holiday",
        "allDay": true
      },
      {
        "title":"Valentine's Day",
        "start":"2015-02-14",
        "type":"Holiday",
        "allDay": true
      },
      {
        "title":"Presidents' Day",
        "start":"2015-02-16",
        "type":"Holiday",
        "allDay": true
      }
    ]


    beforeEach( module('iscHsCommunityAngular') );

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function(iscCalendarModel  ){
      model = iscCalendarModel;
    }));

    // -------------------------
    describe( 'get / setCalendarEvents tests ', function(){

      it( 'should have a function getCalendarEvents', function(){
        expect( angular.isFunction( model.getCalendarEvents )).toBe( true );
      });

      it( 'should have a function setCalendarEvents', function(){
        expect( angular.isFunction( model.setCalendarEvents )).toBe( true );
      });

      it( 'should get and set calendarEvents', function(){
        model.setCalendarEvents( mockResponse );
        var result = model.getCalendarEvents();
        expect( result ).toEqual( expectedCalendarEvents );
      });
    });


    // -------------------------
    describe( 'get / setCalendarEventSources tests ', function(){

      it( 'should have a function setCalendarEventSources', function(){
        expect( angular.isFunction( model.getCalendarEventSources )).toBe( true );
      });

      it( 'should have a function setCalendarEventSources', function(){
        expect( angular.isFunction( model.setCalendarEventSources )).toBe( true );
      });

      it( 'should get and set calendarEvents', function(){
        model.setCalendarEvents( mockResponse );
        var result = model.getCalendarEventSources();
        expect( result ).toEqual( [expectedCalendarEvents] );
      });
    });


  });

})();

