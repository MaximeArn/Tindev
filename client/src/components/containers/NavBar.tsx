import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { State } from "../../models/states";
import { AuthModalOpening } from "../../models/modal";
import { AnyAction, Dispatch } from "redux";

const mapState = ({ auth: { user }, search: { search } }: State) => ({
  user,
  search,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  logout: () => dispatch({ type: "DISCONNECT_USER" }),
  openModal: ({ modalStatus, modal }: AuthModalOpening) => {
    dispatch({ type: "SET_AUTH_MODAL_STATUS", modalStatus, modal });
  },
  getSearchValue: (value: string) =>
    dispatch({ type: "GET_SEARCH_VALUE", value }),
  sendSearch: () => dispatch({ type: "SEND_RESEARCH" }),
});
export default connect(mapState, mapDispatch)(NavBar);
