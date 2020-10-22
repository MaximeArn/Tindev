const PROJECT_CREATION: any = {
  image: null,
  size: null,
  categories: [],
};

export default (inputs: any) => {
  const inputsCopy = { ...inputs };
  for (const key in inputsCopy) {
    PROJECT_CREATION.hasOwnProperty(key)
      ? (inputsCopy[key] = PROJECT_CREATION[key])
      : (inputsCopy[key] = "");
  }
  return inputsCopy;
};
