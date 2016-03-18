"use strict";

function using () {
    var calc = new calculator();

    var res1 = calc.add(1, 2);

    document.getElementById("mainBody").innerHTML = calc.lastAdditionResult;
}