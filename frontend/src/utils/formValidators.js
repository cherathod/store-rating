// FORM VALIDATIONS

export const validateName = (name) => {
  if (!name) return "Name is required";
  if (name.length < 20) return "Name must be at least 20 characters";
  if (name.length > 60) return "Name cannot exceed 60 characters";
  return "";
};

export const validateEmail = (email) => {
  if (!email) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Invalid email format";
  return "";
};

export const validateAddress = (address) => {
  if (!address) return "Address is required";
  if (address.length > 400) return "Address cannot exceed 400 characters";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters long";
  if (password.length > 16) return "Password cannot exceed 16 characters";
  if (!/[A-Z]/.test(password))
    return "Password must contain at least one uppercase letter";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return "Password must contain at least one special character";
  return "";
};
