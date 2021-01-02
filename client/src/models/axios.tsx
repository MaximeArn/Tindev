import { AnyAction, Dispatch } from "redux";

export interface AxiosSubmit {
  getState?: any;
  dispatch: Dispatch<AnyAction>;
  history?: any;
}

export interface AxiosApplicant {
  dispatch: Dispatch<AnyAction>;
  data: {
    projectId: string;
    userId: string;
    username?: string;
  };
}
