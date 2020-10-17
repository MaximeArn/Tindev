/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosSubmit } from "../models/axios";
import { url } from "../environments/api";
import Cookies from "js-cookie";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const setUser = ({ getState, dispatch }: AxiosSubmit, history: any) => {
  const { register } = getState().auth;
  dispatch({ type: "SET_REGISTER_LOADER", value: true });
  axios
    .post("/auth/register", { ...register }, { withCredentials: true })
    .then(({ data: { msg } }) => {
      history.push({
        pathname: "/login",
        state: { msg },
      });
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "REGISTER_ERROR_HANDLER", error });
    })
    .finally(() => {
      dispatch({ type: "SET_REGISTER_LOADER", value: false });
    });
};

const setLogin = ({ getState, dispatch }: AxiosSubmit, history: any) => {
  const { login } = getState().auth;
  dispatch({ type: "SET_LOGIN_LOADER", value: true });
  axios
    .post("/auth/login", { ...login })
    .then(({ data }) => {
      const { token, email, username } = data;
      !Cookies.get("token") && Cookies.set("token", token, { expires: 7 });
      dispatch({ type: "CONNECT_USER", credentials: { email, username } });
      dispatch({ type: "SET_AUTH_MODAL_STATE", modalStatus: false });
      history.push("/");
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "LOGIN_ERROR_HANDLER", error });
    })
    .finally(() => {
      dispatch({ type: "SET_LOGIN_LOADER", value: false });
    });
};

const retrieveToken = (dispatch: Dispatch<AnyAction>) => {
  Cookies.get("token") &&
    axios
      .get("/auth/verify")
      .then(({ data: { username, email } }) => {
        dispatch({ type: "CONNECT_USER", credentials: { username, email } });
      })
      .catch(({ response }) => console.log(response));
};

const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthMiddleware
) => {
  const { user } = getState().auth;
  switch (action.type) {
    case "SUBMIT_REGISTER":
      setUser({ getState, dispatch }, action.history);
      break;
    case "SUBMIT_LOGIN":
      !user && setLogin({ getState, dispatch }, action.history);
      break;
    case "TOKEN_VALIDATION":
      retrieveToken(dispatch);
      break;
    default:
      next(action);
      break;
  }
};

export default auth;
