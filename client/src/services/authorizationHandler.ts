import store from "../store/store";
const { dispatch } = Object(store);

export default (message: string) => {
  dispatch({ type: "INVALID_TOKEN", message });
};
