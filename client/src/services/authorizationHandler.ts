import store from "../store/store";

export default (message: string) => {
  store.dispatch({ type: "INVALID_TOKEN", message });
};
