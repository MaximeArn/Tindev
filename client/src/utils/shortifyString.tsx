export default (string: string) =>
  string.length < 180 ? string : string.substring(0, 177) + "...";
