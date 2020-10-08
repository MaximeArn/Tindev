import { Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosAuthSubmit } from "../models/axios";
import { url } from "../environments/api";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";

const setUser = ({ getState, dispatch, next, action }: AxiosAuthSubmit) => {
  const { register } = getState().auth;
  console.log(register);
  axios
    .post("/auth/register", { ...register }, { withCredentials: true })
    .then((response) => {
      console.log(response);
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "REGISTER_ERROR_HANDLER", error });
    });
};

const setLogin = ({ getState, dispatch, next, action }: AxiosAuthSubmit) => {
  const { login } = getState().auth;
  console.log(login);
  axios
    .post("/auth/login", { ...login }, { withCredentials: true })
    .then((result) => {
      console.log(result);
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "LOGIN_ERROR_HANDLER", error });
    });
};

const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthMiddleware
) => {
  console.log("AUTH MIDDLEWARE CALLED", action);
  switch (action.type) {
    case "SUBMIT_REGISTER":
      setUser({ getState, dispatch, next, action });
      break;
    case "SUBMIT_LOGIN":
      setLogin({ getState, dispatch, next, action });
      break;
    default:
      next(action);
      break;
  }

  next(action);
};

export default auth;
