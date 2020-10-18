import { AnyAction, Dispatch } from "redux";
import { AuthMiddleware } from "./actions";

export interface AxiosSubmit {
  getState: any;
  dispatch: Dispatch<AnyAction>;
  //   next: Dispatch<AnyAction>;
  //   action: AuthMiddleware;
}

export interface AxiosApplicant {
  dispatch: Dispatch<AnyAction>;
  data: {
    projectId: string;
    userId: string;
    username?: string;
  };
}
