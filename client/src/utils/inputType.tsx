const input: any = {
  age: "number",
  email: "email",
  password: "password",
  confirmPassword: "password",
  description: "textarea",
};

export default (name: string) => input[name] || "text";
