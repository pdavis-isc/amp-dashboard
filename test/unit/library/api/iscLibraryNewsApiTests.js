
(function(){
  'use strict';

  describe('iscLibraryNewsApi', function(){
    var scope,
        httpBackend,
        q,
        api,
        model,
        response;

    var mockData = {
      "children": [
        {
          "Date": "2014-12-08 05:08:00",
          "Description": "When Bob Smithson could no longer breathe on his own and surgeons wanted to operate, his doctor decided to take a chance on a different treatment. That decision gave Bob another chance at life.",
          "Feed": "feed://www.npr.org/rss/rss.php?id=1027",
          "FeedTag": "NPR Health",
          "FeedTitle": "Health Care",
          "Link": "http://www.npr.org/blogs/health/2014/12/08/368541747/medicines-subtle-art-gives-a-man-the-chance-to-breathe-again?utm_medium=RSS&utm_campaign=healthcare",
          "Title": "Medicine's Subtle Art Gives A Man The Chance To Breathe Again"
        },
        {
          "Date": "2014-12-08 04:57:00",
          "Description": "Way too many residents of U.S. nursing homes are on antipsychotic drugs, critics say. It's often just for the convenience of the staff, to sedate patients agitated by dementia. That's illegal.",
          "Feed": "feed://www.npr.org/rss/rss.php?id=1027",
          "FeedTag": "NPR Health",
          "FeedTitle": "Health Care",
          "Link": "http://www.npr.org/blogs/health/2014/12/08/368524824/old-and-overmedicated-the-real-drug-problem-in-nursing-homes?utm_medium=RSS&utm_campaign=healthcare",
          "Title": "Old And Overmedicated: The Real Drug Problem In Nursing Homes"
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

    beforeEach( inject( function( $rootScope, iscLibraryNewsApi, iscLibraryModel, $httpBackend  ){
      scope = $rootScope.$new();
      api = iscLibraryNewsApi;
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

