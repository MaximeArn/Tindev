interface AuthInputs {
  login: boolean;
  register: boolean;
}

export default (inputs: any | AuthInputs) => {
  const inputsCopy = { ...inputs };
  for (const key in inputsCopy) {
    inputs.hasOwnProperty("login")
      ? (inputsCopy[key] = false)
      : (inputsCopy[key] = "");
  }
  return inputsCopy;
};
