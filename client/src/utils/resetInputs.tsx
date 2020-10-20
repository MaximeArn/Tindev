export default (inputs: any) => {
  const inputsCopy = { ...inputs };
  for (const key in inputsCopy) {
    inputsCopy[key] = "";
  }
  return inputsCopy;
};
