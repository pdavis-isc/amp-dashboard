isc-hscommunity-angular
======================

Development Repository for HealthShare Community AngularJS UI

-----------------------------------------------------
Setup 
-----------------------------------------------------
Be sure Node.js, Bower and Gulp are installed in your system.


-----------------------------------------------------
Installation 
-----------------------------------------------------

To install, clone the repository, then in your terminal window, run: 
   cd isc-hscommunity-angular
   npm install
   bower install
   gulp build

this will install and compile the dependencies.

-----------------------------------------------------
Updating to the latest Core components 
-----------------------------------------------------

Download the github repository for hi-ui-angular-core (https://github.com/intersystems/hs-ui-angular-core.git)
NOTE: It should be in a sibling directory to the isc-community-angular project
In a terminal window, run:
    gulp inject-common

This will install the latest common components into a folder called app/src/common.
NOTE: This should only be necessary if your project is out of sync with the latest code base. Contact your InterSystems liaison if you have any questions before doing this, as in most cases it is not necessary. 

-----------------------------------------------------
Adding Top-Level Tabs with the Config File 
-----------------------------------------------------

In src/assets/configuration, find configFile.json
To add a top level navigation tab, add the appropriate json to the topTabs object, eg:

      {
        "state": "magDashboard",
        "translationKey": "MAG_DASHBOARD",
        "displayOrder", 1,
        "exclude": false
      }
      
This will create a top level tab element. To add a text value for that element, in the assets/i18n/en_US.json file, add:

  "MAG_DASHBOARD": "MAG Dashboard"
  
NOTE: In this example, "MAG_DASHBOARD" represents the initials for your company or app plus an identifier. The entire key must be unique. 
NOTE: Please refrain from using the initials "ISC", as they are used for InterSystems Corp.

The app will now display a top level tab called 'MAG Dashboard'. 
Without a valid url (see below, $stateProvider.state( 'stateName', {url:'some/valid/url'}) ), clicking the tab will bring you to the home page.

NOTE: If you add a similar key/value pair to the other locale files, the appropriate translation will display when that language is selected. 
If no value is specified, the display will default to the en_US value. If no value is found in en_US, the tab will display the key.

The value for the state must be unique. The value "exclude: true" will hide the tab from display, but not disable the url (see below).

-----------------------------------------------------
Adding Content for the New Tab
-----------------------------------------------------

In src/app, create a folder for your new module, eg magDashboard. Build an angular module. 

NOTE: in src/app/customerTabs/customerTabTemplate there is the basic structure of a customer tab you can follow to add a custom tab
NOTE: The folderStructureTemplate shows the folder structure we suggest. The content must be a valid angular module built using ui-router.

The in the app.config() block, the $stateProvider must have a state that uses the url specified in your tab configuration (see above), eg:

          $stateProvider
              .state('index', {
                abstract: true,
                url: '/',

                views:{
                  '@':{
                    templateUrl: 'app/navContainer/partials/iscNavContainer.html',
                    controller: 'iscNavigationController as navCtrl'
                  }
                },

                resolve: {
                    $log.debug( 'iscHome.navCtrl.loadConfig' );
                    return iscCustomConfigService.loadConfig();
                  }
                }
              });
              
NOTE: The state and url you specify must be unique across all tabs.
NOTE: If you exclude the tab (see above), the content will still be accessible by typing in the url.
      In order to remove the content completely, don't include the dependency when initializing iscHscommunityAngular. Also see below, Hiding Content for a Tab
NOTE: if your tab has a secondary navigation, it should be in an object 'secondaryNav' in the config file

Run 
--> gulp build
to compile. The app should now display your custom content when you click the tab.

-----------------------------------------------------
Hiding Content for a Tab
-----------------------------------------------------

In order to fully hide some existing content, do the following:

In the shared/configuration/configFile.json, change a button definition to be excluded: true, eg:

      {
        "state": "magDashboard",
        "translationKey": "MAG_DASHBOARD",
        "displayOrder", 1,
        "exclude": true 
      }
      

-----------------------------------------------------
A Note on URL Rewriting
-----------------------------------------------------

This application makes use of url rewriting. That way, instead of, for example, 
    http://www.isc.com/index.html#/wellness
    
The url will appear as:
   http://www.isc.com/wellness
   
For development purposes, if you find your browser cant locate the url in that rewritten format, find find the <base> tag in index.html and TEMPORARILY comment it out, and similarly, in index.js, find $locationProvider.html5Mode(true); and TEMPORARILY comment it out.
If you don't remember to add it back before deployment, the urls will appear in the longer, hashed format.
