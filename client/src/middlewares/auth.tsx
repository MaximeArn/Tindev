import { AnyAction, Dispatch, Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosSubmit } from "../models/axios";
import { url } from "../environments/api";
import Cookies from "js-cookie";
import axios from "axios";
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
    .catch(
      ({
        response: {
          data: { msg: error },
        },
      }) => {
        dispatch({ type: "LOGIN_ERROR_HANDLER", error });
        dispatch({ type: "REGISTER_SUCCESS_MESSAGE" });
      }
    )
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

const logout = (dispatch: Dispatch<AnyAction>) => {
  axios.delete("/auth/logout").finally(() => {
    Cookies.remove("token");
    dispatch({ type: "RESET_GLOBAL_STATE" });
  });
};

const activateAccount = (dispatch: Dispatch<AnyAction>, token: string) => {
  dispatch({ type: "ACCOUNT_ACTIVATION_LOADER", value: true });
  axios
    .get(`/auth/verify_account/${token}`)
    .then(({ data: { msg } }) =>
      dispatch({ type: "ACCOUNT_ACTIVATION_SUCCESS_MESSAGE", message: msg })
    )
    .catch(({ response: { data: { msg: error } } }) =>
      dispatch({ type: "ACCOUNT_ACTIVATION_ERROR_HANDLER", error })
    )
    .finally(() =>
      dispatch({ type: "ACCOUNT_ACTIVATION_LOADER", value: false })
    );
};

const checkAccountTokenValidity = (
  dispatch: Dispatch<AnyAction>,
  token: string
) => {
  axios
    .get(`/auth/token_validity/${token}`)
    .then(({ data }) => console.log(data))
    .catch(({ response: { data } }) => console.error(data));
};

const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthMiddleware
) => {
  const { type, token } = action;
  switch (type) {
    case "SUBMIT_REGISTER":
      setUser({ getState, dispatch });
      break;
    case "SUBMIT_LOGIN":
      setLogin({ getState, dispatch });
      break;
    case "ACCOUNT_VERIFICATION":
      activateAccount(dispatch, token);
      break;
    case "VERIFY_ACCOUNT_TOKEN_VALIDITY":
      checkAccountTokenValidity(dispatch, token);
      break;
    case "TOKEN_VALIDATION":
      retrieveToken(dispatch);
      break;
    case "DISCONNECT_USER":
      logout(dispatch);
      break;
    default:
      next(action);
      break;
  }
};

export default auth;
