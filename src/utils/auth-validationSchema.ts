import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .trim()
    .required("Password is required"),
});

//  Yup validation schema
export const registerValidationSchema = Yup.object().shape({
  full_name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
  phone_number: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number") // optional +, 10-15 digits
    .required("Phone number is required"),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  checkbox: Yup.boolean().oneOf([true], "You must accept terms"),
});

export const businessInfoValidationSchema = Yup.object().shape({
  business_name: Yup.string().required("Business name is required"),
  business_phone: Yup.string()
    .matches(/^\+?\d{7,15}$/, "Invalid phone number")
    .required("Phone number is required"),
  business_address: Yup.string().required("Address is required"),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
});
export const employeeLoginValidationsSchema = Yup.object().shape({
  phone_number: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number") // optional +, 10-15 digits
    .required("Phone number is required"),
});

export const createNewPasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Password is required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const changePasswordalidationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required")
    .min(6, "Password must be at least 6 characters"),

  newPassword: Yup.string()
    .required("New password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});

export const cardValidationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .min(6, "Card number must be at least 6 characters"),

  expiry: Yup.string()
    .required("Expiry date is required")
    .min(5, "Expiry must be in MM/YY format"),

  cvv: Yup.string()
    .required("CVV is required")
    .min(3, "CVV must be at least 3 digits")
    .max(4, "CVV must be at most 4 digits"),

  holderName: Yup.string()
    .required("Card holder name is required")
    .min(2, "Holder name must be at least 2 characters"),
});

export const businessUrlValidationSchema = Yup.object().shape({
  businessUrl: Yup.string()
    .url("Invalid URL")
    .trim()
    .required("Business URL is required"),
});

export const addEmployeeValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  phone: Yup.string()
    .matches(/^(?:\+?88)?01[3-9]\d{8}$/, "Invalid phone number")
    .required("Phone is required"),
});
export const categoryNameValidationSchema = Yup.object().shape({
  category_name: Yup.string()
    .min(2, "Category name must be at least 2 characters")
    .required("Category name is required"),
});
export const qrcodeValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Category name must be at least 2 characters")
    .required("Category name is required"),
  url: Yup.string().url("Please enter a valid URL").required("URL is required"),
});
export const MarketingFlowValidationSchema = Yup.object().shape({
  flow_name: Yup.string()
    .min(2, "Category name must be at least 2 characters")
    .required("Category name is required"),
});

export const extraServicesValidationSchema = Yup.object().shape({
  serviceName: Yup.string()
    .min(2, "Service Name must be at least 2 characters")
    .required("Service Name is required"),

  price: Yup.number()
    .typeError("Price must be a number")
    .positive("Price must be greater than 0")
    .required("Price is required"),

  duration: Yup.string()
    .matches(
      /^(\d+h)? ?(\d+min)?$/,
      'Duration must be in format "1h 30min" or "45min"'
    )
    .required("Duration is required"),
});

export const GeneratevalidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  paste_URL: Yup.string()
    .url("Invalid URL format")
    .required("Paste URL is required"),
});

export const AccountInfovalidationSchema = Yup.object().shape({
  change_name: Yup.string().required("Name is required"),
  change_phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone must be only digits")
    .min(10, "Phone must be at least 10 digits")
    .required("Phone number is required"),
  change_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
