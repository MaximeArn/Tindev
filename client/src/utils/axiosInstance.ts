import axios from "axios";
import { url as baseURL } from "../environments/api";

const format = {
  "Content-Type": "application/json",
};

export default axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    post: format,
    patch: format,
  },
});
