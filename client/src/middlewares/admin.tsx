import { Middleware } from "redux";

const admin: Middleware = ({ getState, dispatch }) => (next) => (action) => {
  const { type } = action;
  switch (type) {
    default:
      next(action);
      break;
  }
};

export default admin;
