'use strict';

//ES5
var x = function (x, y) {
    return x * y;
}

//ES6
const y = (x, y) => x * y; 


//Spread Operator
const cars1 = ["Saab", "Volvo", "BMW"];
const cars2 = ["Saab", "Volvo", ...["BMW"]];

const numbers = [23, 55, 21, 87, 56];
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);