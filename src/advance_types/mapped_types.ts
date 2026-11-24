// NEW: mapped types transforms current types to new types.
type Employee = {
  firstName: string;
  lastName: string;
  email: string;
  salary: number;
  active: boolean;
};

type EmployeeUpdate = {
  [key in keyof Employee]?: Employee[key];
};
/* res:
    type EmployeeUpdate = {
      firstName?: string;
      lastName?: string;
      email?: string;
      salary?: number;
    }
*/

//NEW : resusable types
type Partial<T> = {
  [property in keyof T]?: T[property];
};

type EmployeeUpdate2 = Partial<Employee>;
