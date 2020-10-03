export interface Register {
  formType: string;
  name: string;
  placeHolder: string;
  inputValue: string | number | undefined;
  getRegisterInputValue: Function;
  getLoginInputValue: Function;
}
