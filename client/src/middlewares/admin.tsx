import { Middleware } from "redux";
import axios from "axios";
import { url } from "../environments/api";
axios.defaults.baseURL = url;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

const admin: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type, id } = action;
  switch (type) {
    case "DELETE_PROJECT":
      axios
        .delete(`/admin/project/${id}`)
        .then(({ data }) => console.log(data))
        .catch(({ response: { data: { msg } } }) => console.log(msg));
      break;
    default:
      next(action);
      break;
  }
};

export default admin;
