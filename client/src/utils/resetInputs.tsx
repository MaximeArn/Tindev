const PROJECT_CREATION: any = {
  image: null,
  size: null,
  categories: [],
};

export default (inputs: any) => {
  const copy = { ...inputs };
  for (const key in copy) {
    PROJECT_CREATION.hasOwnProperty(key)
      ? (copy[key] = PROJECT_CREATION[key])
      : (copy[key] = "");
  }
  return copy;
};
