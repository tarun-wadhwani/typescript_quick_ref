abstract class Employee {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}

  // abstract getters and setters.
  /*[public | protected]*/ abstract get salary(): number;
  /*[public | protected]*/ abstract set salary(value: number);

  // abstract method.
  /*[public | protected]*/ abstract getRole(): string;

  nonAbstractMethod() {
    console.log(`non abstract method`);
  }
}

class FullTimeEmployee extends Employee {
  private _salary: number = 0;

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value > 0 ? value : this._salary;
  }

  getRole(): string {
    return "";
  }
}
