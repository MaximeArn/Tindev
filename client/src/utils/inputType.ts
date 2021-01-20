const input: any = {
  age: "number",
  email: "email",
  password: "password",
  confirmPassword: "password",
  description: "textarea",
  avatar: "file",
  experience: "textarea",
  about: "textarea",
};

export default (name: string) => input[name] || "text";
