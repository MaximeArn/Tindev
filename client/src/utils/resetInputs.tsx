export default (inputs: any) => {
  for (const key in inputs) {
    inputs[key] = "";
  }
  return inputs;
};
