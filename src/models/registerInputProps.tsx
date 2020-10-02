export interface RegisterInput {
  name: string;
  placeHolder: string;
  inputValue: string | number | undefined;
  getInputValue: Function;
}
