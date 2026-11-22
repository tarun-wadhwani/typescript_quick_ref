/*
    function name (
      parameter: type, parameter = defaultValue
    ): returnType {

    }
*/

import { log } from "console";

// NEW: functions types.
// functions are expression so it can be assigned to variables.
// To assign to variable it need to have type.
//      (parameter: type, parameter: type) => type.
let operation: (x: number, y: number) => number;
operation = (x, y) => x + y;
operation = function (x, y) {
  return x * y;
};

// NEW: optional parameters
function multiply(a: number, b: number, c?: number): number {
  if (c) {
    return a * b * c;
  }
  / * return a * b * (c ?? 1); */;
  return a * b;
}
log(multiply(2, 3)); // 6
log(multiply(2, 3, 4)); // 24

// IMP: operation parameters must come after required parameters.

/*
    NEW: DEFAULT PARAMETERS
    function name( parameter1 = defaultValue1 ) {
      // do something
    }
 */

function applyDiscount(price: number, discount = 0.05, other: number) {
  console.log(
    `price : ${price},
     discount: ${discount},
     other: ${other}
    `.trim(),
  );
}

// NOTE: It is not compulsary for default parameters to come after required parameter but it is recommended.
applyDiscount(10, undefined, 2);
applyDiscount(10, 0.04, 2);
// explicitly mention undefined.
// applyDiscount(100, 10);

// NOTE:
// Arrow functions supports `default values parameters`.
const abc = (a: number, b = 100) => {
  return 2 * a * b;
};
abc(100);

// IMP:
// TYPE DECLARATION doesn't support `default value parameters`.
// let a : (x: number, y = 200);

/*
 * NEW:
 *      ==> Rest Parameters <==
 *  function fn (...restName: type[]) {
 *    //...
 *  }
 */

function getTotal(...numbers: number[]): number {
  return numbers.reduce((prev, current) => prev + current, 0);
}
log(getTotal(1, 2, 3, 4, 5, 6)); // output: 21

// IMP: REST PARAMETER MUST BE LAST in parameter list.

// ERROR:
// function some (...abc: number[], abc2: string) {
//
// }

// IMP: REST PARAMETER CANNOT HAVE DEFAULT VALUES.

// ERROR:
// function foo (...abc= ['abc', 'def', 'gef', 'ghi']) {
//   return abc.length;
// }

// IMP: REST PARAMETER CANNOT HAVE OPTIONAL VALUES.

// ERROR:
// function foo ( ...abc? : number[]) {
//   return abc.length;
// }

// INFO: we can use unions.
function foo(...abc: (number | string)[]) {
  return abc.length;
}
log(foo(1, "a", 2, "b")); // res: 4

/*
    NEW: 
    Function Overloading
    Different Signature with name.
*/

function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;
function add(num1: number | string, num2: number | string): number | string {
  if (typeof num1 === "string") {
    return "I am a string";
  }
  if (typeof num2 === "number") {
    return num1 + num2;
  }
  throw Error("Unvalid type");
}

log(add(1, 2)); // res: 0
log(add("abc", "def")); // res: 'I am a string'
