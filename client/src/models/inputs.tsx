export interface InputModel {
  formType: string;
  name: string;
  inputValue: string | number | undefined;
  categories: string[];
  required: boolean;
  getRegisterInputValue: Function;
  getLoginInputValue: Function;
  getProjectInputValue: Function;
  getProjectDetailValue: Function;
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

export interface InputMapperRequiredFields {
  username?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
