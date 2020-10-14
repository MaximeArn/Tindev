/** @format */

const slugify = require("slugify");

export default (string: string) => {
  return slugify(string, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: "vi",
  });
};
