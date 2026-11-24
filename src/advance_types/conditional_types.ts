// NEW: decide a type based on condition.
// SomeType extends OtherType ? TrueType : FalseType;
type Result = string extends string ? "yes" : "no";
// type Result = "yes" // res:
type TextField = {
  value: string;
  maxLength: number;
};

type NumberField = {
  value: number;
  min: number;
  max: number;
};

type Field<T> = T extends string ? TextField : NumberField;

const fullName: Field<string> = {
  value: "John Doe",
  maxLength: 60,
};

const salary: Field<number> = {
  value: 110_000,
  min: 0,
  max: 120_000,
};
