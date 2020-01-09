"use strict";

const once = function(fn) {
  let done = false;
  return function(...args) {
    if (!done) {
      done = true;
      fn(...args);
    }
  };
};

let fun = () => {
  console.log("fun called");
};

exports.once = once;

// ex usage
// const callOnce = once(fun);
// callOnce();
// callOnce();
