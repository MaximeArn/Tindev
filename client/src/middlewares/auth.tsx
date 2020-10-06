import { Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosRegisterSubmit } from "../models/axios";
import { url } from "../environments/api";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";

const setUser = ({ getState, dispatch, next, action }: AxiosRegisterSubmit) => {
  const { register } = getState().auth;
  console.log(register);
  axios
    .post("/auth/register", { ...register }, { withCredentials: true })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(error));
};

const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthMiddleware
) => {
  switch (action.type) {
    case "SUBMIT_REGISTER":
      setUser({ getState, dispatch, next, action });
  }
  next(action);
};

export default auth;
