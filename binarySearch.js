// Given as input a sorted arry find an element position (if found) specified as argument

/**
 *
 * @param {arr} arr
 * @param {Left} left array index (for subarray  we currently search in)
 * @param {Right} Right array index (for subarray  we currently search in)
 */
function binarySearch(arr, value, Left, Right) {
  if (Left == Right) {
    if (arr[Left] === value) {
      return Left;
    } else {
      return -1; // not found
    }
  } else {
    let midIndex = Math.floor((Left + Right) / 2);
    let midValue = arr[midIndex];
    if (midValue > value) {
      return binarySearch(arr, value, Left, midIndex - 1);
    } else if (midValue < value) {
      return binarySearch(arr, value, midIndex + 1, Right);
    } else {
      return midIndex;
    }
  }
}

let res = binarySearch([0, 1, 4, 5, 7], 9, 0, 4);
console.log("TCL: binarySearch", res);
