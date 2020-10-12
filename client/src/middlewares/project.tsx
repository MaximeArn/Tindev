import { Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

const sendProject = ({ getState, dispatch }: AxiosSubmit) => {
  const { createProject } = getState().project;
  const formData = new FormData();

  for (const key in createProject) {
    formData.append(key, createProject[key]);
  }

  axios
    .post("/project/create", formData)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => console.log(error));
};

const project: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  switch (action.type) {
    case "SEND_PROJECT":
      sendProject({ getState, dispatch });
      break;
    default:
      next(action);
      break;
  }
};

export default project;
