/** @format */

import { AnyAction, Dispatch, Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosSubmit } from "../models/axios";
import { url } from "../environments/api";
import Cookies from "js-cookie";
import axios from "axios";
import { nextTick } from "process";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const setUser = ({ getState, dispatch }: AxiosSubmit) => {
  const { register } = getState().auth;
  dispatch({ type: "SET_REGISTER_LOADER", value: true });
  axios
    .post("/auth/register", register)
    .then(({ data: { msg } }) => {
      Cookies.remove("token");
      dispatch({
        type: "SWAP_AUTH_MODAL",
        modal: "register",
        modal2: "login",
        modalStatus: false,
      });
      dispatch({ type: "REGISTER_SUCCESS_MESSAGE", message: msg });
      dispatch({ type: "RESET_AUTH_INPUTS_VALUES", authType: "register" });
      dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "REGISTER_ERROR_HANDLER", error });
    })
    .finally(() => {
      dispatch({ type: "SET_REGISTER_LOADER", value: false });
    });
};

const setLogin = ({ getState, dispatch }: AxiosSubmit) => {
  const { login } = getState().auth;
  dispatch({ type: "SET_LOGIN_LOADER", value: true });
  axios
    .post("/auth/login", login)
    .then(({ data }) => {
      const { token, email, username } = data;
      !Cookies.get("token") && Cookies.set("token", token, { expires: 7 });
      dispatch({ type: "CONNECT_USER", credentials: { email, username } });
      dispatch({
        type: "SET_AUTH_MODAL_STATUS",
        modalStatus: false,
        modal: "login",
      });
      dispatch({ type: "RESET_AUTH_INPUTS_VALUES", authType: "login" });
      dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
      dispatch({ type: "RESET_REGISTER_SUCCESS_MESSAGE" });
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
      .then(({ data: credentials }) => {
        dispatch({ type: "CONNECT_USER", credentials });
      })
      .catch(({ response }) => console.log(response));
};

const logout = (next: Function, action: AuthMiddleware) => {
  axios.get("/auth/logout").finally(() => {
    Cookies.remove("token");
    next(action);
  });
};

const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthMiddleware
) => {
  switch (action.type) {
    case "SUBMIT_REGISTER":
      setUser({ getState, dispatch });
      break;
    case "SUBMIT_LOGIN":
      setLogin({ getState, dispatch });
      break;
    case "TOKEN_VALIDATION":
      retrieveToken(dispatch);
      break;
    case "DISCONNECT_USER":
      logout(next, action);
      break;
    default:
      next(action);
      break;
  }
};

export default auth;
