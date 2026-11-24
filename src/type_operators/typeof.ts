// NEW: Get the type of any object, literal value at runtime.

import { log } from "console";

log(typeof "Hello"); // res: string

// NEW: value space vs type space
// value space: type when javascript runs.
// type space: available at compile time to check type.

// NOTE: Below is the example of `type space`.
type Product = {
  name: string;
  price: number;
};

// NOTE: Below is the example of `value space`.
const product = {
  name: "Laptop",
  price: 1200,
};

// NEW: Derive a type from variable.
type ReferingProduct = typeof product;
/*
    type ReferingProduct = {
      name: string;
      price: number;
    }
*/

// NEW: Defive types from object prorperties.
const config = {
  server: {
    host: "localhost",
    port: 3000,
  },
  debug: true,
};
// NOTE: get the type of `server` from `config` object.
type Server = typeof config.server;
/*
    type Sever = {
      host: string;
      port: 3000;
    }
*/

// NEW: Derive type from fucntions return.
function getObject() {
  return {
    url: "https://www.youtube.com",
    timeout: 3000,
  };
}
type GetObjectFun = typeof getObject;
/*
  type GetObjectFun = () => {
    url: string;
    timeout: number;
  }
*/
// NOTE: This is not we wanted we wanted the object type that function returns.
type ReturnObjType = ReturnType<typeof getObject>;

// get type and literal values as well
let obj = {
  prop1: "str",
  prop2: 23,
} as const; // NOTE: `as const` make type and values available.
type DerivedObj = typeof obj;
/* 
  type DerivedObj = {
    readonly prop1: 'str';
    readonly prop2: 23
  } 
*/
