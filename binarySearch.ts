// Given as input a sorted arry find an element position (if found) specified as argument
import timing from "./utils/timing";

function binarySearch(
  arr: Array<number>,
  value: number,
  comparator: (a: number, b: number) => number,
  left: number,
  right: any
): number {
  if (left == right) {
    if (arr[left] === value) {
      return left;
    } else {
      return -1;
    }
  } else {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = arr[midIndex];
    if (comparator(midValue, value) > 0) {
      return binarySearch(arr, value, comparator, left, midIndex - 1);
    } else if (comparator(midValue, value) < 0) {
      return binarySearch(arr, value, comparator, midIndex + 1, right);
    } else {
      return midIndex;
    }
  }
}

function generateArray(len: number) {
  return Array.from({ length: len }, () => Math.floor(Math.random() * len));
}

const array = generateArray(1000000);
array.sort((a, b) => a - b);

let longSearch = () => {
  let res = 0;
  for (let i = 0; i < 100000; i++) {
    res = binarySearch(
      array,
      array[i],
      function(a: number, b: number) {
        return a - b;
      },
      0,
      array.length - 1
    );
  }
  return res;
};

const time = timing.addTiming(longSearch); // ~50ms run time
let res = time();

console.log("TCL: binarySearch", res);
