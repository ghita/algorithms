// Given as input a sorted arry find an element position (if found) specified as argument
import timing from "./utils/timing";

function binarySearchRec<T>(
  arr: Array<T>,
  value: T,
  comparator: (a: T, b: T) => number,
  left: number,
  right: number
): number {
  if (left === right) {
    if (arr[left] === value) {
      return left;
    } else {
      return -1;
    }
  } else {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = arr[midIndex];
    if (comparator(midValue, value) > 0) {
      return binarySearchRec(arr, value, comparator, left, midIndex - 1);
    } else if (comparator(midValue, value) < 0) {
      return binarySearchRec(arr, value, comparator, midIndex + 1, right);
    } else {
      return midIndex;
    }
  }
}

function binarySearch<T>(
  arr: T[],
  value: T,
  comparator: (a: T, b: T) => number
): number {
  if (arr.length === 0) {
    return -1;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = arr[midIndex];
    if (comparator(midValue, value) > 0) {
      // search on the left range
      [left, right] = [left, midIndex - 1];
    } else if (comparator(midValue, value) < 0) {
      // search on the right range
      [left, right] = [midIndex + 1, right];
    } else {
      return midIndex;
    }
  }

  return -1;
}

function generateArray(len: number) {
  return Array.from({ length: len }, () => Math.floor(Math.random() * len));
}

const array = generateArray(100);
array.sort((a, b) => a - b);

let longSearch = () => {
  let res = 0;
  for (let i = 0; i < 100; i++) {
    res = binarySearch(array, 101, function(a: number, b: number) {
      return a - b;
    });
  }
  return res;
};

const time = timing.addTiming(longSearch); // ~50ms run time
let res = time();

console.log("TCL: binarySearch", res);
