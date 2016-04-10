
/// <reference path="../js/Calculator.js" />

"use strict";

describe("division tests", function () {
    var componentClassToTest;

    beforeEach(function () { // test setup
        if (!componentClassToTest) {
            componentClassToTest = new Calculator();
        }
    });

    it("Divide 6 by 2 should result in 3", function () {
        var division = componentClassToTest.divide(6, 2);

        expect(division).toEqual(3);
    });

    it("Divide 4 by 0 should result in Infinity", function () {
        var division = componentClassToTest.divide(4, 0);

        expect(division).toBe(Infinity);
    });

    afterEach(function () { // test cleanup
        componentClassToTest = null;
    });
});
