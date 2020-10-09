import { AnyAction, Dispatch } from "redux";
import { AuthMiddleware } from "./actions";

export interface AxiosAuthSubmit {
  getState: any;
  dispatch: Dispatch<AnyAction>;
  next: Dispatch<AnyAction>;
  action: AuthMiddleware;
}
