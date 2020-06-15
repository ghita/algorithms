import { memoize } from "./utils/memoize";

// memoize functions. For every input {url, params} we memoize the corresponsing function that captures the input (lazy)
const pureHttpCall = memoize((url: string, params: any) => () =>
  console.log(`Delayed call for ${url}, ${params}`)
);

const lazyCall = pureHttpCall("url", "/params"); // obtain memoized function result based on input {url, params}
lazyCall();
