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

const setLogin = (
  { getState, dispatch, next, action }: AxiosAuthSubmit,
  history: any
) => {
  console.log("SET LOGIN GOT CALLED LOL");
  const { login } = getState().auth;
  axios
    .post("/auth/login", { ...login }, { withCredentials: true })
    .then(({ data }) => {
      dispatch({ type: "CONNECT_USER", credentials: data });
      history.push("/");
    })
    .catch(({ response }) => {
      const { msg: error } = response.data;
      dispatch({ type: "LOGIN_ERROR_HANDLER", error });
    });
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
    default:
      next(action);
      break;
  }

  next(action);
};

export default auth;
