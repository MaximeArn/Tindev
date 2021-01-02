const slugify = require("slugify");
slugify.extend({ é: "é", è: "è" });

export default (string: string) => {
  return slugify(string, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: "vi",
  });
};
