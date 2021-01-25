import { AnyAction, Dispatch, Middleware } from "redux";
import { AuthMiddleware } from "../models/actions";
import { AxiosSubmit } from "../models/axios";
import axios from "../utils/axiosInstance";

const createUser = ({ getState, dispatch }: AxiosSubmit) => {
  const { register } = getState().auth;
  dispatch({ type: "SET_REGISTER_LOADER", value: true });
  axios
    .post("/auth/register", register)
    .then(({ data: { msg } }) => {
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
    .catch(
      ({
        response: {
          data: { msg: error },
        },
      }) => {
        dispatch({ type: "REGISTER_ERROR_HANDLER", error });
      }
    )
    .finally(() => {
      dispatch({ type: "SET_REGISTER_LOADER", value: false });
    });
};

const login = ({ getState, dispatch }: AxiosSubmit) => {
  const { login } = getState().auth;
  dispatch({ type: "SET_LOGIN_LOADER", value: true });
  axios
    .post("/auth/login", login)
    .then(({ data: credentials }) => {
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
    .get("/verification")
    .then(({ data: credentials }) => dispatch({ type: "CONNECT_USER", credentials }))
    .catch(() => axios.delete("/auth/clear_cookies"));
};

const logout = ({ getState, dispatch, history }: AxiosSubmit, message?: string) => {
  const { username } = getState().auth.user || {};
  axios.delete(`/auth/logout/${username}`).finally(() => {
    dispatch({ type: "RESET_GLOBAL_STATE" });
    history.push("/");

    if (message) {
      dispatch({ type: "REDIRECTION_SUCCESS_MESSAGE", message });
      dispatch({
        type: "SET_REDIRECTION_MODAL_STATUS",
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
    .finally(() => dispatch({ type: "SET_ACCOUNT_ACTIVATION_LOADER", value: false }));
};

const checkAccountTokenValidity = (dispatch: Dispatch<AnyAction>, token: string) => {
  axios
    .get(`/auth/token_validity/${token}`)
    .catch(({ response: { data: error } }) =>
      dispatch({ type: "ACCOUNT_TOKEN_ERROR_HANDLER", error })
    );
};

const sendActivationLink = (
  dispatch: Dispatch<AnyAction>,
  userId: string,
  type: string,
  email?: string
) => {
  dispatch({ type: "SET_NEW_ACTIVATION_LINK_LOADER", value: true });
  axios
    .post("/auth/send_token", email ? { email, type } : { userId, type })
    .then(({ data: { message } }) => {
      dispatch({ type: "ACTIVATION_LINK_SUCCESS_MESSAGE", message });
      dispatch({ type: "ACCOUNT_TOKEN_ERROR_HANDLER" });
      dispatch({ type: "LOGIN_ERROR_HANDLER" });
    })
    .catch((error) => console.error(error))
    .finally(() => dispatch({ type: "SET_NEW_ACTIVATION_LINK_LOADER", value: false }));
};

const resetUserPassword = async ({ getState, dispatch }: AxiosSubmit) => {
  try {
    const { forgotPassword } = getState().auth;

    dispatch({ type: "SET_FORGOT_PASSWORD_LOADER", value: true });
    const {
      data: { message },
    } = await axios.post("/auth/forgot_password", forgotPassword);
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

const sendNewPassword = async ({ getState, dispatch }: AxiosSubmit, token: string) => {
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
  const { type, token, userId, linkType, email, message, history } = action;
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
      sendActivationLink(dispatch, userId, linkType, email);
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
      logout({ getState, dispatch, history }, message);
      break;
    default:
      next(action);
      break;
  }
};

export default auth;
