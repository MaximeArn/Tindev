export interface AuthenticationAction {
  type: string;
  inputName: string;
  inputValue: string | number;
}

export interface AuthReducer {
  type: string;
}
