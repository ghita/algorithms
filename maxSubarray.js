// for a list [x1, x2, ...,xn] find the max substring = sum(xi, xi+1, .., xk) = MAX
// recursive solution
function maxSubarray1(arr = []) {
  const max = (sum, index) => {
    if (index < arr.length) {
      const currentIndexSum = arr[index] + sum;
      const localSum = Math.max(currentIndexSum, arr[index]);
      return max(Math.max(sum, localSum), index + 1);
    } else {
      return sum;
    }
  };

  return max(0, 0);
}

// solution for same problem using functional reduce. We record also information about
// the subarray
function maxSubarray(arr = []) {
  const reducer = (acc, curr, idx) => {
    const localSum = idx != 0 ? curr + acc.sum : acc.sum;
    const maxLocalSum = Math.max(localSum, curr);

    if (maxLocalSum > acc.sum) {
      const startIndex = curr > localSum ? idx : acc.startIndex;
      return { sum: maxLocalSum, startIndex: startIndex };
    } else {
      return { sum: acc.sum, startIndex: acc.startIndex };
    }
  };

  return arr.reduce(reducer, { sum: arr[0], startIndex: 0, endIndex: 0 });
}

console.log(maxSubarray1([-1, 2, 4, 3]));
console.log(maxSubarray([-1, 2, 4, 3]));
console.log(maxSubarray([-1]));
