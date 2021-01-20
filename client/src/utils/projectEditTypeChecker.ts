const TYPE_CHECKER: any = {
  description: "textarea",
  size: "number",
};
export default (fieldName: string) => TYPE_CHECKER[fieldName] || "text";
