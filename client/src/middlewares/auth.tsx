import { Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosAuthSubmit } from "../models/axios";
import { url } from "../environments/api";
import Cookies from "js-cookie";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const setUser = ({ getState, dispatch, next, action }: AxiosAuthSubmit) => {
  const { register } = getState().auth;
  console.log(register);
  axios
    .post("/auth/register", { ...register })
    .then((response) => {
      console.log(response);
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "REGISTER_ERROR_HANDLER", error });
    });
};

const setLogin = (
  { getState, dispatch, next, action }: AxiosAuthSubmit,
  history: any
) => {
  const { login } = getState().auth;
  axios
    .post("/auth/login", { ...login })
    .then(({ data }) => {
      const { token, email, username } = data;
      !Cookies.get("token") && Cookies.set("token", token, { expires: 7 });
      dispatch({ type: "CONNECT_USER", credentials: { email, username } });
      history.push("/");
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "LOGIN_ERROR_HANDLER", error });
    });
};

const retrieveToken = (dispatch: any) => {
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
      setUser({ getState, dispatch, next, action });
      break;
    case "SUBMIT_LOGIN":
      !user && setLogin({ getState, dispatch, next, action }, action.history);
      break;
    case "TOKEN_VALIDATION":
      retrieveToken(dispatch);
      break;
    default:
      next(action);
      break;
  }
  next(action);
};

export default auth;
