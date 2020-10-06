import { Middleware } from "redux";
import { AuthReducer } from "../models/actions";
const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthReducer
) => {
  next(action);
};

export default auth;
