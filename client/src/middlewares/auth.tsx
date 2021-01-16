import { AnyAction, Dispatch, Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosSubmit } from "../models/axios";
import { url } from "../environments/api";
import Cookies from "js-cookie";
import axios from "axios";
import browserHistory from "../utils/history";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const createUser = ({ getState, dispatch }: AxiosSubmit) => {
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

const login = ({ getState, dispatch }: AxiosSubmit) => {
  const { login } = getState().auth;
  dispatch({ type: "SET_LOGIN_LOADER", value: true });
  axios
    .post("/auth/login", login)
    .then(({ data }) => {
      console.log("RECEIVED DATA : ", data);
      const { token, ...credentials } = data;
      // !Cookies.get("token") &&
      //   Cookies.set("token", token, { expires: 7, sameSite: "strict" });
      dispatch({ type: "CONNECT_USER", credentials });
      dispatch({
        type: "SET_AUTH_MODAL_STATUS",
        modalStatus: false,
        modal: "login",
      });
      dispatch({ type: "RESET_AUTH_INPUTS_VALUES", authType: "login" });
      dispatch({ type: "RESET_AUTH_MODAL_ERROR_VALUES" });
      dispatch({ type: "RESET_REGISTER_SUCCESS_MESSAGE" });
    })
    .catch(({ response: { data: error } }) => {
      dispatch({ type: "LOGIN_ERROR_HANDLER", error });
      dispatch({ type: "REGISTER_SUCCESS_MESSAGE" });
    })
    .finally(() => {
      dispatch({ type: "SET_LOGIN_LOADER", value: false });
    });
};

const retrieveToken = (dispatch: Dispatch<AnyAction>) => {
  axios
    .get("/auth/verify")
    .then(({ data: credentials }) => {
      dispatch({ type: "CONNECT_USER", credentials });
    })
    .catch(({ response: { data } }) => {
      Cookies.remove("token");
      console.error(data);
    });
};

const logout = ({ dispatch, history }: AxiosSubmit, message?: string) => {
  axios.delete("/auth/logout").finally(() => {
    // Cookies.remove("token");
    dispatch({ type: "RESET_GLOBAL_STATE" });
    history.push("/");

    if (message) {
      dispatch({ type: "SUSPENDED_ACCOUNT_SUCCESS_MESSAGE", message });
      dispatch({
        type: "SET_SUSPENDED_ACCOUNT_MODAL_STATUS",
        modalStatus: true,
      });
    }
  });
};

const activateAccount = (dispatch: Dispatch<AnyAction>, token: string) => {
  dispatch({ type: "SET_ACCOUNT_ACTIVATION_LOADER", value: true });
  axios
    .get(`/auth/activate_account/${token}`)
    .then(({ data: { msg } }) =>
      dispatch({ type: "ACCOUNT_ACTIVATION_SUCCESS_MESSAGE", message: msg })
    )
    .catch(({ response: { data: { msg: error } } }) =>
      dispatch({ type: "ACCOUNT_ACTIVATION_ERROR_HANDLER", error })
    )
    .finally(() =>
      dispatch({ type: "SET_ACCOUNT_ACTIVATION_LOADER", value: false })
    );
};

const checkAccountTokenValidity = (
  dispatch: Dispatch<AnyAction>,
  token: string
) => {
  axios
    .get(`/auth/token_validity/${token}`)
    .catch(({ response: { data: error } }) =>
      dispatch({ type: "ACCOUNT_TOKEN_ERROR_HANDLER", error })
    );
};

const sendActivationLink = (
  dispatch: Dispatch<AnyAction>,
  userId: string,
  type: string
) => {
  dispatch({ type: "SET_NEW_ACTIVATION_LINK_LOADER", value: true });
  axios
    .post("/auth/send_token", { userId, type })
    .then(({ data: { message } }) => {
      dispatch({ type: "ACTIVATION_LINK_SUCCESS_MESSAGE", message });
      dispatch({ type: "ACCOUNT_TOKEN_ERROR_HANDLER" });
      dispatch({ type: "LOGIN_ERROR_HANDLER" });
    })
    .catch((error) => console.error(error))
    .finally(() =>
      dispatch({ type: "SET_NEW_ACTIVATION_LINK_LOADER", value: false })
    );
};

const resetUserPassword = async ({ getState, dispatch }: AxiosSubmit) => {
  try {
    const { email } = getState().auth.forgotPassword;

    dispatch({ type: "SET_FORGOT_PASSWORD_LOADER", value: true });
    const {
      data: { message },
    } = await axios.post("/auth/forgot_password", { email });
    dispatch({ type: "FORGOT_PASSWORD_SUCCESS_MESSAGE", message });
    dispatch({ type: "FORGOT_PASSWORD_ERROR_HANDLER" });
    dispatch({
      type: "GET_FORGOT_PASSWORD_INPUT_VALUE",
      inputName: "email",
      inputValue: "",
    });
  } catch ({
    response: {
      data: { msg: error },
    },
  }) {
    dispatch({ type: "FORGOT_PASSWORD_ERROR_HANDLER", error });
  } finally {
    dispatch({ type: "SET_FORGOT_PASSWORD_LOADER", value: false });
  }
};

const sendNewPassword = async (
  { getState, dispatch }: AxiosSubmit,
  token: string
) => {
  const { password, confirmPassword } = getState().auth.resetPassword;
  try {
    dispatch({ type: "SET_RESET_PASSWORD_LOADER", value: true });

    const {
      data: { message },
    } = await axios.post("/auth/reset_password", {
      password,
      confirmPassword,
      token,
    });

    dispatch({ type: "RESET_PASSWORD_SUCCESS_MESSAGE", message });
  } catch ({
    response: {
      data: { msg: error },
    },
  }) {
    dispatch({ type: "RESET_PASSWORD_ERROR_HANDLER", error });
  } finally {
    dispatch({ type: "SET_RESET_PASSWORD_LOADER", value: false });
  }
};

const auth: Middleware = ({ getState, dispatch }) => (next) => (
  action: AuthMiddleware
) => {
  const { type, token, userId, linkType, message, history } = action;
  switch (type) {
    case "SUBMIT_REGISTER":
      createUser({ getState, dispatch });
      break;
    case "SUBMIT_LOGIN":
      login({ getState, dispatch });
      break;
    case "ACCOUNT_VERIFICATION":
      activateAccount(dispatch, token);
      break;
    case "VERIFY_ACCOUNT_TOKEN_VALIDITY":
      checkAccountTokenValidity(dispatch, token);
      break;
    case "SEND_ACCOUNT_ACTIVATION_LINK":
      sendActivationLink(dispatch, userId, linkType);
      break;
    case "RESET_USER_PASSWORD":
      resetUserPassword({ getState, dispatch });
      break;
    case "SEND_RESET_PASSWORD_REQUEST":
      sendNewPassword({ getState, dispatch }, token);
      break;
    case "TOKEN_VALIDATION":
      retrieveToken(dispatch);
      break;
    case "DISCONNECT_USER":
      logout({ dispatch, history: history ?? browserHistory }, message);
      break;
    default:
      next(action);
      break;
  }
};

export default auth;
