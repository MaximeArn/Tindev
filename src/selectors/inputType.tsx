const input: any = {
  age: "number",
  email: "email",
  password: "password",
  confirmPassword: "password",
};

export default (name: string) => input[name] || "text";
