// NEW: type guard operators
//  typeof
//  instanceof
//  in operator
//  type predicate

// NEW: typeof
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }

  throw new Error(
    "Invalid arguments. Both arguments must be either numbers or strings.",
  );
}

// NEW: instanceof
class Customer {
  isCreditAllowed(): boolean {
    // ...
    return true;
  }
}

class Supplier {
  isInShortList(): boolean {
    // ...
    return true;
  }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string {
  let message: string;

  if (partner instanceof Customer) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  }

  if (partner instanceof Supplier) {
    message = partner.isInShortList()
      ? "Sign a new contract the supplier"
      : "Need to evaluate further";
  }
  throw new Error("Invalid argument");
}

// NEW: in operator

function signContract2(partner: BusinessPartner): string {
  let message: string;
  if ("isCreditAllowed" in partner) {
    message = partner.isCreditAllowed()
      ? "Sign a new contract with the customer"
      : "Credit issue";
  } else {
    // must be Supplier
    message = partner.isInShortList()
      ? "Sign a new contract the supplier "
      : "Need to evaluate further";
  }
  return message;
}

// NEW: type predicate
function isCustomer(partner: any): partner is Customer {
  return partner instanceof Customer;
}

// It tells TypeScript that if isCustomer(partner) returns true, treat partner as a Customer. The name before is must match the name of a function parameter.
