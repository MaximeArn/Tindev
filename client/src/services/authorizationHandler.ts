import store from "../store/store";
const { dispatch } = store;

export default (message: string) => dispatch({ type: "INVALID_TOKEN", message });
