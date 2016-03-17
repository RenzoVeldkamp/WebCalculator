/// <reference path="../js/calculator.js" />

describe("addition tests", function () {

    var componentClassToTest;
    beforeEach(function () {
        if (!componentClassToTest) {
            componentClassToTest = new calculator();
        }
    });

    //var originalTimeout;
    //beforeEach(function () {
    //    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    //});

    //it("takes a long time", function (done) {
    //    setTimeout(function () {
    //        done();
    //    }, 9000);
    //});

    it("add1To2_resultsIn_3", function () {
        //var componentClassToTest = new calculator();
        expect(componentClassToTest.lastAdditionResult).toBe(0);

        var addition = componentClassToTest.add(1, 2);

        expect(addition).toBe(3);
    });

    it("add1ToMinus2_resultsIn_Minus1", function () {
        //var componentClassToTest = new calculator();

        expect(componentClassToTest.lastAdditionResult).toBe(3);

        var addition = componentClassToTest.add(1, -2);

        expect(addition).toBe(-1);
    });

    it("addbTo1_resultsIn_Error", function () {
        //var componentClassToTest = new calculator();

        expect(componentClassToTest.lastAdditionResult).toBe(-1);

        var addition = function () {
            componentClassToTest.add(b, 1); // b is undefined, so throw an exception
        }

        expect(addition).toThrow();
    });

    afterEach(function () {
        componentClassToTest = null;
    });

});
