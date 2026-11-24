/*
    class ClassName {
      ...
    }
*/

class AClass {
  // NOTE: Instance properties.

  /*[public | private | protected] & [readonly]*/
  instanceProp: number;
  // NOTE: static properties.

  /*[public | private | protected] & [readonly]*/
  static staticProp: number;

  // static initializer block.
  static {
    // class name or this is used to refer static properties in static blocks.
    // we cannot access static prop.. with `this` in instance context.
  }

  /*[private | public | protected]*/ constructor(
    a: number,
    b: string,
    c: any,
    private instanceProp4: any, // <- declare properties directly in constructor.
    public instanceProp5: any,
    protected instanceProp6: any,
  ) {
    this.instanceProp = a;
  }

  // instance method
  /*[public | private | protected]*/ instanceMethod(...nums: number[]): number {
    return nums.reduce((prev, next) => prev + next, 0);
  }

  /*[public | private | protected]*/ static staticMethod(
    ...nums: number[]
  ): number[] {
    return nums.map((value) => value * 2);
  }

  /*[public | private | protected]*/ get prop() {
    return this.instanceProp;
  }

  /*[public | private | protected]*/ set prop(value: number) {
    this.instanceProp = value;
  }

  /*[public | private | protected]*/ static get sProp() {
    return AClass.staticProp;
  }

  /*[public | private | protected]*/ static set sProp(num: number) {
    AClass.staticProp = num;
  }

  // NEW: Method overloading

  /*[public | private | protected]*/ add(num1: number, num2: number): number;
  /*[pubic | private | protected]*/ add(str1: string, str2: string): string;
  /*[public | private | protected]*/ add(
    val1: number | string,
    val2: number | string,
  ): number | string {
    if (typeof val1 === "string" && typeof val2 === "string") {
      return val1 + val2;
    }
    if (typeof val1 === "number" && typeof val2 === "number") {
      return val1 + val2;
    }
    throw new Error("Invalid argument");
  }
}
