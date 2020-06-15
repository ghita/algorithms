let a = {
  b: "x"
};

let b = {
  c: {
    d: "f"
  }
};

let shape: { b: number };
// shape = {}

let objOptional: {
  b: number;
  c?: string;
  [key: number]: boolean; //optional key properties of type bool
};

objOptional = { b: 1 };
objOptional = { b: 1, c: undefined };

function test(b: boolean) {}
