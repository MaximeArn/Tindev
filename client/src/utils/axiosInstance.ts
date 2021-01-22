import axios from "axios";
import { url as baseURL } from "../environments/api";
import authorizationHandler from "../services/authorizationHandler";

const format = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    post: format,
    patch: format,
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const {
      status,
      data: { msg },
    } = error.response;

    //TODO: prevent authorization handler if request referer is /auth/verify
    status === 401 && authorizationHandler(msg);
    return error;
  }
);

export default instance;
