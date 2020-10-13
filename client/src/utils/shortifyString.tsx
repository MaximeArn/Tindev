/** @format */

const shortify = (string: string) => {
  return string.length < 180 ? string : string.substring(0, 180) + "...";
};
export default shortify;
