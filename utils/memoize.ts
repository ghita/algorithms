const memoize = function(fn: (...args: any) => any) {
  const cache: { [prop: string]: any } = {};

  return function(...args: any) {
    const argStr = JSON.stringify(args);
    cache[argStr] = cache[argStr] ?? fn(...args);
    return cache[argStr];
  };
};

// export
export { memoize };

// tests
// const sqare = (x: any) => x * x;
// const sqareMem = memoize(x => x * x);
// console.log(sqareMem(1));
// console.log(sqareMem(1));
// console.log(sqareMem(2));
// console.log(sqareMem(2));
