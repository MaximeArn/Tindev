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

    //TODO: return error anyway cause i have undefined errors in original catch block, or maybe try
    // to return unresolved promise, if you return error just do a !error.status === 401 && expression
    if (status === 401) {
      authorizationHandler(msg);
      throw new axios.Cancel("OPERATION GOT CANCELLED");
    }

    return error;
  }
);

export default instance;
