
(function(){
  'use strict';

  describe('iscPanelModel', function(){
    var model;

    var mockResponse = {

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



    beforeEach( module('iscHsCommunityAngular') );

    // this loads all the external templates used in directives etc
    // eg, everything in templates/**/*.html
    beforeEach( module('isc.templates') );

    // show $log statements
    beforeEach( module( 'iscHsCommunityAngular', function( $provide ){
      $provide.value('$log', console);
    }));

    beforeEach( inject( function(iscHomeModel  ){
      model = iscHomeModel;
    }));

    // -------------------------
    describe( 'get / setPanelData tests ', function(){

      it( 'should have a function setPanelData', function(){
        expect( angular.isFunction( model.setPanelData )).toBe( true );
      });

      it( 'should have a function getPanelData', function(){
        expect( angular.isFunction( model.getPanelData )).toBe( true );
      });

      it( 'should get and set panelData', function(){
        model.setPanelData( mockResponse );
        var result = model.getPanelData();
        expect( result ).toEqual( mockResponse );
      });
    });

  });
})();

