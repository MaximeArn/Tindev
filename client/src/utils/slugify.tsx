/** @format */

const slugify = require("slugify");

const slugifyString = (string: string) => {
  return slugify(string, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: "vi",
  });
};

export default slugifyString;
