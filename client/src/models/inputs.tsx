export interface InputModel {
  formType: string;
  name: string;
  placeHolder: string;
  inputValue: string | number | undefined;
  getRegisterInputValue: Function;
  getLoginInputValue: Function;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  city?: string;
  age?: number | undefined;
}
