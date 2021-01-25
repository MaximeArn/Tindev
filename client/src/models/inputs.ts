export interface GetInputValues {
  getRegisterInputValue: Function;
  getLoginInputValue: Function;
  getProjectInputValue: Function;
  getProjectDetailValue: Function;
  getForgotPasswordInputValue: Function;
  getResetPasswordInputValues: Function;
}
export interface InputModel {
  formType: string;
  name: string;
  inputValue: string | number | undefined;
  required: boolean;
  getInputValues: GetInputValues;
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
