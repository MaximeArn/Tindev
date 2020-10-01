const inputs: any = [
  { age: "number" },
  { email: "email" },
  { password: "password" },
  { confirmPassword: "password" },
];

export default (name: string) => {
  const inputType = inputs.find((obj: any) => obj[name]);
  return inputType ? inputType[name] : "text";
};
