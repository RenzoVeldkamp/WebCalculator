"use strict()";

function using () {
    var calc = new Calculator();

    var res1 = calc.add(1, 2);

    document.getElementById("mainBody").innerHTML = calc.lastAdditionResult;
}