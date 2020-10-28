import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import { State } from "../../models/states";
import { AuthModalOpening } from "../../models/modal";
import { withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { OwnProps } from "../../models/connect";

const mapState = ({
  auth: { user },
  search: { search, focused },
  navbar: { account, mobile, main },
}: State) => ({
  user,
  search,
  focused,
  account,
  mobile,
});

const mapDispatch = (dispatch: Dispatch<AnyAction>, { history }: OwnProps) => {
  const setSearchBarStatus = (focused: boolean) =>
    dispatch({ type: "SET_SEARCH_BAR_FOCUS_STATUS", focused });

  history.listen(() => setSearchBarStatus(false));

  return {
    setSearchBarStatus,
    logout: () => dispatch({ type: "DISCONNECT_USER" }),
    openModal: ({ modalStatus, modal }: AuthModalOpening) => {
      dispatch({ type: "SET_AUTH_MODAL_STATUS", modalStatus, modal });
    },
    getSearchValue: (value: string) =>
      dispatch({ type: "GET_SEARCH_VALUE", value }),
    setAccountMenu: (target: React.MouseEvent<HTMLElement> | null) =>
      dispatch({ type: "SET_ACCOUNT_MENU_TARGET", target }),
    setMobileAnchor: (status: React.MouseEvent<HTMLElement> | null) =>
      dispatch({ type: "SET_MOBILE_ANCHOR", status }),
  };
};
export default withRouter(connect(mapState, mapDispatch)(NavBar));
