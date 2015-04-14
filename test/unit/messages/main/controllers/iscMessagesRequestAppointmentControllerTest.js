
(function(){
  'use strict';

  describe('iscMessagesRACtest', function(){
    var scope,
      controller;


    beforeEach( module('iscHsCommunityAngular') );


    beforeEach( inject( function( $rootScope, $controller  ){
      scope = $rootScope.$new();
      controller = $controller('iscMessagesRequestAppointmentController as ctrl',
        {
          '$scope' : scope
        });


    }));

    // -------------------------
    describe( 'check methods ', function() {


      it('should have a function doStepComplete', function () {
        expect(angular.isFunction(controller.doStepComplete)).toBe(true);
      });


      it('should have a function submitForm', function () {
        expect(angular.isFunction(controller.submitForm)).toBe(true);
      });


      it('should have a function next', function () {
        expect(angular.isFunction(controller.next)).toBe(true);
      });


      it('should have a function previous', function () {
        expect(angular.isFunction(controller.previous)).toBe(true);
      });

      it('should have a function done', function () {
        expect(angular.isFunction(controller.done)).toBe(true);
      });

    });

    describe( 'test methods ', function(){

      it('should go backwards', function(){

        controller.selectedIndex =1 ;

        controller.previous();

        expect(controller.selectedIndex).toEqual(0);


      });

      it('should not go backwards past 0', function(){

        controller.selectedIndex =0;

        controller.previous();

        expect(controller.selectedIndex).toEqual(0);


      });


      it( 'should not advance if step not complete', function(){


        controller.next();


        expect(controller.selectedIndex).toEqual(0);


      });


      it( 'should  advance if step  complete', function(){



        controller.isStepComplete = true;

        controller.next();


        expect(controller.selectedIndex).toEqual(1);


      });

      it( 'should  not advance if form not  complete', function(){



        controller.isStepComplete = false;

        controller.done();


        expect(controller.isFormComplete).toEqual(false);


      });

      it( 'should  advance if form   complete', function(){



        controller.isStepComplete = true;

        controller.done();


        expect(controller.isFormComplete).toEqual(true);


      });




      it('should return false if doStepComplete not done',function(){

        var myScope = { "directive":{"name":"mock-dir1"}};

        var myState = true;

        controller.doStepComplete(myScope,myState);


        expect(controller.isStepComplete).toEqual(false);


      });


      it('should return true if doStepComplete is done',function(){


        //step 1
        var myScope = { "directive":{"name":"mock-dir1"}};

        var myState = true;

        controller.doStepComplete(myScope,myState);

        myScope = { "directive":{"name":"mock-dir2"}};

        myState = true;

        controller.doStepComplete(myScope,myState);

        controller.next();

        //step 2

        myScope = { "directive":{"name":"mock-dir2"}};

        myState = true;

        controller.doStepComplete(myScope,myState);

        myScope = { "directive":{"name":"mock-dir1"}};

        myState = true;

        controller.doStepComplete(myScope,myState);

        controller.next();

        //step3

        myScope = { "directive":{"name":"mock-dir2"}};

        myState = true;

        controller.doStepComplete(myScope,myState);

        myScope = { "directive":{"name":"mock-dir1"}};

        myState = true;

        controller.doStepComplete(myScope,myState);





        expect(controller.isStepComplete).toEqual(true);


      });




    });


  });

})();

