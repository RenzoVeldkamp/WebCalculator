
/// <reference path="../js/Calculator.js" />

"use strict";

describe("addition tests", function () {
    var componentClassToTest;

    beforeEach(function () { // test setup
        if (!componentClassToTest) {
            componentClassToTest = new Calculator();
        }
    });

    it("Add 1 to 2 should result in 3", function () {
        var addition = componentClassToTest.add(1, 2);

        expect(addition).toEqual(3);
    });

    it("Add 1 to -2 should result in -1", function () {
        var addition = componentClassToTest.add(1, -2);

        expect(addition).toEqual(-1);
    });

    it("Add b to 1 should result in error thrown", function () {
        var addition = function () {
            componentClassToTest.add(b, 1); // b is undefined, so throw an exception
        };

        expect(addition).toThrow();
    });

    // this test will fail
    it("Add 'b' to 1 should result in error thrown", function () {
        var addition = componentClassToTest.add('b', 1);

        expect(addition).toThrow();
    });

    afterEach(function () { // test cleanup
        componentClassToTest = null;
    });
});

