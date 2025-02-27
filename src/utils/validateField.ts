import { Credentials } from "@/pages/sign-up/types/types";

export const validateField = (
  name: keyof Credentials,
  value: string
): string => {
  let val = value;
  if (name === "username" || name === "email") {
    val = value.trim();
  }
  switch (name) {
    case "username":
      if (!val) return "Username is required";
      if (val.length < 3) return "Username must be at least 3 characters";
      if (val.length > 20) return "Username must be less than 20 characters";
      return "";
    case "email":
      if (!val) return "Email is required";
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val))
        return "Invalid email format";
      return "";

    case "password":
      if (!val) return "Password is required";
      if (val.length < 6) return "Password must be at least 6 characters";
      return "";

    case "dob":
      if (!val) return "Date of birth is required";
      return "";
    case "gender":
      if (!val) return "Gender is required";
      return "";

    default:
      return "";
  }
};
