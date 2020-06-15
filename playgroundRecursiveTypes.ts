type Json1 = string | number | boolean | null | JsonObject | JsonArray;

interface JsonObject {
  [property: string]: Json1;
}

interface JsonArray extends Array<Json1> {}

// -------------------------------------------

type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[];

const jsonTst: Json = { aha: 1 } as const;

// ----------------------------------------------

type HypertextNode =
  | string
  | [string, { [key: string]: any }, ...HypertextNode[]];

const hypertextNode: HypertextNode = [
  "div",
  { id: "parent" },
  ["div", { id: "first-child" }, "I'm the first child"],
  ["div", { id: "second-child" }, "I'm the second child"]
];
