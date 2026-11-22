import { log } from "node:console";

enum AnEnum {
  Value1 = 1,
  Value2 = 10,
  Value3,
}
// `enum` allows exhaustive checking.
// `enum` are typed static constants.
log(AnEnum.Value1);
