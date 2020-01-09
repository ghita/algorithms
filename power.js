"use strict";
const addTiming = require("./utils/timing.js").addTiming;

/**
 * Compute base^exponent using recursion decomposition
 * @param  base
 * @param  exp
 */
function power(base, exp) {
  if (exp == 0) return 1;
  if (exp % 2) {
    return base * power(base, exp - 1);
  } else {
    return power(base * base, exp / 2);
  }
}

let result = addTiming(power)(2, 99);
let result2 = addTiming(Math.pow)(2, 99);
console.log("TCL: result", result);
console.log("TCL: result2", result2);
