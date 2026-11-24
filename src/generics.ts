function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });

console.log(result);

// NEW: constraints
function merge2<U extends object, V extends object>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
// let result2 = merge({name: 'john'}, 2); // <<= FINE
// let result2 = merge2({name: 'John'}, 2); // <<= ERROR

// NEW: parameter constraints
// function prop2<T, K>(obj: T, key: K) {
//     return obj[key];
// }
// Type 'k' cannot be used to index type 'T'
// to cure this error we have `key of`

// NOTE: key of
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// NEW: Generic Classes
class Stack<T extends any> {
  private elements: T[] = [];

  constructor(private size: number) {}

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  isFull(): boolean {
    return this.elements.length === this.size;
  }

  push(element: T): void {
    if (this.isFull()) {
      throw new Error("The stack is full!");
    }

    this.elements.push(element);
  }

  pop(): T {
    const element = this.elements.pop();

    if (element === undefined) {
      throw new Error("The stack is empty!");
    }

    return element;
  }
}

// NEW: Generic Interfaces
interface Pair<K, V> {
  key: K;
  value: V;
}

// NOTE: interface that declares method
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}

// NOTE: interface that declares the type of keys or index.
interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};

function abc() {
  return {
    name: "tarun",
    age: 26,
  };
}

type AB = ReturnType<typeof abc>;
let a: AB = {
  name: "abc",
  age: 27,
};
