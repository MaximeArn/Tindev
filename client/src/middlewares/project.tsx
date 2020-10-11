import { Middleware } from "redux";
import { url } from "../environments/api";
import { AxiosSubmit } from "../models/axios";
import axios from "axios";
import { Fireplace } from "@material-ui/icons";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

const sendProject = ({ getState, dispatch }: AxiosSubmit) => {
  const { createProject } = getState().project;

  const formData = new FormData();
  for (const key in createProject) {
    key === "image" && createProject["image"]
      ? formData.append(key, createProject[key], "projectImage")
      : formData.append(key, createProject[key]);
  }
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
