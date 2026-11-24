// NEW: `keyof` is used to get the keys of object type.
type Person = {
  name: string;
  age: number;
};
type PersonKey = keyof Person;
// res: type PersonKey = "name" | "age";

// we CANNOT do something like below
/* 
let a = {
  name: 'John Doe',
  age: 26
}
type aKey = keyof a; 
*/

interface Employee {
  id: number;
  name: string;
  active: boolean;
}
type EmployeeKey = keyof Employee;
// res: type EmployeeKey = "id" | "name" | "active";
let a: EmployeeKey;
a = "id";
a = "name";
a = "active";
// a = "something"; // res: <== ERROR
