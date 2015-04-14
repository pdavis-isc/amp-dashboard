(function(){

  'use strict';

  describe('The main view', function () {

    var baseUrl = 'http://localhost:3000/index.html';

    function clickAndWait( buttonId ){
      var retVal = false;
      browser.wait(function () {
        if (!retVal) {
          element(by.id( buttonId )).click().then(function () {
            retVal = true;
          });
        }
        return retVal;
      }, 30000 );
    }

    beforeEach(function () {
      browser.get( baseUrl );
    });


    it('should redirect to the login page', function () {
      expect( browser.getCurrentUrl() ).toEqual( baseUrl + '#/login' );
    });

    it('should login', function () {
      var greeting = element( by.id('greeting-logged-out'));
      expect( greeting.getText()).toContain( 'Welcome to InterSystems.' );

      var username = element( by.model('loginCtrl.credentials.Username'));
      var password = element( by.model('loginCtrl.credentials.Password'));

      //username.sendKeys('adameveryman');
      //password.sendKeys('Password1a');

      clickAndWait( 'login-button' );

      var greeting = element( by.id('greeting-logged-in'));
      expect( greeting.getText()).toContain( 'Welcome, Adam Everyman' );

      expect( browser.getCurrentUrl() ).toEqual( baseUrl + '#/home' );

      clickAndWait( 'logout-button' );
    });

    it('should display a popup on login error', function () {

      var greeting = element( by.id('greeting-logged-out'));
      expect( greeting.getText()).toContain( 'Welcome to InterSystems.' );

      var username = element( by.model('loginCtrl.credentials.Username'));
      var password = element( by.model('loginCtrl.credentials.Password'));

      username.sendKeys('foo');
      password.sendKeys('bar');

      clickAndWait( 'login-button' );

      expect( element( by.id( 'modal-title' )).getText()).toContain( 'Server Error' );
      clickAndWait( 'ok-button' );

      var greeting = element( by.id('greeting-logged-out'));
      expect( greeting.getText()).toContain( 'Welcome to InterSystems.' );
    });

    it('should show all the permitted tabs (no exclusions) after login', function () {

      var topTabs = element.all( by.repeater('tab in navbarCtrl.tabs | orderBy: navbarCtrl.iscUiHelper.displayOrder'));

      expect( topTabs.count()).toEqual( 2 );
      expect( topTabs.get( 0 ).getText()).toEqual('Home');
      expect( topTabs.get( 1 ).getText()).toEqual('Library');

      clickAndWait( 'login-button' );

      var topTabs = element.all( by.repeater('tab in navbarCtrl.tabs | orderBy: navbarCtrl.iscUiHelper.displayOrder'));

      expect( topTabs.count()).toEqual( 6 );
      expect( topTabs.get( 0 ).getText()).toEqual('Home');
      expect( topTabs.get( 1 ).getText()).toEqual('Wellness');
      expect( topTabs.get( 2 ).getText()).toEqual('Messages');
      expect( topTabs.get( 3 ).getText()).toEqual('Library');
      expect( topTabs.get( 4 ).getText()).toEqual('Calendar');
      expect( topTabs.get( 5 ).getText()).toEqual('My Account');

      clickAndWait( 'logout-button' );
    });

  });

})();

