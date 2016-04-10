
"use strict()";

function Calculator() {
    this.lastAdditionResult = 0;

    this.lastSubtractionResult = 0;

    this.lastMultiplicationResult = 0;

    this.lastDivisionResult = 0;

    this.add = function (op1, op2) {
        var result = op1 + op2;
        this.lastAdditionResult = result;
        return result;
    }

    this.subtract = function (op1, op2) {
        var result = op1 - op2;
        this.lastSubtractionResult = result;
        return result;
    }

    this.multiply = function (op1, op2) {
        var result = op1 * op2;
        this.lastMultiplicationResult = result;
        return result;
    }

    this.divide = function (op1, op2) {
        var result = op1 / op2;
        this.lastDivisionResult = result;
        return result;
    }
}

