class Person {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

class Employee extends Person {
  constructor(
    firstName: string,
    lastName: string,
    private jobTitle: string,
  ) {
    super(firstName, lastName);
  }

  override describe(): string {
    return `${super.describe()}. I am ${this.jobTitle}.`;
  }
}

interface A {
  a(): void;
}
interface B extends A {
  b(): void;
}

class AImpl implements A {
  a(): void {
    console.log(`AImpl`);
  }
}

class BImpl implements B {
  b(): void {
    console.log(`BImpl`);
  }
  a(): void {
    console.log(`BImpl`);
  }
}

// NOTE: Interface can extend multiple interface
interface x {}
interface y {}
interface z extends x, y {}
// NOTE: Class can also implements multiple interface.
class foo implements x, y {}

// IMP: interface can extend a class
class SayHI {
  constructor(private messageWithHI: string) {}
}
interface SayHIBetter extends SayHI {
  hiInOwnCulture(): string;
}
