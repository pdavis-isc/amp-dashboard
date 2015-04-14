
(function(){
  'use strict';

  describe('iscLibraryPanelApi', function(){
    var scope,
      httpBackend,
      api,
      model,
      response;

    var mockData = {

      "messageCount":"5",

      "events":[
        {
          "event":"Lincoln's Birthday",
          "description":"Lincoln's Birthday",
          "date":"February 12, 2015"
        },
        {
          "event":"Valentine's Day",
          "description":"Valentine's Day",
          "date":"February 14, 2015"
        },
        {
          "event":"Presidents' Day",
          "description":"Presidents' Day",
          "date":"February 16, 2015"
        },
        {
          "event":"Elio's Start Day",
          "description":"Let's get ready to rumble!",
          "date":"February 17, 2015"
        }

      ],
      "news":[

        {
          "headline":"Figuring Out If A Doctor Is In Your Network Can Be Perplexing",
          "subhead":"Some physicians can be in-network when working at one office but not when they are at another. Or they may belong to a medical group that is affiliated with your plan, but they don't participate.",
          "url":"http://www.npr.org/blogs/health/2015/02/17/386908835/figuring-out-if-a-doctor-is-in-your-network-can-be-perplexing?utm_medium=RSS&utm_campaign=healthcare"

        },
        {
          "headline":"Satisfied Patients Now Make Hospitals Richer, But Is That Fair?",
          "subhead":"The Affordable Care Act made sure that hospitals scoring well on patient satisfaction surveys are paid more by Medicare. But some say that gives small, boutique hospitals an unfair edge.",
          "url":"http://www.npr.org/blogs/health/2015/02/16/383519072/satisfied-patients-now-make-hospitals-richer-but-is-that-fair?utm_medium=RSS&utm_campaign=healthcare"

        },
        {
          "headline":"California Health Exchange Considers Extending Enrollment For Some",
          "subhead":"Plenty of uninsured people will discover they owe a penalty as they file their taxes over the next two months, and will also learn they could be locked out of buying insurance to solve the problem.",
          "url":"http://www.npr.org/blogs/health/2015/02/13/385980587/california-health-exchange-considers-extending-enrollment-deadline?utm_medium=RSS&utm_campaign=healthcare"

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

    beforeEach( inject( function( $rootScope, iscHomeDataApi, iscHomeModel, $httpBackend  ){
      scope = $rootScope.$new();
      api = iscHomeDataApi;
      model = iscHomeModel;
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
        expect( angular.isFunction( api.getPanelData )).toBe( true );
      });
    });


  });

})();

