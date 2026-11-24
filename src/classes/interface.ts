// NOTE: In TS interfaces are used to declare types and interfaces as general.
// It can have properties

interface Person {
  /*No modifiers*/ readonly firstName: string;
  // static staticProp: number;// No static properties
  middleName?: string;
  lastName: string;
  checkIsUpper: (str: string, isUpper: boolean) => string;
}

// NEW: functional interface
interface StringFormat {
  string: number;
  /*[public | protected | private]*/ (str: string, isUpper: boolean): string;
  /*[no modifiers]*/ static(num: number): number;
  somefun(str: string): number;
}
