import { ISchema } from "../meta/i-table";

export const schema1: ISchema = {
  searchableColumns: ["car_make", "car_model_year"],
  columns: [
    {
      name: "checkbox",
      displayName: "ID",
      displaySlot: "headerCheckbox",
      slotName: "checkbox",
    },
    {
      name: "id",
      displayName: "ID",
    },
    {
      name: "car_make",
      displayName: "Car Make",
      slotName: "car",
    },
    {
      name: "car_model_year",
      displayName: "Car Model Year",
    },
    {
      name: "car_vin",
      displayName: "Car VIN",
    },
    {
      name: "action",
      slotName: "action",
      displayName: "Action",
    },
  ],
};
export const schema2: ISchema = {
  searchableColumns: [],
  columns: [
    {
      name: "id",
      displayName: "ID",
    },
    {
      name: "fullname.fName",
      displayName: "First Name",
    },
    {
      name: "fullname.lName",
      displayName: "Last Name",
    },
    {
      name: "email",
      displayName: "Email",
    },
    {
      name: "car.make",
      displayName: "Car Make",
    },
    {
      name: "car.model",
      displayName: "Car Model",
    },
    {
      name: "car.year",
      displayName: "Car Year",
    },
    {
      name: "address.street",
      displayName: "Street Address",
    },
    {
      name: "address.city",
      displayName: "City",
    },
    {
      name: "address.state",
      displayName: "State",
    },
    {
      name: "address.zip.code",
      displayName: "ZIP Code",
    },
  ],
};
export const schema3: ISchema = {
  columns: [
    {
      name: "id",
      displayName: "ID",
    },
    {
      name: "first_name",
      displayName: "First Name",
    },
    {
      name: "last_name",
      displayName: "Last Name",
    },
    {
      name: "email",
      displayName: "Email",
    },
    {
      name: "gender",
      displayName: "Gender",
    },
    {
      name: "ip_address",
      displayName: "IP Address",
    },
  ],
};
