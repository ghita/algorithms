const process = require("process");

const getTime = arg =>
  arg === undefined ? process.hrtime() : process.hrtime(arg);

const addTiming = fn => (...args) => {
  let tStart = getTime();
  try {
    const valueToReturn = fn(...args);
    const tEnd = getTime(tStart);
    const durationMs = tEnd[0] * 1000 + tEnd[1] / 1000000;
    console.log(`timing ${fn.name} ${durationMs.toFixed(2)} ms`);
    return valueToReturn;
  } catch (thrownError) {
    const tEnd = getTime(tStart);
    const durationMs = tEnd[0] * 1000 + tEnd[1] / 1000000;
    console.log(`timing with exception ${fn.name} ${durationMs.toFixed(2)} ms`);
    throw thrownError;
  }
};

exports.addTiming = addTiming;
