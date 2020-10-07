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
    .catch((error) => console.error(error));
};

const setLogin = ({ getState, dispatch, next, action }: AxiosAuthSubmit) => {
  const { login } = getState().auth;
  console.log(login);
  axios
    .post("/auth/login", { ...login }, { withCredentials: true })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
};

const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthMiddleware
) => {
  console.log("AUTH MIDDLEWARE CALLED");
  switch (action.type) {
    case "SUBMIT_REGISTER":
      setUser({ getState, dispatch, next, action });
    case "SUBMIT_LOGIN":
      setLogin({ getState, dispatch, next, action });
  }

  next(action);
};

export default auth;
