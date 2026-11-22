// @ts-nocheck.

import assert from "assert";

/*
 *    Types are categoriezed into two category.
 *      1. primitive
 *      2. non-primitive
 *
 *    1. Primitive types includes.
 *      number    :   represents numbers.
 *      bigint    :   represents bigint values.
 *      string    :   represents text.
 *      boolean   :   represents true and false.
 *      null      :   `null` values.
 *      undefined :   `undefined` values.
 *      Symbol    :   unique, immutable identifires.
 *      ----------------------------------------
 *
 *    2. non-primitive types inclues
 *      arrays, objects, set, map, functions, etc.
 * */
const log = console.log;

// --------------------
// numbers
// --------------------
let age: number = 26;
let price = 22.99; // type infers
let binaryNumber = 0b1001100;
let anotherBinaryNumber = 0b1111;
let octalNumber = 0o1234;
let oct2 = 0o1111;
let hex = 0xabcd;
let hex2 = 0xcdef;
let expo = 123e4; // 123 * (10 ** 4) = 1230000
let anotherE = 1.23e2; // 1.23 * (10 ** 2) = 123
log(
  age,
  price,
  binaryNumber,
  anotherBinaryNumber,
  octalNumber,
  oct2,
  hex,
  hex2,
  expo,
  anotherE,
);

// ----------
// bigint
// ----------
let bigInt = 234234324324234234234234n;
log(bigInt);

// ----------
// string
// ----------
let str = "str";
let str2: string = "str2";
let multilineStr = `
I am 
a multiline 
string.
str = ${str}
str2 = ${str2}
`;
log(multilineStr);

// ----------
// boolean
// ----------
let bool: boolean = true;
let bool2 = false;
assert(bool || bool2);

// ----------
// undefined
// ----------
// any variable that is not initialized is undefined.
let something;
log(something); // prints undefined.

// ----------
// null
// ----------
// we can assign value null to values to represent nothing.
let a = null;
let b: null = null;
assert(a == b); // null

// ----------
// Symbol
// ----------
// unique identifier
const sym1 = Symbol();
let sym2: Symbol = Symbol("id");
log(sym1, sym2);

// ----------
// object
// ----------

let employee = {
  firstName: "John",
  lastName: "Doe",
  age: 26,
  jobTitle: "Backend Developer",
};
// Type infers for the above.
// {
//   firstName:string;
//   lastName:string;
//   age:number;
//   jobTitle:string
//  }

// when we don't know what properties will be we can use `object`
let employee2: object;
employee2 = {
  name: "Jann Doe",
  age: 25,
  jobTitle: "Flutter Developer",
};

log(employee.lastName);

// explicitly metioned the type of properties.
let emp3: { name: string; age: number; jobTitle: string };
emp3 = {
  name: "Some emp",
  age: 24,
  jobTitle: "full stack developer",
  // some: 'undeclared Field' // <- results in error.
};

// empty object
let emptyObj: {};
emptyObj = { name: "something" };
log(typeof emptyObj);
// log(emptyObjy.name) // <-- undefined.

// ----------
// arrays
// ----------
// let arrayName: type[];
let skills: string[] = [];
skills.push("software design");
let initializedArray = [1, 2, 3, 4, 5, , 6];

// ----------
// tuples
// ----------
// let tupleName: [dataType1, dataType2,...dataTypeN];
let aTuple: [string, number, boolean];
aTuple = ["abc", 123, true];

// order matters
// aTuple = [123, true, 'abc']; <- error.

// optional
let aTupleWithOptional: [string, number, number?];
// third one is optional above.
aTupleWithOptional = ["abc", 123];

// ----------
// unknown and any
// ----------
let result: unknown;
result = 1;
result = "hello";
result = false;
result = Symbol();
result = { name: "John" };
result = [1, 2, 3];

// any is default type if we don't menthion type and let the variable uninitialized.
let result2: any;
result2 = 1;
result2 = "hello";
result2 = false;
result2 = Symbol();
result2 = { name: "Jane" };
result2 = [1, 2, 3];

// unknown varaible will generate error.
// enforce type safety, use for dynamic values

// let total = result.reduce((a:number, b:number) => a + b, 0);
if (Array.isArray(result)) {
  let total = result.reduce((a: number, b: number) => a + b, 0);
}

// or
let double = (result as number[]).map((val) => val * 2);

// this will work fine.
// type safety will be ignored. allows any operations.
let total2 = result2.reduce((a: number, b: number) => a + b, 0);

// ----------
// void
// ----------
// `void` represents the absence of any type.
let voidEg: void = undefined;
// undefined is only value that can be assigned to the void variable
// void is genrally used with functions that doesn't return anything.
function somefun(): void {
  return;
}

// ----------
// union
// ----------
let unionEg: number | string | boolean;
unionEg = 2;
unionEg = "str";
unionEg = false;
// unionEg = Symbol(); // <- Error can only be number or string or boolean
//
function unionEg2(
  x: number | boolean | undefined,
): number | boolean | undefined {
  if (typeof x === "number") {
    return 2;
  }
  if (typeof x === "boolean") {
    return false;
  }
  // return 'str'; // <- error
  return; // returns undefined
}

// ----------
// type alias
// ----------
// type aliasName = existingType;
// code redability.

type Name = string;
type num = number;
let nameOrNum: Name | num;

type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  log(
    `person's name is ${person.name} and 
                age is ${person.age}`,
  );
}

// ----------
// string literal type
// ----------
// limit a possible string values a variable can store.

let strLiteral: "ltr";
strLiteral = "ltr";
// strLiteral = 'abc'; // <- error

let strLietral2: "one" | "two" | "three";
strLietral2 = "one";
strLietral2 = "two";
strLietral2 = "three";
// strLietral2 = 'four'; // <- error

// ----------
// never
// ----------
// never holds no value like empty set. Its not like null
// we use never to represent error
function raiseError(message: string): never {
  throw new Error(message);
}
// also intersection types that are mutually exclusive results in never.
let x: string & number; // x : never

// never helps in defining string literal roles
type Role = "admin" | "user" | "guest";

const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`);
};

const authorize = (role: Role): string => {
  switch (role) {
    case "admin":
      return "You can do anything";
    case "user":
      return "You can do something";
    case "guest":
      return "You can do nothing";
    default:
      // never reach here util we add a new role
      return unknownRole(role);
  }
};

console.log(authorize("admin"));
// now suppose if we add new string literal in role then it will reach default then in case if we forgot to add the exhaustive condition then we will get an error.
