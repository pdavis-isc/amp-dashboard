
(function(){
  'use strict';

  describe('iscLibrarySearchHealthDictionaryApi', function(){
    var scope,
        httpBackend,
        api,
        model,
        response;

    var mockData = {
      "Results": [
        {
          "Content": "<p>Swine <span class=\"qt0\">flu</span> is an infection caused by a virus. It's named for a virus that pigs can get. People do not normally get swine <span class=\"qt0\">flu</span>, but human infections can and do happen.  In 2009 a strain of swine <span class=\"qt0\">flu</span> called H1N1 infected many people around the world.</p><p>The virus is contagious and can spread from human to human.   Symptoms of swine <span class=\"qt0\">flu</span> in people are similar to the symptoms of regular human <span class=\"qt0\">flu</span> and include fever, cough, sore throat, body aches, headache, chills and fatigue.</p><p>There are antiviral medicines you can take to prevent or treat swine <span class=\"qt0\">flu</span>. There is a vaccine available  to protect against swine <span class=\"qt0\">flu</span>. You can help prevent the spread of germs that cause respiratory illnesses like <span class=\"qt0\">influenza</span> by</p><ul><li>Covering your nose and mouth with a tissue when you cough or sneeze. Throw the tissue in the trash after you use it.</li><li>Washing your hands often with soap and water, especially after you cough or sneeze. You can also use alcohol-based hand cleaners.</li><li>Avoiding touching your eyes, nose or mouth. Germs spread this way.</li><li>Trying to avoid close contact with sick people.</li><li>Staying home from work or school if you are sick.</li></ul><p>Centers for Disease Control and Prevention</p>",
          "LinkCaption": "View more information on the MedlinePlus website",
          "Rank": 0,
          "Title": "H1N1 <span class=\"qt0\">Flu</span> (Swine <span class=\"qt0\">Flu</span>)",
          "URL": "http://www.nlm.nih.gov/medlineplus/h1n1fluswineflu.html"
        },
        {
          "Content": "<p>Birds, just like people, get the <span class=\"qt0\">flu</span>. Bird <span class=\"qt0\">flu</span> viruses infect birds, including chickens, \nother poultry, and wild birds such as ducks.   Most bird <span class=\"qt0\">flu</span> viruses can only infect other \nbirds.  However, bird <span class=\"qt0\">flu</span> can pose health risks to people.  The first case of a bird <span class=\"qt0\">flu</span> \nvirus infecting  a person directly, H5N1, was in Hong Kong in 1997.  Since then, the bird \n<span class=\"qt0\">flu</span> virus has spread to birds in countries in Asia, Africa, the Middle East, and Europe.</p><p>Human infection is still very rare, but the virus that causes the infection in birds \nmight change, or mutate, to more easily infect humans. This could lead to a pandemic, a \nworldwide outbreak of the illness. </p><p>During an outbreak of bird <span class=\"qt0\">flu</span>, people who have contact with infected birds can become sick. It may also be possible to catch bird <span class=\"qt0\">flu</span> by eating poultry or eggs that are not well cooked or through contact with a person who has it. Bird <span class=\"qt0\">flu</span> can make people very sick or even cause death. Antiviral medicines may make the illness less severe, and may help prevent the <span class=\"qt0\">flu</span> in people who were exposed to it. There is currently no vaccine.</p>",
          "LinkCaption": "View more information on the MedlinePlus website",
          "Rank": 1,
          "Title": "Bird <span class=\"qt0\">Flu</span>",
          "URL": "http://www.nlm.nih.gov/medlineplus/birdflu.html"
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

    beforeEach( inject( function( $rootScope, iscLibrarySearchHealthDictionaryApi, iscLibraryModel, $httpBackend  ){
      scope = $rootScope.$new();
      api = iscLibrarySearchHealthDictionaryApi;
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
        expect( angular.isFunction( api.search )).toBe( true );
      });
    });


  });

})();

