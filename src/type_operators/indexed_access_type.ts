// NEW: To retrieve and reuse the property types from existing types
type Person = {
  name: string;
  age: number;
  something: number[];
};
// NOTE: suppose we want the typeof Person.name how can we do it?
let a: Person = {
  name: "John Doe",
  age: 27,
  something: [1, 2, 3, 4],
};
type PersonName = typeof a.name;
// res: type PersonName = string;

// IMP: yes we can do the above but for that we have to create an object. There is a better way to do it wihtout creating an object.
type PersonName2 = Person["name"];
// res: type PersonName2 = string;

// NEW: accessing multiple property types
type PersonInfo = Person["name" | "age"];

// NEW: accessing all values
type PersonKeyTypes = Person[keyof Person];

// NEW: typealias as an index
type NameKey = "name";
type PersonNameKey = Person[NameKey]; // works well.

// NOTE: we can't use variables we have to use typealias.
const nameKey = "name";
// type PersonNameKey = Person[nameKey];
// However we can do something like below
// only works with `const` not `let`;
type PersonNameKey2 = Person[typeof nameKey];

// NEW: Nested PROPERTY TYPES.
type Application = {
  settings: {
    notifications: {
      email: {
        enabled: boolean;
        frequency: string;
      };
    };
  };
};

type EmailNotificationsEnabled =
  Application["settings"]["notifications"]["email"]["enabled"];
// res: type EmailNotificationsEnabled = boolean;

// NEW: Array Element types.
type Names = string[];
type name = Names[number];
// res: type name = string;

// NEW: Array of objects

type Products = Array<{
  id: number;
  name: string;
  price: number;
}>;
type Product = Products[number];
// res: type Product = {id: number; name: string; price: number};

type ProductNameType = Products[number]["name"];
// res: type ProductNameType = string;

// NEW: tuples
type ProductEntry = [number, string, boolean];
type ProductId = ProductEntry[0]; // res: number;
type ProductName = ProductEntry[1]; // res: string
type ProductAvailablity = ProductEntry[2]; // res: boolean
type ProductKeyUnion = ProductEntry[number];
// res: number | string | boolean;

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
  },
  {
    id: 2,
    name: "Tablet",
    price: 800,
  },
];
type ProductTypeArray = typeof products;
type ProductType2 = (typeof products)[number];
// NOTE: first one return array; second one return single element type.

// NEW: get value as it is
const roles = ["admin", "editor", "viewer"] as const;

type Role = (typeof roles)[number];
