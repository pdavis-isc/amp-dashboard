(function(){

  'use strict';

  describe('The main view', function () {

    var baseUrl = 'http://localhost:3000/index.html';

    function clickAndWait( buttonId ){
      var returnVal = false;
      browser.wait(function () {
        if (!returnVal) {
          element(by.id( buttonId )).click().then(function () {
            returnVal = true;
          });
        }
        return returnVal;
      }, 30000 );
    }

    beforeEach(function () {
      browser.get( baseUrl );
    });


    it('should redirect to the login page', function () {
      expect( browser.getCurrentUrl() ).toEqual( baseUrl + '#/login' );
    });


    it('should build the top tabs properly,only whitelisted pages, no exclusions', function () {
      var topTabs = element.all( by.repeater('tab in navbarCtrl.tabs | orderBy: navbarCtrl.iscUiHelper.displayOrder'));
      expect( topTabs.count()).toEqual( 2 );
      expect( topTabs.get( 0 ).getText()).toEqual('Home');
      expect( topTabs.get( 1 ).getText()).toEqual('Library');
    });

    it('should allow navigation to whitelisted pages', function () {

      var topTabs = element.all( by.repeater('tab in navbarCtrl.tabs | orderBy: navbarCtrl.iscUiHelper.displayOrder'));

      topTabs.get( 0 ).click();
      expect( browser.getCurrentUrl() ).toEqual( baseUrl + '#/home' );

      topTabs.get( 1 ).click();
      expect( browser.getCurrentUrl() ).toEqual( baseUrl + '#/library/heathDictionary' );

      element( by.id('login-tab-button')).click();
      expect( browser.getCurrentUrl() ).toEqual( baseUrl + '#/login' );
    });

  });

})();

