import { object, string } from "yup";

export const validationSchema = object({
  name: string()
    .required("Name is required")
    .min(5, "Name must have at least 5 characters"),
  email: string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email format"
    ),
  password: string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters"),
});
