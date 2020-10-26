import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { State } from "../../models/states";
import { AuthModalOpening } from "../../models/modal";
import { withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { OwnProps } from "../../models/connect";

const mapState = ({ auth: { user }, search: { search, focused } }: State) => ({
  user,
  search,
  focused,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => ({
  logout: () => dispatch({ type: "DISCONNECT_USER" }),
  openModal: ({ modalStatus, modal }: AuthModalOpening) => {
    dispatch({ type: "SET_AUTH_MODAL_STATUS", modalStatus, modal });
  },
  getSearchValue: (value: string) =>
    dispatch({ type: "GET_SEARCH_VALUE", value }),
  sendSearch: () => dispatch({ type: "SEND_RESEARCH", history }),
  setSearchBarStatus: (focused: boolean) =>
    dispatch({ type: "SET_SEARCH_BAR_FOCUS_STATUS", focused }),
});
export default withRouter(connect(mapState, mapDispatch)(NavBar));
