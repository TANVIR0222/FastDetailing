import * as Yup from "yup";

export const CreateNewCustomerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  phone: Yup.string()
    .matches(/^(?:\+?88)?01[3-9]\d{8}$/, "Invalid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email format").nullable(),
  address: Yup.string()
    .min(3, "Address must be at least 3 characters")
    .required("Address is required"),
});

export const CreateNewVehicleValidationSchema = Yup.object().shape({
  // Vehicle field validation
  vehicle: Yup.string()
    .required("Vehicle is required") // Makes the vehicle field required
    .min(3, "Vehicle name must be at least 3 characters"), // Minimum length of 3 characters

  // Year field validation
  year: Yup.number()
    .required("Year is required") // Makes the year field required
    .min(1900, "Year must be after 1900") // Makes sure the year is not before 1900
    .max(new Date().getFullYear(), `Year must not be in the future`) // Makes sure the year is not in the future
    .integer("Year must be a valid number"), // Ensures the year is an integer
});
