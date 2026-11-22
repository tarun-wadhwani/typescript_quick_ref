/*
TOPIC: ACCESS MODIFIERs IN TS.
1. private
2. public
3. protected

NOTE: Typescript only controls access logically at compile time.

TOPIC: 
private modifer
  - limits visibility to same class only.
public modifier
  - accessible from all locations
  - default modifier
protected modifier
  - access in same and child class.

*/
class BankAccount {
  // Accessible everywhere
  public owner: string;
  public static onwer2: string;

  // Accessible here + subclasses
  protected balance: number;
  protected static balance2: number;

  // Accessible only here (TS compile-time)
  private pin: number;
  private static pin2: number;

  // Accessible only here (JS runtime)
  #routingNumber = "123456789";
  static #routingNumber2 = "abcdef";

  // Readable anywhere, cannot be changed
  public readonly currency = "INR";

  constructor(
    public time: number,
    owner: string,
    balance: number,
    pin: number,
  ) {
    this.owner = owner;
    this.balance = balance;
    this.pin = pin;
  }

  public getDetails() {
    // All modifiers are accessible inside the class
    return `${this.owner}: ${this.balance} ${this.currency} (PIN: ${this.pin}, Routing: ${this.#routingNumber})`;
  }
}

class SavingsAccount extends BankAccount {
  public addInterest(rate: number) {
    this.balance += this.balance * rate; // ✅ Allowed ('protected')
    // console.log(this.pin);            // ❌ Error ('private')
  }
}

const account = new BankAccount(Date.now(), "Aarav", 5000, 1234);
console.log(account.owner); // ✅ Allowed ('public')
// console.log(account.balance); // ❌ Error ('protected')
// console.log(account.pin);     // ❌ Error ('private')
// account.currency = "USD";     // ❌ Error ('readonly')
